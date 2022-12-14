import BlogCard from '../../components/BlogCard'
import Divider from '../../components/Divider'
import ProjectGrid from '../../components/ProjectGrid'
import BlogGrid from '../../components/BlogGrid'
import { useScroll, useTransform } from 'framer-motion'

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
    OutroParagraph,
    FlashLight
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
        filter: 'blur(2px)',
        y: 8
    },
    show: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
            duration: 1,
            ease: [0.25, 1, 0.5, 1]
        }
    }
}

const animateFlashlight = {
    rest: {
        background: 'radial-gradient(200px 25% at 50% -50%, rgba(255, 255, 255, 0.1) 0%, rgba(19, 20, 21, 0) 100%)',
    },
    animate: {
        background: 'radial-gradient(500px 25% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(19, 20, 21, 0) 100%)',
        transition: {
            duration: 1,
            delay: 0.3
        }
    }
}

export default function Homepage({ projects, noWrap, blogs }) {

    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
    let o = useTransform(scrollYProgress, [0, .2], ['100%', '0%'])

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
                    Detail obsessed designer and developer ??? spending a little extra time on the finer things that most people won???t notice.
                </IntroParagraph>
            </IntroContainer>
            <Divider
                variants={fadeIn}
            />
            <BodyContainer>
                <ProjectGrid projects={projects}
                    variants={fadeIn}
                />
                <BlogGrid title='Recent writing'
                    variants={fadeIn}
                >
                    {blogs.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).slice(0, 2).map((blog, i) => (
                        <BlogCard noWrap={noWrap} blog={blog} key={i} blogs={blogs} />
                    ))}
                </BlogGrid>
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
                    Developed with Next.js, deployed with Vercel, and designed over many late nights in Figma.
                </OutroParagraph>
            </FooterContainer>
        </Container>
    )
}