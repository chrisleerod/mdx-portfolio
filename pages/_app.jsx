import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <div className='container'>
        <Nav />
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  )
}

export default MyApp
