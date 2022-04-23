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
        {/* <Head>
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
          <meta
            name="facebook-domain-verification"
            content="hklkoy16kctd1or20nqdzgib0fvk8m"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '671463990803677'); 
              fbq('track', 'PageView');
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
        </Head> */}
        <body className="w-full font-body leading-normal">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
