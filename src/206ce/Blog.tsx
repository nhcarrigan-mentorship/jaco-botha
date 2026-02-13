import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type Frontmatter = {
    title:string;
    date:string;
    description?:string;
    tags?:string[];
    draft?:boolean;
}


export type Post = {
    slug:string;
    frontmatter:Frontmatter;
    content:string;
}


export async function getAllPosts(postsDirectory:string):Promise<Post[]> {

    const files = await fs.readdir(postsDirectory,{withFileTypes: true});
    
    const mdxFiles = files .filter((f) => f.isFile() && f.name.endsWith(".mdx")) .map((f)=>f.name);

    
    const posts = await Promise.all(
        mdxFiles.map(async (filename) => {
            const slug = filename.replace(/\.mdx$/,"");
            const fullPath = path.join(postsDirectory, filename);
            const fileContents = await fs.readFile(fullPath,"utf8");

            const {data,content} = matter(fileContents);

            return {
                slug, frontmatter: data as Frontmatter, content,
            };
        })
    );

    return posts .filter((p) => !p.frontmatter.draft) .sort((a,b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

}


export default function Blog() {
    return(<section><div><h2>Blog Component</h2></div></section>)
}