import Image from 'next/image'

import {
    Container,
    TextContainer,
    Title,
    Description
} from './index.styles'

export default function ListItem({ href, pic, alt, title, description }) {
    return (
        <Container href={href} target='_blank'
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            transition={{ duration: 0}}
        >
            <Image
                src={`/images/${pic}`}
                alt={alt}
                width='40'
                height='40'
                style={{ borderRadius: 32 }}
            />
            <TextContainer>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
            </TextContainer>
        </Container>
    )
}