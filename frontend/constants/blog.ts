export type BlogPost = {
  id: string,
  slug: string,
  title: string,
  overview: string,
  content: string,
  category: string[],
  date: string,
  author: string
}

export const BLOG_POST: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    overview: "Learn the basics of Next.js and build your first app.",
    content: "Next.js is a framework that make it easy to build full-stack application. It provides file-based routing, server components, and more.",
    category: ["tech", "nextjs"],
    date: "February 7, 2026",
    author: "Rigel Recurerdo" 
  },
  {
    id: "2",
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive",
    overview: "Understanding the useState, useEffect, and custom hooks.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: ["tech", "reactjs"],
    date: "February 7, 2026",
    author: "Jinky Aguillar"
  }
]