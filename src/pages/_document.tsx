import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            cross-origin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          />
          <link
            rel="preload"
            href="/fonts/surf-up.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/impact.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body className="w-full font-body leading-normal">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
