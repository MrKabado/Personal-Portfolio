import { BLOG_POST } from "@/constants/blog"
import Link from "next/link"
import { notFound } from "next/navigation";

export default function Blog() {
  if (process.env.SHOW_BLOGS !== "true") {
    notFound();
  }

  return (
    <div className="px-34 py-22">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="flex flex-col gap-4">
        {BLOG_POST.map((blog) => (
          <Link key={blog.id} href={`./blog/${blog.slug}`}>
            <div className="border rounded-lg p-4 hover:bg-muted/50">
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <p className="text-muted-foreground text-base mt-1">{blog.overview}</p>
              <p className="text-sm text-muted-foreground mt-2">{blog.date} • {blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  )
}