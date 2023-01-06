import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { blogsFileNames, blogsPath } from '../../lib';

export default function Writing(props) {
  console.log(props)

  // TODO
  return <>{JSON.stringify(props)}</>
}

export async function getStaticProps({ params }) {
  const blogs = blogsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(blogsPath, `${slug}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ''),
    };
  });
  
  const blog = blogs.find(b => b.slug === params.slug)
  // TODO: Add some error handling here?

  return {
    props: {
      ...blog
    },
  };
}

export async function getStaticPaths() {
  const paths = blogsFileNames.map((slug) => ({
    params: { slug: slug.replace(/\.mdx?$/, '') },
  }));
  return {
    paths,
    fallback: false,
  };
}
