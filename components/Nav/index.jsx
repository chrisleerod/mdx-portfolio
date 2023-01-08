import Image from 'next/image';
import Link from 'next/link';
import KeyButton from '../KeyButton';
import { NavLinks } from './data/paths'
import { useRouter } from 'next/router';

import {
    Container,
    NavItems,
    Separator
} from './styles.index'

export default function Nav({ onClick }) {

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
                                <span className={currentRoute === link.path ? 'active' : 'default'}>
                                    {link.name}
                                </span>
                            </Link>
                        </li>
                    );
                })}
                <Separator />
                <KeyButton
                    kbd="/"
                    label="Links"
                    onClick={onClick}
                />
            </NavItems>
        </Container>
    );
}