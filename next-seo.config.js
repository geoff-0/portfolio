/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Geoffrey Perez",
  titleTemplate: "%s",
  defaultTitle: "Geoffrey Perez",
  description: "Self-taught programmer specializing in front-end development",
  canonical: "https://geoday.dev",
  openGraph: {
    url: "https://geoday.dev",
    type: "object",
    images: [{ url: "/portfolio-snapshot.png", width: 1200, height: 600 }],
    title: "Geoffrey Perez",

    description: "Self-taught programmer specializing in front-end development",
  },
};

export default defaultSEOConfig;
