import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents'
import Nav from '../components/Nav'
import Modal from '../components/Modal'
import EmailCopy from '../components/EmailCopy';
import LinkRow from '../components/LinkRow';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true)
  }, [])

  const handleKeyDown = e => {
    if (e.key === '/') {
      setModalOpen(prev => !prev)
    }
    else if (e.key === 'Escape') {
      setModalOpen(false)
    }
  }

  return (
    <MDXProvider components={MDXComponents}>
      <div className='container'>
        <AnimatePresence
          initial={false}
        >
          {modalOpen && <Modal
            title='Links'
            maxWidth='420px'
            modalOpen={modalOpen}
            handleClose={() => (setModalOpen(prev => !prev))}
          >
            <EmailCopy />
            <LinkRow />
          </Modal>}
        </AnimatePresence>
        <Nav
          onClick={() => (setModalOpen(prev => !prev))}
        />
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  )
}

export default MyApp
