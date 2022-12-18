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
      <meta name="theme-color" content="brand.primary" />

      <link rel="shortcut icon" href="/favicon.svg" />

      <link rel="manifest" href="/manifest.json" />
    </>
  );
};

export default Meta;
