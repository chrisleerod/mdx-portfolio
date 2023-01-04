import {
    Container,
    HeaderContainer,
    TitleDate,
    Title,
    Date
} from './index.styles'

export default function Post({ children }) {
    return (
        <Container>
            <HeaderContainer>
                <TitleDate>
                    <Title>
                    </Title>
                    <Date>
                    </Date>
                </TitleDate>
            </HeaderContainer>
            {children}
        </Container>
    )
}