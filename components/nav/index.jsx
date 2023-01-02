import Image from 'next/image';
import KeyButton from '../keyButton';
import { NavLinks } from './data/paths'

import {
    Container,
    NavItems,
    NavItem,
    Separator
} from './styles.index'

export default function Nav({ }) {
    return (
        <Container>
            <Image
                src='/images/logo.svg'
                width={31}
                height={10}
            />
            <NavItems>
                {NavLinks.map((link, i) => {
                    return (
                        <NavItem href={link.path}>
                            <li key={i}>{link.name}</li>
                        </NavItem>
                    );
                })}
                <Separator />
                <KeyButton 
                    kbd="/"
                    label="Contact Links"
                />
            </NavItems>
        </Container>
    );
}