import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { blogsFileNames, blogsPath } from '../lib';
import WritingLayout from "../layouts/Writing"

export default function Writing({ blogs }) {
    return (
        <WritingLayout blogs={blogs} />
    )
}

export async function getStaticProps() {
    const blogs = blogsFileNames.map((slug) => {
        const content = fs.readFileSync(path.join(blogsPath, `${slug}`));
        const { data } = matter(content);
        return {
            frontmatter: data,
            slug: slug.replace(/\.mdx?$/, ''),
        };
    });
    blogs.sort((a, b) => a.position > b.position ? 1 : -1);
    return {
        props: {
            blogs: JSON.parse(JSON.stringify(blogs))
        },
    };
}