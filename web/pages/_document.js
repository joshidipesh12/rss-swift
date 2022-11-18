import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export const getInitialProps = async ctx => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: React.Children.toArray([initialProps.styles]),
  };
};

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@600,500,300,400,200&display=swap"
          rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"></link>
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
