
import Head from 'next/head'
import Navigation from './components/Navigation'
import {motion} from 'framer-motion'


interface LayoutProps{
    children: React.ReactNode
}

export default function Layout(props:LayoutProps){
    return (
        <div>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>My 2cs On Faith</title>
            </Head>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{
                    duration:1
                }}
                >
            <Navigation></Navigation>
            <main>
                {props.children}
            </main>  
            </motion.div>
        </div>
    )
}