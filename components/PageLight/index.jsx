import { Flashlight } from './index.styles'
import { useTransform, useScroll } from 'framer-motion';

const animateFlashlight = {
    rest: {
        background: 'radial-gradient(200px 25% at 50% -50%, rgba(255, 255, 255, 0) 0%, rgba(19, 20, 21, 0) 100%)',
    },
    animate: {
        background: 'radial-gradient(500px 25% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(19, 20, 21, 0) 100%)',
        transition: {
            duration: 1,
            delay: 0.3
        }
    }
}

export default function PageLight({ }) {

    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
    let o = useTransform(scrollYProgress, [0, .2], ['100%', '0%'])

    return (
        <Flashlight
            initial='rest'
            animate='animate'
            variants={animateFlashlight}
            style={{ y, opacity: o }}
        />
    )
}