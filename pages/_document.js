import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  // Global HTML Document
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
         href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
