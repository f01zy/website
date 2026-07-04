const image = [
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠖⠃⠀⠀⠀⡁⠀⠀⠀⠀⠀⠐⠆⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢔⡤⠊⠁⠀⠀   ",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠁⠀⠀⠘⠁⢀⠀⠀⠀⠀⢈⠓⠂⠠⡄⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠿⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀  ",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⠁⠀⠠⡚⠁⢀⣙⣀⣈⡩⠬⢁⠀⢑⠶⠤⡆⠤⡀⠀⠀⠀⠀⠀⠀⢀⠴⢲⣋⣽⣷⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⢠⠀⠀⣶⠃⠗⣡⣶⣮⣿⡿⠿⠿⢿⣿⣷⣶⣤⣤⠤⠴⠦⠬⣤⣤⠄⣉⠉⠝⢲⣿⡷⠻⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠁⡀⡸⠁⣰⣿⡿⠛⠋⣁⡀⠤⠤⢄⡀⠈⠛⢯⣿⣟⣾⣶⣶⣮⣭⣵⣾⣿⣟⠿⠉⢨⠖⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢠⠳⡧⣻⡿⠋⢀⠒⠉⠀⠀⠀⠀⠀⠀⠉⠢⠀⠀⠙⠛⣻⣿⣿⣿⢿⣿⣿⠟⡱⠖⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢠⣧⠓⣾⣿⠁⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢦⣠⣾⣿⠿⣿⣿⣿⡿⣫⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠂⢃⣸⣿⠇⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⠟⢿⠁⠸⡿⣿⣯⡶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢘⡄⠘⣿⣿⠀⠸⡀⠀⠀⠀⠀⠀⢀⣀⣴⣾⣿⡿⡟⡋⠐⡇⠀⢸⣿⣿⠃⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢡⠘⢰⣿⡿⡆⠀⣇⠀⣀⣠⣤⣶⣿⢷⢟⠻⠀⠈⠀⠀⠀⡇⠀⣼⣿⣿⠂⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⢀⡴⢯⣾⠟⡏⢀⣠⣿⣿⣿⣟⢟⡋⠅⠘⠉⠀⠀⠀⠀⠀⠁⢠⣿⣟⠃⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⣻⣷⡿⢙⣩⣶⡿⠿⠛⠉⠑⢡⡁⠀⠀⠀⠀⠀⠀⢀⠔⠁⠀⣰⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣡⣾⣥⣾⢫⡦⠾⠛⠙⠉⠀⠀⢀⣀⠀⠈⠙⠓⠦⠤⠤⠀⠘⠁⢀⡤⣾⡿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠔⣴⣾⣿⣿⢟⢝⠢⠃⢀⣤⢴⣾⣮⣷⣶⢿⣶⡤⣐⡀⠀⣠⣤⢶⣪⣿⣿⡿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⡀⣦⣾⡿⡛⠵⠺⢈⡠⠶⠿⠥⠥⡭⠉⠉⢱⡛⠻⠿⣿⣿⣿⣿⣿⠿⠿⠿⠟⠭⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⢀⢴⠕⣋⠝⠕⠐⠀⠔⠉⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠉⠁⠉⠁⠁⠈⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⢀⣠⠁⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
];

// Styles
const canvas_width = window.innerWidth;
const canvas_height = 300;
const font_size = 10;
const char_space_x = 4;
const char_space_y = 4;
const image_offset_x = 25;
const image_offset_y = 0;

// Physics
const spring_coefficient = 150;
const particle_weight = 1.0;
const mouse_radius = 150;
const mouse_power = 6000;
const friction = 0.85;

// Elements
const canvas = document.querySelector("canvas");
const home_section = document.querySelector(".home");
const links_container = home_section.querySelector(".links");
const projects_container = document.querySelector(".projects");
const posts_container = document.querySelector(".posts");
const post_container = document.querySelector(".post");
const new_post_section = document.querySelector(".new-post");
const new_post_form = new_post_section.querySelector(".post-form");
const new_post_status = new_post_section.querySelector(".status-message");
const not_found_section = document.querySelector(".not-found");
const go_back_button = not_found_section.querySelector(".back-link");
const empty_section = document.querySelector(".empty");

// Utility
const source_link = "https://github.com/f01zy/website";
const ctx = canvas.getContext("2d");
const particles = [];
let last_time = 0;
let cursor_x = 0;
let cursor_y = 0;

const links = [
  { label: "github", href: "https://github.com/f01zy" },
  { label: "discord", href: "https://discord.com/users/858285755658666034" },
  { label: "anilist", href: "https://anilist.co/user/f01zy/" },
  { label: "chesscom", href: "https://www.chess.com/member/f01zy" },
  { label: "gpg", href: "/assets/gpg.asc" },
];

