import BlogGrid from '../../components/BlogGrid'
import BlogCard from '../../components/BlogCard'

import {
    Container,
    Header,
    Title,
    Description
} from './index.style'

export default function WritingLayout({ blogs }) {
    return (
        <Container>
            <Header>
                <Title>
                    Writing
                </Title>
                <Description>
                    My digital journal of thoughts, work from others that I admire, collections of things I stumble upon and like – or dislike.
                </Description>
            </Header>
            <BlogGrid single blogs={blogs} >
                {blogs.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).map((blog, i) => (
                    <BlogCard blog={blog} key={i} blogs={blogs} />
                ))}
            </BlogGrid>
        </Container>
    )
}