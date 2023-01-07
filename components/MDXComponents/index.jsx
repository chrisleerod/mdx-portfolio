import Box from './Box'
import ListItem from './ListItem'

import {
    Header1,
    Header2,
    Paragraph
} from './index.styles'

const MDXComponents = {
    h1: (props) => <Header1 {...props} />,
    h2: (props) => <Header2 {...props} />,
    p: (props) => <Paragraph {...props} />,
    Box: (props) => <Box {...props} />,
    ListItem: (props) => <ListItem {...props}/>,
}

export default MDXComponents