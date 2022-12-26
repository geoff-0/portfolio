/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Geoffrey Perez | Front-end Developer",
  titleTemplate: "%s",
  defaultTitle: "Geoffrey Perez | Front-end Developer",
  description: "Programmer specializing in front-end development.",
  canonical: "https://geoday.dev",
  openGraph: {
    url: "https://geoday.dev",
    title: "Geoffrey Perez | A Front-end Developer",
    defaultImageHeight: 495,
    defaultImageWidth: 943,
    images: [{ url: "/portfolio-snapshot.png", alt: "Portfolio Snapshot" }],
    description: "Programmer specializing in front-end development.",
    site_name: "Geoffrey Perez | Front-end Developer",
  },
};

export default defaultSEOConfig;
