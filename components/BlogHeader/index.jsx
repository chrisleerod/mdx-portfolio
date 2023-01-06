import Image from 'next/image'

import {
    Container,
    BackCol,
    HeaderContainer,
    Title,
    Date,
    BackButton
} from './index.styles'

export default function BlogHeader({ frontmatter }) {
    return (
        <>
            <BackCol>
                <BackButton href='/writing'
                >
                    <Image
                        src='/images/icons/arrow-corner.svg'
                        width={14}
                        height={14}
                        alt="clr"
                    />
                    <span>
                        Writing
                    </span>
                </BackButton>
            </BackCol>
            <HeaderContainer>
                <Title>
                    {frontmatter.title}
                </Title>
                <Date>
                    {frontmatter.postDate}
                </Date>
            </HeaderContainer>
        </>
    )
}