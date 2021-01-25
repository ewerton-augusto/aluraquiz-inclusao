import Head from 'next/head';

export default function QuizHead({ ogImageUrl, ogTitle }){
    return (
        <Head>
            <title>{ogTitle}</title>
            <meta property="og:title" content="Imersão React2 - Alura Quiz - Ewerton Augusto" key="title" />
            <meta property="og:description" content="Imersão React2 da Alura, utlizando Next.JS com Styled Components para criação de um Quiz sobre inclusão na tecnologia e deploy na Vercel." />
            <meta property="og:image" content={ogImageUrl} />
        </Head>
    );
}