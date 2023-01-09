import {
    Container,
    LinkContainer
}
    from './index.styles'

const linkHover = {
    rest: {
        color: '#85858E'
    },
    hover: {
        color: '#FFFFFF',
    }
}

export default function LinkRow({ }) {
    return (
        <Container>
            <LinkContainer
                href='https://linkedin.com/in/chrisleerod'
                target='_blank'
                initial='rest'
                whileHover='hover'
                variants={linkHover}
                transition={{ duration: 0.2 }}
            >
                LinkedIn
            </LinkContainer>
            <LinkContainer
                href='https://drive.google.com/file/d/1aXlgDU4Z2KY_8nh4HK91mrrIH8Dhj6xc/view?usp=sharing'
                target='_blank'
                initial='rest'
                whileHover='hover'
                variants={linkHover}
                transition={{ duration: 0.2 }}
            >
                Resume
            </LinkContainer>
            <LinkContainer
                href='#'
                target='_blank'
                initial='rest'
                whileHover='hover'
                variants={linkHover}
                transition={{ duration: 0.2 }}
            >
                Twitter
            </LinkContainer>
            <LinkContainer
                href='https://github.com/chrisleerod'
                target='_blank'
                initial='rest'
                whileHover='hover'
                variants={linkHover}
                transition={{ duration: 0.2 }}
            >
                GitHub
            </LinkContainer>
        </Container>
    )
}