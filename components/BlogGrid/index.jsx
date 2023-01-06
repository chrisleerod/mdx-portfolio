import BlogCard from '../BlogCard'

import {
    Container,
    Grid,
    Header,
    Title
} from './index.styles'

export default function WorkGrid({ children, single, title, ...props }) {
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
                {children}
            </Grid>
        </Container>
    )
}