document.addEventListener("mousemove", (ev) => {
  const rect = canvas.getBoundingClientRect();
  cursor_x = ev.clientX - rect.left;
  cursor_y = ev.clientY - rect.top;
});

go_back_button.addEventListener("click", () => {
  history.back();
});

new_post_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const title = form_data.get("title");
  const preview = form_data.get("preview");
  const raw_content = form_data.get("content");
  const content = typeof DOMPurify !== "undefined" ? DOMPurify.sanitize(raw_content) : raw_content;
  const password = get_admin_password();

  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, preview, content, password }),
    });

    const result_data = await response.json();
    if (response.status === 201) {
      new_post_status.innerHTML = "The post was successfully created";
      new_post_status.className = "status-message status-success";
    } else {
      new_post_status.innerHTML = result_data.error || "Creation failed";
      new_post_status.className = "status-message status-error";
    }
  } catch (err) {
    console.error(err);
    new_post_status.innerHTML = "Server connection error";
    new_post_status.className = "status-message status-error";
  }
});

const loop = (curr_time) => {
  if (!last_time) last_time = curr_time;
  const delta_time = (curr_time - last_time) / 1000;
  last_time = curr_time;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fafafa";
  ctx.font = `${font_size}px Cormorant Garamond`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  particles.forEach((particle) => {
    const spring_dx = particle.targetX - particle.x;
    const spring_dy = particle.targetY - particle.y;
    const spring_force_x = spring_dx * spring_coefficient;
    const spring_force_y = spring_dy * spring_coefficient;
    const cursor_dx = particle.x - cursor_x;
    const cursor_dy = particle.y - cursor_y;
    const cursor_distance = Math.sqrt(cursor_dx * cursor_dx + cursor_dy * cursor_dy);
    let cursor_force_x = 0;
    let cursor_force_y = 0;

    if (cursor_distance > 0 && cursor_distance < mouse_radius) {
      const force_intensity = (mouse_radius - cursor_distance) / mouse_radius;
      cursor_force_x = (cursor_dx / cursor_distance) * force_intensity * mouse_power;
      cursor_force_y = (cursor_dy / cursor_distance) * force_intensity * mouse_power;
    }

    const total_force_x = spring_force_x + cursor_force_x;
    const total_force_y = spring_force_y + cursor_force_y;
    const acceleration_x = total_force_x / particle_weight;
    const acceleration_y = total_force_y / particle_weight;
    particle.velocity_x = (particle.velocity_x + acceleration_x * delta_time) * friction;
    particle.velocity_y = (particle.velocity_y + acceleration_y * delta_time) * friction;
    particle.x += particle.velocity_x * delta_time;
    particle.y += particle.velocity_y * delta_time;
    ctx.fillText(particle.char, particle.x, particle.y);
  });

  requestAnimationFrame(loop);
};

const image_animation = () => {
  canvas.width = canvas_width;
  canvas.height = canvas_height;
  const metrics = ctx.measureText(" ");
  const char_width = metrics.width + char_space_x;
  const char_height = font_size + char_space_y;
  const max_row_length = Math.max(...image.map((row) => row.length));
  const total_image_width = max_row_length * char_width;
  const total_image_height = image.length * char_height;
  const startX = canvas.width / 2 - total_image_width / 2 + image_offset_x;
  const startY = canvas.height / 2 - total_image_height / 2 + image_offset_y;

  image.forEach((row, i) => {
    for (let j = 0; j < row.length; j++) {
      const char = row[j];
      if (char != " ") {
        const targetX = startX + j * char_width;
        const targetY = startY + i * char_height;
        const particle = {
          char,
          x: targetX,
          y: targetY,
          targetX,
          targetY,
          velocity_x: 0,
          velocity_y: 0,
        };
        particles.push(particle);
      }
    }
  });

  requestAnimationFrame(loop);
};

const create_card = (title_text, link_url, description_text, tags, parent_container) => {
  const container = document.createElement("div");
  container.classList.add("block");

  const title = document.createElement("a");
  title.textContent = title_text;
  title.href = link_url;
  title.target = "_blank";

  const description = document.createElement("p");
  description.innerHTML = description_text;

  container.append(title, description);

  if (tags && tags.trim() !== "") {
    const tags_container = document.createElement("div");
    tags_container.classList.add("tags");
    tags.split(",").forEach((text) => {
      const tag = document.createElement("span");
      tag.classList.add("tag");
      tag.textContent = text.trim();
      tags_container.append(tag);
    });
    container.append(tags_container);
  }

  parent_container.append(container);
};

