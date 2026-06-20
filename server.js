import { Database } from "bun:sqlite"
import { join } from "path";

const CLIENT_ID = Bun.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = Bun.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = Bun.env.SPOTIFY_REFRESH_TOKEN;
const PORT = Bun.env.PORT
const BASIC_AUTH = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
const db = new Database("db.db")

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/now-playing" && req.method == "GET") {
      try {
        const token_response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Authorization": `Basic ${BASIC_AUTH}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN,
          }),
        });
        const { access_token } = await token_response.json();
        const spotify_response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
          headers: { "Authorization": `Bearer ${access_token}` },
        });
        if (spotify_response.status === 204 || spotify_response.status > 400) {
          return Response.json({ isPlaying: false });
        }
        const song = await spotify_response.json();
        return Response.json({
          is_playing: song.is_playing,
          title: song.item.name,
          artist: song.item.artists.map(a => a.name).join(", "),
          album_image_url: song.item.album.images[0].url,
          song_url: song.item.external_urls.spotify,
        });
      } catch (err) {
        return Response.json({ error: err.message }, { status: 500 });
      }
    }

    if (url.pathname == "/api/projects" && req.method == "GET") {
      const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
      return Response.json(projects);
    }

    const file = Bun.file(join(import.meta.dir, url.pathname));
    if (url.pathname != "/" && await file.exists()) {
      return new Response(file);
    }
    return new Response(Bun.file(join(import.meta.dir, "index.html")));
  },
});

console.log(`Server running at ${PORT} port`);
