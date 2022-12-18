import {
  IconButton,
  Image,
  Link,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function ChakraTooltip(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label="Chakra UI"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <NextLink href="https://chakra-ui.com" passHref target="_blank">
        <Link transition="opacity .5s" _hover={{ opacity: 0.8 }} {...props}>
          <Image
            src="/chakra-ui-logomark-colored.svg"
            alt="Chakra UI"
            boxSize="35px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
