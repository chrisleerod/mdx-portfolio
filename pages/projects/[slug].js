import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { projectsFileNames, projectsPath } from '../../lib';

export default function Project(props) {
  console.log(props)
  // TODO
  return <>{JSON.stringify(props)}</>
}

export async function getStaticProps({ params }) {
  const projects = projectsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(projectsPath, `${slug}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ''),
    };
  });
  
  const project = projects.find(p => p.slug === params.slug)
  // TODO: Add some error handling here?

  return {
    props: {
      ...project
    },
  };
}

export async function getStaticPaths() {
  const paths = projectsFileNames.map((slug) => ({
    params: { slug: slug.replace(/\.mdx?$/, '') },
  }));
  return {
    paths,
    fallback: false,
  };
}
