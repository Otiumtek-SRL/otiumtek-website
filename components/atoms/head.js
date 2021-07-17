import Head from 'next/head'

const MyHead = ({title, description}) => {
    return (
        <Head>
            <link rel="icon" href="/images/isotipo.svg" />
            <title>Otiumtek | {title}</title>
            <meta name="description" content={description} />
        </Head>
    )
}

export default MyHead