import Link from "next/link";
import path from "path";
import { getAllPosts } from "@/206ce/Blog";

export default async function BlogPage() {
  /* Get all posts from Blog.tsx */
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const posts = await getAllPosts(postsDirectory);

    return(
    
        <main>
            <h1>BlogPage</h1>
        <div>
            {posts.map
            (
                (post) => (

        <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} > </Link>
            
            
            </article>
        ))
    } 
        </div>
        </main>
    )
    }