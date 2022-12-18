import {
  IconButton,
  Image,
  Link,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function TSToolTip(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label="TypeScript"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <NextLink href="https://www.typescriptlang.org" passHref target="_blank">
        <Link transition="opacity .5s" _hover={{ opacity: 0.8 }} {...props}>
          <Image
            alt="TypeScript"
            src="https://www.typescriptlang.org/favicon.ico"
            boxSize="35px"
            rounded="full"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
