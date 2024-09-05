import { Hono } from "hono";
import blog from "./routes/blog";
import user from "./routes/user";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user", user);
app.route("/api/v1/blog", blog);

export default app;
