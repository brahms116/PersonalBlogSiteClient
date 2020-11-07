import Head from 'next/head'


interface LayoutProps{
    children: React.ReactNode
}

export default function Layout(props:LayoutProps){
    return (
        <div>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>

            </Head>
            <main>
                {props.children}
            </main>
        </div>
    )
}