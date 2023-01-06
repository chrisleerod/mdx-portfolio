import BlogGrid from '../../components/BlogGrid'
import BlogCard from '../../components/BlogCard'

import {
    Container,
    Header,
    Title,
    Description,
    Grid
} from './index.style'

export default function WritingLayout({ blogs, noWrap }) {
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
            <BlogGrid single noWrap blogs={blogs} >
            {blogs.map((blog, i) => (
                    <BlogCard noWrap={noWrap} blog={blog} key={i} blogs={blogs} />
                ))}
            </BlogGrid>
        </Container>
    )
}