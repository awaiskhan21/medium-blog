import { createBlogInput, updateBlogInput } from "@awais21/mediun-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    authorId: string;
  };
}>();

//middleware
blog.use("/*", async (c, next) => {
  console.log("is it hitting the middleware");
  const token = c.req.header("authorization")?.split(" ")[1] || "";
  const secretKey = c.env.JWT_SECRET;
  const response = await verify(token, secretKey);
  console.log("responst" + JSON.stringify(response));
  if (response) {
    c.set("authorId", response.id as string);
    await next();
  } else {
    c.status(403);
    return c.json({ error: "You are not logged in" });
  }
});

blog.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "inputs not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, // this url is comming from wrangler.toml not .env
  }).$extends(withAccelerate());
  const authorId = c.get("authorId");
  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
    },
  });
  return c.json({
    message: "blog created Successfully",
    id: blog.id,
  });
});

blog.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
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
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      message: "blog updated Successfully",
      blog: blog,
    });
    return c.text("bulk blog");
  } catch (e) {}
});

//Todo: add pagination
blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, // this url is comming from wrangler.toml not .env
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        content: true,
        title: true,
        id: true,
        createdAt: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log("blogs" + blogs);
    return c.json({
      blogs: blogs,
    });
  } catch (e) {
    return c.json({
      error: e,
    });
  }
});

blog.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, // this url is comming from wrangler.toml not .env
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blog: blog,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error while fetching blog post",
    });
  }
});

export default blog;