const load_posts = async () => {
  try {
    const response = await fetch("/api/posts");
    if (!response.ok) throw new Error("Fetch failed");
    const post_list = await response.json();
    if (post_list.length == 0) {
      show_element(empty_section);
      return;
    }
    for (const post of post_list) {
      create_card(post.title, `/posts/${post.slug}`, post.preview, post.tags, posts_container);
    }
    show_element(posts_container);
  } catch (err) {
    console.error(err);
    show_element(not_found_section);
  }
};

const load_post = async (slug) => {
  try {
    const response = await fetch(`/api/posts/${slug}`);
    if (!response.ok) {
      show_element(not_found_section);
      return;
    }

    const post_data = await response.json();
    const title = document.createElement("h1");
    const meta_container = document.createElement("div");
    const date_span = document.createElement("span");
    const hr = document.createElement("hr");
    const content_container = document.createElement("div");

    let clean_content = post_data.content;
    if (typeof marked !== "undefined" && typeof DOMPurify !== "undefined") {
      clean_content = DOMPurify.sanitize(marked.parse(post_data.content));
    }

    post_container.innerHTML = "";
    title.classList.add("post-title");
    title.textContent = post_data.title;
    meta_container.classList.add("post-meta");

    if (post_data.tags && post_data.tags.trim() !== "") {
      const tags_container = document.createElement("div");
      tags_container.classList.add("tags");
      post_data.tags.split(",").forEach((text) => {
        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = text.trim();
        tags_container.append(tag);
      });
      meta_container.append(tags_container);
    }

    date_span.classList.add("post-date");
    date_span.textContent = new Date(post_data.created_at).toLocaleDateString();
    meta_container.append(date_span);
    hr.classList.add("post-divider");
    content_container.classList.add("post-content");
    content_container.innerHTML = clean_content;

    post_container.append(title, meta_container, hr, content_container);
    show_element(post_container);
  } catch (err) {
    console.error(err);
    show_element(not_found_section);
  }
};

const load_projects = async () => {
  try {
    const response = await fetch("/api/projects");
    if (!response.ok) throw new Error("Fetch failed");
    const project_list = await response.json();
    if (project_list.length == 0) {
      show_element(empty_section);
      return;
    }
    for (const project of project_list) {
      create_card(project.title, project.link, project.description, project.tags, projects_container);
    }
    show_element(projects_container);
  } catch (err) {
    console.error(err);
    show_element(not_found_section);
  }
};

const check_currently_playing = async () => {
  try {
    const response = await fetch("/api/now-playing");
    if (!response.ok) return;
    const track_data = await response.json();
    const footer = document.querySelector("footer");
    const label = document.createElement("p");
    if (track_data.is_playing) {
      const spotify_icon = document.createElement("img");
      spotify_icon.src = "/assets/spotify.svg";
      footer.append(spotify_icon);
      label.innerHTML = `Currently listening <a href="${track_data.song_url}" target="_blank">${track_data.title}</a> - ${track_data.artist}`;
    } else {
      label.innerHTML = `<a href="${source_link}" target="_blank">source</a>`;
    }
    footer.append(label);
    footer.style.display = "flex";
    footer.classList.add("fade-in");
  } catch (err) {
    console.error(err);
  }
};

const configure_links = () => {
  links_container.innerHTML = "";
  links.forEach((link, i) => {
    const link_element = document.createElement("a");
    const separator = document.createElement("span");
    link_element.innerText = link.label;
    link_element.href = link.href;
    link_element.target = "_blank";
    links_container.append(link_element);
    if (i < links.length - 1) {
      separator.innerText = "|";
      links_container.append(separator);
    }
  });
};

const get_admin_password = () => {
  return prompt("Admin password");
};

const show_element = (element) => {
  element.classList.add("fade-in");
  element.classList.remove("none");
};

const pathname = window.location.pathname;
const routes = [
  {
    path: "/",
    action: () => {
      show_element(home_section);
      configure_links();
      image_animation();
    },
  },
  { path: "/projects", action: () => load_projects() },
  { path: "/posts/new", action: () => show_element(new_post_section) },
  { path: "/posts", action: () => load_posts() },
  {
    path: /^\/posts\/([a-zA-Z0-9_-]+)$/,
    action: (match) => load_post(match[1]),
  },
];

let route_triggered = false;
for (const route of routes) {
  if (route.path instanceof RegExp) {
    const match = pathname.match(route.path);
    if (match) {
      route.action(match);
      route_triggered = true;
      break;
    }
  } else if (route.path === pathname) {
    route.action();
    route_triggered = true;
    break;
  }
}

if (!route_triggered) {
  show_element(not_found_section);
}

check_currently_playing();
