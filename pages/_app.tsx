import { AppProps } from 'next/app'
import "../styles/globals.css"
import {AnimatePresence} from 'framer-motion'
import Layout from '../layout'
function App({ Component, pageProps }: AppProps) {
  return (
    //<AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    //</AnimatePresence>
  )
}

export default App