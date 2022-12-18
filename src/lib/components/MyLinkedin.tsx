import { Image, Link, Tooltip, useColorMode } from "@chakra-ui/react";

import NextLink from "next/link";

export default function MyLinkedIn(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label="My LinkedIn"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <NextLink
        href="https://www.linkedin.com/in/geoffrey-perez/"
        passHref
        target="_blank"
      >
        <Link transition="opacity .5s" _hover={{ opacity: 0.8 }} {...props}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            alt="My LinkedIn"
            boxSize="35px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
