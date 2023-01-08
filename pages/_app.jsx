import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents'
import Nav from '../components/Nav'
import Modal from '../components/Modal'
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
  }

  return (
    <MDXProvider components={MDXComponents}>
      <div className='container'>
        <Nav
          onClick={() => (setModalOpen(prev => !prev))}
        />
        <Component {...pageProps} />
      </div>
      <AnimatePresence
        initial={false}
      >
        {modalOpen && <Modal
          title='Links'
          maxwidth='420px'
          modalOpen={modalOpen}
          handleClose={() => (setModalOpen(prev => !prev))}
        />}
      </AnimatePresence>
    </MDXProvider>
  )
}

export default MyApp
