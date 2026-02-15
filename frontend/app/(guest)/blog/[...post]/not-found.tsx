import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostNotFound() {
  return (
    <div className="px-34 py-22">
      <div className="border rounded-lg p-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary/80">Not Found Blog Post</h1>
        <p className="text-primary/75">Please go back to the Blog page.</p>
      
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    </div>
  )
}