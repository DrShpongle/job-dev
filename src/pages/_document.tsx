import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-3DDEV708JB"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3DDEV708JB', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var _urconfig = { sid: "7db37aa7-69a0-46db-91c5-4c651977a521", aip: 0, usePageProtocol: false };
              (function (d, s) {
                  var js = d.createElement(s),
                      sc = d.getElementsByTagName(s)[0];
                  js.src = "https://hit.uptrendsdata.com/rum.min.js";
                  js.async = "async";
                  sc.parentNode.insertBefore(js, sc);
              }(document, "script"));
          `,
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#11c2ff"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
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
