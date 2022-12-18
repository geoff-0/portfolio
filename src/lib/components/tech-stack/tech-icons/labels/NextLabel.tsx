import {
  Button,
  Flex,
  Text,
  IconProps,
  Box,
  Icon,
  useColorMode,
  textDecoration,
  VStack,
  Heading,
  LinkOverlay,
} from "@chakra-ui/react";
import HomeIcon from "lib/icons/HomeIcon";
import { ReactNode, SVGProps } from "react";

import { IconButton, Image, Link, Tooltip } from "@chakra-ui/react";

import NextLink from "next/link";

export default function NextLabel(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Box p="15px" {...props}>
      <NextLink href="https://nextjs.org" passHref target="_blank">
        <Link
          variant="unstyled"
          _hover={{ color: "brand.primary" }}
          h="max-content"
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src={
                colorMode == "light"
                  ? "/nextjs-icon-light.svg"
                  : "/nextjs-icon-dark.svg"
              }
              alt="Next.js"
              boxSize="50px"
              mx="auto"
            />

            <Heading size="md" fontWeight="semibold">
              Next.js
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
