import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,900&f[]=plus-jakarta-sans@800,801,201,401,301,501,400,601,500,600,700,701,300,200&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}