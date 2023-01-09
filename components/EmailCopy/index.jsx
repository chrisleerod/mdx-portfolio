import Image from 'next/image'

import {
    Container,
    CopyButton,
    Email
} from './index.styles'

export default function EmailCopy({ }) {
    return (
        <Container>
            <Email>
                chrisleerod@gmail.com
            </Email>
            <CopyButton
                initial={{ backgroundColor: '#181A1C' }}
                whileHover={{ backgroundColor: '#202225' }}
                transition={{ duration: 0.2 }}
            >
                <Image
                    src='../images/icons/copy.svg'
                    alt='copy icon'
                    width={16}
                    height={16}
                />
                Copy
            </CopyButton>
        </Container>
    )
}