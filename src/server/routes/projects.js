import { db, json_response } from "../config.js";

export async function handle_projects(req, method) {
  if (method !== "GET") return null;
  const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
  return json_response(projects);
}
