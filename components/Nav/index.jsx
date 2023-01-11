import Image from 'next/image';
import Link from 'next/link';
import KeyButton from '../KeyButton';
import { NavLinks } from './data/paths'
import { useRouter } from 'next/router';
import { useScroll, useTransform } from 'framer-motion';

import {
    Border,
    Container,
    NavItems,
    Separator
} from './styles.index'

export default function Nav({ onClick }) {

    const router = useRouter();
    const currentRoute = router.pathname;

    let { scrollYProgress } = useScroll();
    let o = useTransform(scrollYProgress, [0, .2], ['100%', '0%'])

    const animateBorder = {
        initial: {
            background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 50%)',
        },
        animate: {
            background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0) 90%)',
            transition: {
                duration: 1,
                delay: 0.3,
                ease: [[0.17, 0.67, 0.83, 0.67]]
            }
        }
    }

    const animateShadow = {
        initial: {
            boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.25)',
        },
        animate: {
            boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.25)',
            transition: {
                duration: 1,
                delay: 0.3,
                ease: [[0.17, 0.67, 0.83, 0.67]]
            }
        }
    }

    return (
        <Container
            variants={animateShadow}
            initial='initial'
            animate='animate'
        >
            <Border
                variants={animateBorder}
                initial='initial'
                animate='animate'
                style={{ opacity: o }}
            />
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