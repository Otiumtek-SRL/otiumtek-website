import Head from 'next/head'

const MyHead = ({ title, description }) => {
    return (
        <Head>
            <link rel="icon" href="/images/isotipo.svg" />
            <title>Otiumtek | {title}</title>
            <meta name="description" content={description} />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
        </Head>
    )
}

export default MyHead