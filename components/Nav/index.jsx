import Image from 'next/image';
import Link from 'next/link';
import KeyButton from '../KeyButton';
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
            <Link href='/'>
                <Image
                    src='/images/logo.svg'
                    width={31}
                    height={10}
                    alt="clr"
                />
            </Link>
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
                    label="Links"
                />
            </NavItems>
        </Container>
    );
}