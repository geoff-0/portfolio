import {
  IconButton,
  Image,
  Link,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function ReduxTooltip(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label="Redux.js"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <NextLink href="https://redux.js.org" passHref target="_blank">
        <Link transition="opacity .5s" _hover={{ opacity: 0.8 }} {...props}>
          <Image
            src="https://redux.js.org/img/redux.svg"
            alt="Redux.js"
            boxSize="35px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
