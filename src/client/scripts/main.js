import { start_image_animation } from "./animation.js";
import { load_projects } from "./projects.js";
import { load_posts, load_post, init_post_form } from "./posts.js";
import { configure_footer } from "./footer.js";
import { configure_links } from "./links.js";
import { show_element } from "./utils.js";

const home_section = document.querySelector(".home");
const not_found_section = document.querySelector(".not-found");
const go_back_button = not_found_section.querySelector(".back-link");
const new_post_section = document.querySelector(".new-post");
go_back_button.addEventListener("click", () => history.back());

const pathname = decodeURIComponent(window.location.pathname);
const routes = [
  {
    path: "/",
    action: () => {
      show_element(home_section);
      configure_links();
      start_image_animation();
    },
  },
  { path: "/projects", action: () => load_projects() },
  {
    path: "/posts/new",
    action: () => {
      show_element(new_post_section);
      init_post_form();
    },
  },
  { path: "/posts", action: () => load_posts() },
  {
    path: /^\/posts\/([a-zA-Zа-яА-ЯёЁ0-9_-]+)$/,
    action: (match) => load_post(match[1]),
  },
];

if (typeof marked !== "undefined" && typeof markedKatex !== "undefined") {
  marked.use(
    markedKatex({
      throwOnError: false,
    }),
  );
}

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

if (!route_triggered) show_element(not_found_section);
configure_footer();
