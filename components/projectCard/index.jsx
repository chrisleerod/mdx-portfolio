import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'

import {
    Border,
    CardContainer,
    TextContainer,
    Title,
    Timeline,
    Tag
} from './index.styles'

function ProjectCard({ projects, background }) {
    return (
        <>
            {projects.map((project) => (
                <Link href={`/projects/${project.slug}`}>
                    <Border
                        initial={{
                            background: "linear-gradient(rgba(255, 255, 255, 0.2) -500%, rgba(255, 255, 255, 0))",
                            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.0)"
                        }}
                        whileHover={{
                            background: "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05))",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                            y: -2
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <CardContainer key={project.frontmatter.slug}
                            initial={{
                                background: "radial-gradient(50% -100% at 50% 0%, rgba(19, 20, 21, 0) -200%, rgba(19, 20, 21, 0) 100%)",
                                backgroundColor: "#141617"
                            }}
                            whileHover={{
                                background: "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)", 
                                backgroundColor: "#1B1D1F"
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                        >
                            <TextContainer>
                                <Timeline>{project.frontmatter.timeline}</Timeline>
                                <Title>{project.frontmatter.title}</Title>
                            </TextContainer>
                                <Tag>{project.frontmatter.tags}</Tag>
                        </ CardContainer>
                    </Border>
                </Link>
            ))}
        </>
    )
}

export default ProjectCard