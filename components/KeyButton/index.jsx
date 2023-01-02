import {
    Container,
    Key,
    Label
} from './styles.index'


export default function KeyButton({ kbd, label }) {

    return (
        <Container>
            <Key>
                {kbd}
            </Key>
            <Label>
                {label}
            </Label>
        </Container>
    );
}