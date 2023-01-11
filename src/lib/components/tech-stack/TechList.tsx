import { SimpleGrid, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import HoverImageLink from "../links/HoverImageLink";

export default function TechList(props: any) {
  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("text.light", "text.dark");

  const technologies = {
    "React.js": {
      href: "https://reactjs.org",
      img: "https://reactjs.org/favicon.ico",
    },

    "Redux.js": {
      img: "https://redux.js.org/img/redux.svg",
      href: "https://redux.js.org",
    },

    TypeScript: {
      img: "https://www.typescriptlang.org/favicon.ico",
      href: "https://www.typescriptlang.org",
    },

    "Next.js": {
      img:
        colorMode == "light"
          ? "/nextjs-icon-light.svg"
          : "/nextjs-icon-dark.svg",

      href: "https://nextjs.org",
    },

    "Chakra UI": {
      img: "/chakra-ui-logomark-colored.svg",
      href: "https://chakra-ui.com",
    },

    "Express.js": {
      img: "https://expressjs.com/images/favicon.png",
      href: "https://expressjs.com",
    },

    MongoDB: {
      img: "https://www.mongodb.com/assets/images/global/favicon.ico",
      href: "https://www.mongodb.com/assets",
    },

    Sass: {
      img: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
      href: "https://sass-lang.com",
    },
  };

  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 6, xl: 8 }}
      w="full"
      py="3rem"
      gap="4rem"
      {...props}
    >
      {Object.keys(technologies).map((k) => (
        <HoverImageLink
          key={nanoid()}
          img={technologies[k as keyof typeof technologies].img}
          href={technologies[k as keyof typeof technologies].href}
          label={k}
          color={textColor}
          hoverColor={"brand.primary"}
          styles={{
            target: "_blank",
          }}
          tooltip={false}
        />
      ))}
    </SimpleGrid>
  );
}
