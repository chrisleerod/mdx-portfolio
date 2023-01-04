import Link from 'next/link'

import {
    Border,
    CardContainer,
    TextContainer,
    Title,
    Description,
    Footer
} from './index.styles'

const flashLight = {
    rest: {
        background: "radial-gradient(50% -100% at 50% 0%, rgba(19, 20, 21, 0) -200%, rgba(19, 20, 21, 0) 100%)",
        backgroundColor: "#181A1C"
    },
    hover: {
        background: "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        backgroundColor: "#181A1C",
        transition: {
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1]
        }
    },
};

const animateBorder = {
    rest: {
        background: "linear-gradient(rgba(255, 255, 255, 0.2) -500%, rgba(255, 255, 255, 0))",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.0)"
    },
    hover: {
        background: "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0))",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        y: -2,
            transition: {
        duration: 0.3
    }
    }
}

export default function BlogCard({ blog, i }) {
    return (
        <>
            <Link key={i} href={`/writing/${blog.slug}`}>
                <Border
                    variants={animateBorder}
                    initial="rest"
                    whileHover="hover"
                    transition="hover"
                >
                    <CardContainer key={blog.frontmatter.slug}
                        variants={flashLight}
                    >
                        <TextContainer>
                            <Title>{blog.frontmatter.title}</Title>
                            <Description>{blog.frontmatter.description}</Description>
                        </TextContainer>
                    </ CardContainer>
                    <Footer>
                        <span>{blog.frontmatter.postDate}</span>
                        <span>{blog.frontmatter.type}</span>
                    </Footer>
                </Border>
            </Link>
        </>
    )
}