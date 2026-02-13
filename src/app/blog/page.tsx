import Link from "next/link";
import  {getAllPosts} from "@/206ce/Blog";


export default async function BlogPage() {
    /* Get all posts from Blog.tsx */
    const posts = await getAllPosts("/posts");

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