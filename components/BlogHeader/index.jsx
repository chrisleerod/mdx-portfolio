import Image from 'next/image'

import {
    BackCol,
    HeaderContainer,
    TitleDate,
    Title,
    Date,
    Description,
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
                <TitleDate>
                    <Title>
                        {frontmatter.title}
                    </Title>
                    <Date>
                        {frontmatter.date}
                    </Date>
                </TitleDate>
                <Description>
                    {frontmatter.description}
                </Description>
            </HeaderContainer>
        </>
    )
}