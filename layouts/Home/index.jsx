import Divider from '../../components/Divider'
import WorkGrid from '../../components/WorkGrid'
import BlogGrid from '../../components/BlogGrid'

import {
    Container,
    IntroContainer,
    BodyContainer,
    NameContainer,
    Name,
    OrangeCircle,
    Time,
    IntroParagraph
} from './index.styles'

export default function Homepage({ projects, blogs }) {
    return (
        <Container>
            <IntroContainer>
                <NameContainer>
                    <Name>
                        Chris Rodriguez
                    </Name>
                    <OrangeCircle />
                    <Time>
                        
                    </Time>
                </NameContainer>
                <IntroParagraph>
                    A detail obsessed designer and developer – spending a little extra time on the finer things that most people won’t notice.
                    <br />
                    <br />
                    Currently a product designer at <a href="https://notdev.com" rel="noreferrer" target="_blank">Not Dev</a> working with companies to craft interfaces.
                    <br />
                    <br />
                    Throughout the past 5 years I’ve worked on projects with companies and individuals of all shapes and sizes ranging from marketing animations, interfaces, and code.
                </IntroParagraph>
            </IntroContainer>
            <Divider />
            <BodyContainer>
                <WorkGrid projects={projects} />
                <BlogGrid blogs={blogs} />
            </BodyContainer>
            <Divider />
        </Container>
    )
}