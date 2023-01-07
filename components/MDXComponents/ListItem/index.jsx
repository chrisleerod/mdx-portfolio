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
        >
            <Image
                src={`/images/${pic}`}
                alt={alt}
                width='32'
                height='32'
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