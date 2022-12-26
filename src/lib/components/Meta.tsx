const APP_NAME = "portfolio";

const Meta = () => {
  return (
    <>
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#1A9FFF" />

      <meta property="og:image" content="/portfolio-snapshot.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />

      <link rel="shortcut icon" href="/favicon.svg" />

      <link rel="manifest" href="/manifest.json" />
    </>
  );
};

export default Meta;
