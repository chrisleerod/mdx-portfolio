
import {
    Header1,
    Header2,
    Paragraph
} from './index.styles'

const MDXComponents = {
    h1: (props) => <Header1 {...props} />,
    h2: (props) => <Header2 {...props} />,
    p: (props) => <Paragraph {...props} />
}

export default MDXComponents