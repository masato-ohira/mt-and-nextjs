import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

const fontFamilies = [
  `family=Zen+Kaku+Gothic+New:wght@500;700;900`,
  `family=Noto+Serif+JP:wght@300;400;500;700;900`,
  `family=Poppins:wght@300;400;500;700;900`,
  `display=swap`,
]

// class Document extends NextDocument {
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            rel='stylesheet'
            href={`https://fonts.googleapis.com/css2?${fontFamilies.join('&')}`}
          />
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
