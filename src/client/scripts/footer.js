import { show_element } from "./utils.js";

const source_link = "https://github.com/f01zy/website";

export const configure_footer = async () => {
  const footer = document.querySelector("footer");
  const label = document.createElement("p");

  try {
    const res = await fetch("/api/now-playing");
    if (!res.ok) {
      label.innerHTML = `<a href="${source_link}" target="_blank">source</a>`;
      footer.append(label);
      return;
    }
    const data = await res.json();
    if (data.is_playing) {
      const spotify_icon = document.createElement("img");
      spotify_icon.src = "/assets/spotify.svg";
      footer.append(spotify_icon);
      label.innerHTML = `Currently listening <a href="${data.song_url}" target="_blank">${data.title}</a> - ${data.artist}`;
    } else {
      label.innerHTML = `<a href="${source_link}" target="_blank">source</a>`;
    }
    footer.append(label);
    show_element(footer);
  } catch (err) {
    console.error(err);
    label.innerHTML = `<a href="${source_link}" target="_blank">source</a>`;
    footer.append(label);
  }
};
