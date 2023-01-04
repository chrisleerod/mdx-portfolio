import BlogCard from '../BlogCard'

import {
    Container,
    Grid,
    Header,
    Title
} from './index.styles'

export default function WorkGrid({ blogs, single, noWrap, title, ...props }) {
    return (
        <Container {...props}>
            {title &&
                <Header>

                    <Title>
                        {title}
                    </Title>

                </Header>
            }
            <Grid single={single}>
                {blogs.slice(0, 2).map((blog, i) => (
                    <BlogCard noWrap={noWrap} blog={blog} key={i} blogs={blogs} />
                ))}
            </Grid>
        </Container>
    )
}