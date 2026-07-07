import { show_element } from "./utils.js";

const source_link = "https://github.com/f01zy/website";

export const configure_footer = async () => {
  const footer = document.querySelector("footer");
  const label = document.createElement("p");
  const source_text = `<a href="${source_link}" target="_blank">source</a>`;

  try {
    const res = await fetch("/api/now-playing");
    if (!res.ok) {
      label.innerHTML = source_text;
      return;
    }
    const data = await res.json();
    if (!data.is_playing) {
      label.innerHTML = source_text;
      return;
    }
    const icon = document.createElement("img");
    const artists_text = data.artists.map((artist, i) => `<a href="${artist.url}" target="_blank">${artist.name}</a>`).join(", ");
    icon.src = "/assets/spotify.svg";
    label.innerHTML = `Currently listening <a href="${data.song_url}" target="_blank">${data.title}</a> - ${artists_text}`;
    footer.append(icon);
  } catch (err) {
    label.innerHTML = source_text;
    console.error(err);
  } finally {
    footer.append(label);
    show_element(footer);
  }
};
