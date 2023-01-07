import {
    Container
} from './index.styles'

export default function BlogBox({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}