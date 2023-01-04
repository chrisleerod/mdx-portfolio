import Divider from '../../components/Divider'
import ProjectGrid from '../../components/ProjectGrid'
import BlogGrid from '../../components/BlogGrid'

import {
    Container,
    IntroContainer,
    BodyContainer,
    NameContainer,
    Name,
    OrangeCircle,
    Time,
    IntroParagraph,
    FooterContainer,
    OutroParagraph
} from './index.styles'

const containerVariants = {
    hidden: {

    },
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const fadeIn = {
    hidden: {
        opacity: 0,
        y: 8
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.25, 1, 0.5, 1]
        }
    }
}

export default function Homepage({ projects, blogs }) {
    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <IntroContainer>
                <NameContainer
                    variants={fadeIn}
                >
                    <Name>
                        Chris Rodriguez
                    </Name>
                    <OrangeCircle />
                    <Time>

                    </Time>
                </NameContainer>
                <IntroParagraph
                    variants={fadeIn}
                >
                    A detail obsessed designer and developer – spending a little extra time on the finer things that most people won’t notice.
                    <br />
                    <br />
                    Currently a product designer at <a href="https://notdev.com" rel="noreferrer" target="_blank">Not Dev</a> working with companies to craft interfaces.
                    <br />
                    <br />
                    Throughout the past 5 years I’ve worked on projects with companies and individuals of all shapes and sizes ranging from marketing animations, interfaces, and code.
                </IntroParagraph>
            </IntroContainer>
            <Divider
                variants={fadeIn}
            />
            <BodyContainer>
                <ProjectGrid projects={projects}
                    variants={fadeIn}
                />
                <BlogGrid title='Selected writing' blogs={blogs}
                    variants={fadeIn}
                />
            </BodyContainer>
            <Divider
                variants={fadeIn}
            />
            <FooterContainer>
                <OutroParagraph
                    variants={fadeIn}
                >
                    <span>Learning as I go.</span>
                    <br />
                    <br />
                    Very special thank you to these folks who helped inspire this site with great design. Developed with Next.js, deployed with Vercel, and designed over many late nights in Figma.
                </OutroParagraph>
            </FooterContainer>
        </Container>
    )
}