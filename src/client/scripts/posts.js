import { create_card, show_element } from "./utils.js";

const posts_container = document.querySelector(".posts");
const post_container = document.querySelector(".post");
const new_post_section = document.querySelector(".new-post");
const new_post_form = new_post_section.querySelector(".post-form");
const new_post_status = new_post_section.querySelector(".status-message");
const not_found_section = document.querySelector(".not-found");
const empty_section = document.querySelector(".empty");

export const init_post_form = () => {
  if (new_post_form.dataset.initialized) return;
  const content_textarea = new_post_form.querySelector('textarea[name="content"]');
  const image_uploader = document.getElementById("image-uploader");

  if (image_uploader && content_textarea) {
    image_uploader.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const password = prompt("Admin password");
      if (!password) {
        image_uploader.value = "";
        return;
      }

      const upload_data = new FormData();
      upload_data.append("files", file);
      upload_data.append("password", password);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: upload_data,
        });

        if (!res.ok) throw new Error("Upload failed");
        const data = await res.json();
        const markdown_image = `![${file.name}](${data.url})`;
        const start_pos = content_textarea.selectionStart;
        const end_pos = content_textarea.selectionEnd;
        const current_text = content_textarea.value;
        content_textarea.value = current_text.substring(0, start_pos) + markdown_image + current_text.substring(end_pos);
        content_textarea.focus();
        content_textarea.selectionStart = content_textarea.selectionEnd = start_pos + markdown_image.length;
      } catch (err) {
        alert("Failed to upload image");
        console.error(err);
      } finally {
        image_uploader.value = "";
      }
    });
  }

  new_post_form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const raw_content = form_data.get("content");
    const content = typeof DOMPurify !== "undefined" ? DOMPurify.sanitize(raw_content) : raw_content;
    const password = prompt("Admin password");
    if (!password) return;
    form_data.set("content", content);
    form_data.append("password", password);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: form_data,
      });
      const data = await res.json();
      if (res.status === 201) {
        new_post_status.innerHTML = "The post was successfully created";
        new_post_status.className = "status-success";
      } else {
        new_post_status.innerHTML = data.error || "Creation failed";
        new_post_status.className = "status-error";
      }
    } catch (err) {
      console.error(err);
      new_post_status.innerHTML = "Server connection error";
      new_post_status.className = "status-error";
    }
  });

  new_post_form.dataset.initialized = "true";
};

export const load_posts = async () => {
  try {
    const res = await fetch("/api/posts");
    if (!res.ok) throw new Error("Fetch failed");
    const posts = await res.json();
    if (posts.length === 0) {
      show_element(empty_section);
      return;
    }
    for (const post of posts) {
      create_card(post.title, `/posts/${post.slug}`, post.preview, post.tags, posts_container);
    }
    show_element(posts_container);
  } catch (err) {
    console.error(err);
    show_element(not_found_section);
  }
};

export const load_post = async (slug) => {
  try {
    const res = await fetch(`/api/posts/${slug}`);
    if (!res.ok) {
      show_element(not_found_section);
      return;
    }

    const data = await res.json();
    const title = document.createElement("h1");
    const meta_container = document.createElement("div");
    const date_span = document.createElement("span");
    const hr = document.createElement("hr");
    const content_container = document.createElement("div");

    let clean_content = data.content;
    if (typeof marked !== "undefined" && typeof DOMPurify !== "undefined") {
      clean_content = DOMPurify.sanitize(marked.parse(data.content));
    }

    post_container.innerHTML = "";
    title.classList.add("post-title");
    title.textContent = data.title;
    meta_container.classList.add("post-meta");

    if (data.tags && data.tags.trim() !== "") {
      const tags_container = document.createElement("div");
      tags_container.classList.add("tags");
      data.tags.split(",").forEach((text) => {
        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = text.trim();
        tags_container.append(tag);
      });
      meta_container.append(tags_container);
    }

    date_span.classList.add("post-date");
    date_span.textContent = new Date(data.created_at).toLocaleDateString();
    meta_container.append(date_span);
    hr.classList.add("post-divider");
    content_container.classList.add("post-content", "markdown-body");
    content_container.innerHTML = clean_content;
    post_container.append(title, meta_container, hr, content_container);
    show_element(post_container);
  } catch (err) {
    console.error(err);
    show_element(not_found_section);
  }
};
