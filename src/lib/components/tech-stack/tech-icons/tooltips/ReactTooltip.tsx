import {
  IconButton,
  Image,
  Link,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function ReactToolTip(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label="React.js"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <NextLink href="https://reactjs.org" passHref target="_blank">
        <Link transition="opacity .5s" _hover={{ opacity: 0.8 }} {...props}>
          <Image
            src="https://reactjs.org/favicon.ico"
            alt="React.js"
            boxSize="35px"
            rounded="full"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
