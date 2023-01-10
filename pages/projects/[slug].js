import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { projectsFileNames, projectsPath } from '../../lib';
import CaseStudy from '../../layouts/CaseStudy';

export default function Project(props) {
  // TODO
  return (
    <CaseStudy {...props} />
  )
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

  const postFilePath = path.join(projectsPath, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: { development: false },
    // Optionally pass remark/rehype plugins
    scope: data,
  })

  const project = projects.find(b => b.slug === params.slug)
  // TODO: Add some error handling here?

  return {
    props: {
      source: mdxSource,
      ...project
    },
  };
}

export const getStaticPaths = async () => {
  const paths = projectsFileNames
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}