import { config, json_response } from "../config.js";

export async function handle_now_playing(req, method) {
  if (method !== "GET") return null;

  try {
    const token_res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${config.BASIC_AUTH}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: config.REFRESH_TOKEN,
      }),
    });

    const { access_token } = await token_res.json();
    const spotify_res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (spotify_res.status === 204) return json_response({ isPlaying: false });
    if (spotify_res.status > 400) return json_response({ error: "Spotify API Error" }, spotify_res.status);

    const song = await spotify_res.json();
    return json_response({
      is_playing: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((a) => a.name).join(", "),
      song_url: song.item.external_urls.spotify,
    });
  } catch (err) {
    return json_response({ error: err.message }, 500);
  }
}
