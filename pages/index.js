import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { projectsFileNames, projectsPath, blogsFileNames, blogsPath } from '../lib';
import Nav from '../components/Nav';
import Homepage from '../layouts/Homepage'

export default function Home({ projects, blogs }) {
  console.log(projects)
  return (
    <div className={styles.container}>
      <Nav />
      <Homepage
        projects={projects}
        blogs={blogs}
      />
    </div>
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
