// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Frijole"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Frijole"
            rel="stylesheet"
          />
            <link rel="canonical" href="https://www.bogdan-shmat-portfolio.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument