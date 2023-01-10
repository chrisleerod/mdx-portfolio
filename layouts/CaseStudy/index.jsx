import { MDXRemote } from 'next-mdx-remote'

import {
    Container
} from './index.styles'

export default function CaseStudy({ frontmatter, source }) {
    return (
        <Container>
            <MDXRemote {...source} />
        </Container>
    )
}