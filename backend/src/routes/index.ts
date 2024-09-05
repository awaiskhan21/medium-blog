import { Hono } from "hono";
import blog from "./blog";
import user from "./user";

const api = new Hono().basePath("/api/v1");

api.get("/", (c) => {
  return c.text("Hello from routes folder!");
});

api.route("/user", user);
api.route("/blog", blog);
export default api;
