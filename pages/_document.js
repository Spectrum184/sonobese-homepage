import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <!--[if lt IE 7]>
          <html class="no-js lt-ie9 lt-ie8 lt-ie7" prefix="og: http://ogp.me/ns#"><![endif]-->
          <!--[if IE 7]>
          <html class="no-js lt-ie9 lt-ie8" prefix="og: http://ogp.me/ns#"><![endif]-->
          <!--[if IE 8]>
          <html class="no-js lt-ie9" prefix="og: http://ogp.me/ns#"><![endif]-->
          <!--[if gt IE 8]><!--> */}
          <meta name="description" content="園部製作所" />
          <meta name="keywords" content="パイプベンダー,プレス加工,レーザー加工,各種溶接,株式会社園部製作所" />
          <meta name="description" content="株式会社園部製作所は、茨城県常総市の茨城工場でパイプ曲げ加工、プレス加工、レーザー加工、各種溶接を行っている会社です。主に自動車部品と建設機械部品を得意としております。" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
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
