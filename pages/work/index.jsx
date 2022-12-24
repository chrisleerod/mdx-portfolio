import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { projectsFileName, projectsPath } from "../../lib";

const Work = () => {
    return (
        <>
        </>
    )
}

export default Work;

export async function getStaticProps() {
    projectsFileName.map(slug => {
        const content = fs.readFileSync(path.join(projectsPath, slug));
        const { data } = matter(content);
        return {
            frontMatter: data,
            slug,
        }
    })
    return {
        props: {
            posts,
        }
    }
}