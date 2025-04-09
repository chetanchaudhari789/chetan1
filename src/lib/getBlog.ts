// lib/getblogs.ts
import { prisma } from "./prisma";

export async function getAllBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
      },
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return []; // fallback to prevent Vercel build fail
  }
}
