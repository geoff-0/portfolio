import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import HoverImageLink from "../links/HoverImageLink";

export default function ToolList(props: any) {
  const textColor = useColorModeValue("text.light", "text.dark");

  const tools = {
    GitHub: {
      img: "https://github.com/fluidicon.png",
      href: "https://github.com",
    },

    Git: {
      img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      href: "https://git-scm.com",
    },

    npm: {
      href: "https://npmjs.com",
      img: "https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png",
    },

    ESLint: {
      img: "https://eslint.org/favicon.ico",
      href: "https://eslint.org",
    },

    Prettier: {
      img: "https://prettier.io/icon.png",
      href: "https://prettier.io",
    },

    VSCode: {
      img: "https://code.visualstudio.com/favicon.ico",
      href: "https://code.visualstudio.com",
    },

    Postman: {
      img: "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
      href: "https://postman.com",
    },

    Gimp: {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1024px-The_GIMP_icon_-_gnome.svg.png",
      href: "https://gimp.org",
    },
  };

  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 6, xl: 8 }}
      py="3rem"
      w="full"
      gap="1rem"
      {...props}
    >
      {Object.keys(tools).map((k) => (
        <HoverImageLink
          key={nanoid()}
          img={tools[k as keyof typeof tools].img}
          href={tools[k as keyof typeof tools].href}
          label={k}
          color={textColor}
          hoverColor={"brand.primary"}
          styles={{
            target: "_blank",
            w: "full",
            h: "full",
          }}
          tooltip={false}
        />
      ))}
    </SimpleGrid>
  );
}
