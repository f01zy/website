import { create_card, show_element } from "./utils.js";

const projects_container = document.querySelector(".projects");
const not_found_section = document.querySelector(".not-found");
const empty_section = document.querySelector(".empty");

export const load_projects = async () => {
  try {
    const res = await fetch("/api/projects");
    if (!res.ok) throw new Error("Fetch failed");
    const projects = await res.json();
    if (projects.length === 0) {
      show_element(empty_section);
      return;
    }
    for (const project of projects) {
      create_card(project.title, project.link, project.description, project.tags, projects_container);
    }
    show_element(projects_container);
  } catch (err) {
    console.error(err);
    show_element(not_found_section);
  }
};
