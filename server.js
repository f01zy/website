import { Database } from "bun:sqlite";
import { join } from "path";

const CLIENT_ID = Bun.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = Bun.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = Bun.env.SPOTIFY_REFRESH_TOKEN;
const ADMIN_PASSWORD = Bun.env.ADMIN_PASSWORD;
const PORT = Bun.env.PORT;
const BASIC_AUTH = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
const db = new Database("db.db");

const get_response_options = (status) => ({
  status: status,
  headers: { "Content-Type": "application/json" },
});

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/now-playing" && req.method == "GET") {
      try {
        const token_response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            Authorization: `Basic ${BASIC_AUTH}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN,
          }),
        });
        const { access_token } = await token_response.json();
        const spotify_response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
          headers: { Authorization: `Bearer ${access_token}` },
        });
        if (spotify_response.status == 204) {
          return new Response(JSON.stringify({ isPlaying: false }), get_response_options(200));
        }
        if (spotify_response.status > 400) {
          return new Response(JSON.stringify({ error: "Spotify API Error" }), get_response_options(spotify_response.status));
        }
        const song = await spotify_response.json();
        return new Response(
          JSON.stringify({
            is_playing: song.is_playing,
            title: song.item.name,
            artist: song.item.artists.map((a) => a.name).join(", "),
            album_image_url: song.item.album.images[0].url,
            song_url: song.item.external_urls.spotify,
          }),
          get_response_options(200),
        );
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), get_response_options(500));
      }
    }

    if (url.pathname == "/api/posts" && req.method == "POST") {
      try {
        const body = await req.json();
        const title = body.title;
        const preview = body.preview;
        const content = body.content;
        const password = body.password;
        const slug = title
          .toLowerCase()
          .replace(/[^a-z0-9а-яё\s]/g, "")
          .replace(/\s+/g, "-");

        if (password != ADMIN_PASSWORD) {
          return new Response(JSON.stringify({ error: "The passwords don't match" }), get_response_options(403));
        }

        const query = db.prepare(`
          INSERT INTO posts (title, preview, content, slug)
          VALUES (?, ?, ?, ?)
        `);

        query.run(title, preview, content, slug);
        return new Response(JSON.stringify({ success: true }), get_response_options(201));
      } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({ error: "Invalid JSON or DB error" }), get_response_options(400));
      }
    }

    if (url.pathname == "/api/posts" && req.method == "GET") {
      const posts = db.prepare("SELECT * FROM posts ORDER BY created_at DESC").all();
      return new Response(JSON.stringify(posts), get_response_options(200));
    }

    if (url.pathname.startsWith("/api/posts/") && url.pathname != "/api/posts" && req.method == "GET") {
      const slug = url.pathname.replace("/api/posts/", "");
      const post = db.prepare("SELECT * FROM posts WHERE slug = ?").get(slug);
      if (!post) {
        return new Response(JSON.stringify({ error: "Post not found" }), get_response_options(404));
      }
      return new Response(JSON.stringify(post), get_response_options(200));
    }

    if (url.pathname == "/api/projects" && req.method == "GET") {
      const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
      return new Response(JSON.stringify(projects), get_response_options(200));
    }

    const file = Bun.file(join(import.meta.dir, url.pathname));
    if (url.pathname != "/" && (await file.exists())) {
      return new Response(file);
    }
    return new Response(Bun.file(join(import.meta.dir, "index.html")));
  },
});

console.log(`Server running at ${PORT} port`);
