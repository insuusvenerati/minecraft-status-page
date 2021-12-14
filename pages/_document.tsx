import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Minecraft Status Page" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Minecraft Status Page"
          />
          <meta
            name="description"
            content="A Status page for your Minecraft servers"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icon-192x192.png" />

          <link rel="manifest" href="/manifest.json" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
          />

          <meta
            name="twitter:card"
            content="A Status page for your Minecraft servers"
          />
          <meta
            name="twitter:url"
            content="https://minecraft-status.stiforr.tech"
          />
          <meta name="twitter:title" content="Minecraft Status Page" />
          <meta
            name="twitter:description"
            content="A Status page for your Minecraft servers"
          />
          <meta
            name="twitter:image"
            content="https://minecraft-status.stiforr.tech/icon-512x512.png"
          />
          <meta name="twitter:creator" content="@stiforr" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Minecraft Status Page" />
          <meta
            property="og:description"
            content="A Status page for your Minecraft servers"
          />
          <meta property="og:site_name" content="Minecraft Status Page" />
          <meta
            property="og:url"
            content="https://minecraft-status.stiforr.tech"
          />
          <meta
            property="og:image"
            content="https://minecraft-status.stiforr.tech/icon-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
