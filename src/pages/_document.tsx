import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://patricklima.dev/images/eyesemoji.png"
        />
        <meta name="title" content="Patrick Lima - Web Engineer" />
        {/* facebook  / open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.patricklima.dev"></meta>
        <meta property="og:title" content="Patrick Lima - Web Engineer" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://patricklima.dev/images/preview.png"
        ></meta>

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.patricklima.dev" />
        <meta property="twitter:title" content="Patrick Lima - Web Engineer" />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://patricklima.dev/images/preview.png"
        ></meta>
      </Head>

      <body className="bg-[#fcfaf4] dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
