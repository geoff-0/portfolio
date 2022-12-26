/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Geoffrey Perez",
  titleTemplate: "%s",
  defaultTitle: "Geoffrey Perez",
  description: `A programmer specializing in front-end web development. 
      Emphasizing user experience and intuitive user interfaces.`,
  canonical: "https://geoday.dev",

  twitter: {
    handle: "Geoffrey Perez",
    site: "https://geoday.dev",
    cardType: "summary_large_image",
  },
  openGraph: {
    url: "https://geoday.dev",
    siteName: "Tech Portfolio",
    images: [
      {
        url: "/portfolio-snapshot.png",
        type: "image/png",
        width: 600,
        height: 300,
      },
    ],
    title: "Geoffrey Perez",

    description: `A programmer specializing in front-end web development. 
      Emphasizing user experience and intuitive user interfaces.`,
  },
};

export default defaultSEOConfig;
