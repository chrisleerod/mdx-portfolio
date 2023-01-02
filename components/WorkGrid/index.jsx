import ProjectCard from '../ProjectCard'

import {
    Container,
    Grid,
    Header,
    Title
} from './index.styles'

export default function WorkGrid({ projects }) {
    return (
        <Container>
            <Header>
                <Title>
                    Projects
                </Title>
            </Header>
            <Grid>
                <ProjectCard projects={projects} />
            </Grid>
        </Container>
    )
}