import Image from 'next/image';
import Link from 'next/link';
import KeyButton from '../keyButton';
import { NavLinks } from './data/paths'
import { useRouter } from 'next/router';

import {
    Container,
    NavItems,
    NavItem,
    Separator
} from './styles.index'

export default function Nav({ }) {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <Container>
            <Image
                src='/images/logo.svg'
                width={31}
                height={10}
                alt="clr"
            />
            <NavItems>
                {NavLinks.map((link, i) => {
                    return (
                        <li key={i}>
                            <Link href={link.path}>
                                <a className={currentRoute === link.path ? 'active' : 'default'}>
                                    {link.name}
                                </a>
                            </Link>
                        </li>
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