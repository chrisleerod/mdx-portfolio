import BlogCard from '../BlogCard'

import {
    Container,
    Grid,
    Header,
    Title
} from './index.styles'

export default function WorkGrid({ blogs }) {
    return (
        <Container>
            <Header>
                <Title>
                    Selected writing
                </Title>
            </Header>
            <Grid>
                {blogs.slice(0, 2).map((blog, i) => (
                    <BlogCard blog={blog} key={i} blogs={blogs} />
                ))}
            </Grid>
        </Container>
    )
}