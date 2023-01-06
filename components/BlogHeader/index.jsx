import {
    HeaderContainer,
    Title,
    Date
} from './index.styles'

export default function BlogHeader({ frontmatter }) {
    return (
        <HeaderContainer>
            <Title>
                {frontmatter.title}
            </Title>
            <Date>
                {frontmatter.postDate}
            </Date>
        </HeaderContainer>
    )
}