import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { blogsFileNames, blogsPath } from '../../lib';
import Post from '../../layouts/Post';

export default function Writing(props) {
  console.log(props)

  // TODO
  return (
    <Post {...props} />
  )
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

  const postFilePath = path.join(blogsPath, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: { development: false },
    // Optionally pass remark/rehype plugins
    scope: data,
  })

  const blog = blogs.find(b => b.slug === params.slug)
  // TODO: Add some error handling here?

  return {
    props: {
      source: mdxSource,
      ...blog
    },
  };
}

export const getStaticPaths = async () => {
  const paths = blogsFileNames
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}