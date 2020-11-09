
import Head from 'next/head'
import Navigation from './components/Navigation'


interface LayoutProps{
    children: React.ReactNode
}

export default function Layout(props:LayoutProps){
    return (
        <div>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <header>
                <Navigation></Navigation>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
}