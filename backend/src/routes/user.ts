import { signinInput, signupInput } from "@awais21/mediun-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

user.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "inputs not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, // this url is comming from wrangler.toml not .env
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const secret = c.env.JWT_SECRET;
    const token = await sign({ id: user.id }, secret);
    return c.json({
      message: "User created successfully",
      jwt: token,
    });
  } catch (e) {
    c.status(411);
    return c.text("User already exist");
  }
});

user.post("/signin", async (c) => {
  const body = await c.req.json();

  //zod validation
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "inputs not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, // this url is comming from wrangler.toml not .env
  }).$extends(withAccelerate());

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }
  const secret = c.env.JWT_SECRET;
  const token = await sign({ id: user.id }, secret);
  return c.json({
    jwt: token,
  });
});

export default user;
