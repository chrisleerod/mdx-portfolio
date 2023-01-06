import { MDXRemote } from 'next-mdx-remote'
import BlogHeader from '../../components/BlogHeader'

import {
    Container
} from './index.styles'

export default function Post({ frontmatter, source }) {
    return (
        <Container>
            <BlogHeader frontmatter={frontmatter} />
            <MDXRemote {...source} />
        </Container>
    )
}