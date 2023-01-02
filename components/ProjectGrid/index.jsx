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
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} projects={projects} />
                ))}
            </Grid>
        </Container>
    )
}