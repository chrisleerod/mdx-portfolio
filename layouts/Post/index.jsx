import { MDXRemote } from 'next-mdx-remote'
import BlogHeader from '../../components/BlogHeader'

import {
    Container
} from './index.styles'

export default function Post({ frontmatter }) {
    return (
        <Container>
            <BlogHeader frontmatter={frontmatter} />
        </Container>
    )
}