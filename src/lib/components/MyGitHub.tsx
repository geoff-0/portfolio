import { Image, Link, Tooltip, useColorMode } from "@chakra-ui/react";

import NextLink from "next/link";

export default function MyGitHub(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label="My GitHub"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <NextLink href="https://github.com/geoday03" passHref target="_blank">
        <Link transition="opacity .5s" _hover={{ opacity: 0.8 }} {...props}>
          <Image
            src="https://github.com/fluidicon.png"
            alt="My GitHub"
            boxSize="35px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
