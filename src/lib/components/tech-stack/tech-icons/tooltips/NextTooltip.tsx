import {
  IconButton,
  Image,
  Link,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function NextTooltip(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label="Next.js"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <NextLink href="https://nextjs.org" passHref target="_blank">
        <Link transition="opacity .5s" _hover={{ opacity: 0.8 }} {...props}>
          <Image
            src={
              colorMode == "light"
                ? "/nextjs-icon-light.svg"
                : "/nextjs-icon-dark.svg"
            }
            alt="Next.js"
            boxSize="35px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
