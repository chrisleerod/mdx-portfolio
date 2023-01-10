import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { projectsFileNames, projectsPath, blogsFileNames, blogsPath } from '../lib';
import HomeLayout from '../layouts/Homepage'

export default function Home({ projects, blogs }) {
  return (
    <HomeLayout
      projects={projects}
      blogs={blogs}
    />
  )
}

export async function getStaticProps() {
  const projects = projectsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(projectsPath, `${slug}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ''),
    };
  });
  const blogs = blogsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(blogsPath, `${slug}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ''),
    };
  });
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      blogs: JSON.parse(JSON.stringify(blogs))
    },
  };
}
