/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Geoffrey Perez",
  titleTemplate: "%s",
  defaultTitle: "Geoffrey Perez",
  description: "Self-taught programmer specializing in front-end development",
  canonical: "https://geoday.dev",
  twitter: {
    handle: "Geoffrey Perez",
    site: "https://geoday.dev",
    cardType: "summary_large_image",
  },
  openGraph: {
    url: "https://geoday.dev",

    images: [
      {
        url: "/portfolio-snapshot",
        type: "image/png",
        width: 1200,
        height: 600,
      },
    ],
    title: "Geoffrey Perez",

    description: "Self-taught programmer specializing in front-end development",

    twitter: {
      handle: "@Geoffrey Perez",
      site: "@https://geoday.dev",
      cardType: "summary_large_image",
    },
  },
};

export default defaultSEOConfig;
