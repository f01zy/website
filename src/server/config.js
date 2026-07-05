import { Database } from "bun:sqlite";
import { join } from "path";

export const config = {
  CLIENT_ID: Bun.env.SPOTIFY_CLIENT_ID,
  CLIENT_SECRET: Bun.env.SPOTIFY_CLIENT_SECRET,
  REFRESH_TOKEN: Bun.env.SPOTIFY_REFRESH_TOKEN,
  ADMIN_PASSWORD: Bun.env.ADMIN_PASSWORD,
  PORT: Bun.env.PORT,
  BASIC_AUTH: btoa(`${Bun.env.SPOTIFY_CLIENT_ID}:${Bun.env.SPOTIFY_CLIENT_SECRET}`),
  ROOT_DIR: join(import.meta.dir, "..", ".."),
};

export const db = new Database("db.db");

export const json_response = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
