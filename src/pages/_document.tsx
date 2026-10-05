import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt-br" data-scroll-behavior="smooth">
                <Head>
                    <meta name="description" content="We recommend ChatGPT for image generation. It worked well even on the free plan. Other tools, especially Grok, may not fully capture the intended style." />
                    <link rel="canonical" href="https://chibotstudio.vercel.app/" />

                    <meta property="og:url" content="https://chibotstudio.vercel.app/" />
                    <meta property="og:title" content="Chibot Studio | Your character, as a little bot." />
                    <meta
                        property="og:description"
                        content="We recommend ChatGPT for image generation. It worked well even on the free plan. Other tools, especially Grok, may not fully capture the intended style."
                    />
                    <meta property="og:image" content="/thumbnail.png" />

                    <meta property="og:image:width" content="1280" />
                    <meta property="og:image:height" content="720" />
                    <meta property="og:image:alt" content="Chibot Studio | Your character, as a little bot." />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:site_name" content="Chibot Studio | Your character, as a little bot." />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@yagasaki7k" />
                    <meta name="twitter:creator" content="@yagasaki7k" />

                    <meta
                        name="keywords"
                        content=""
                    />

                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />

                    <link rel="shortcut icon" href="/blonde-2.png" type="image/png" />

                    <meta property="og:locale" content="pt_BR" />

                    <title></title>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}