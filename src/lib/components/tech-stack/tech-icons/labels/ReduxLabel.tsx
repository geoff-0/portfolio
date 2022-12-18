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

export default function ReduxLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://redux.js.org" passHref target="_blank">
        <Link
          variant="unstyled"
          transition="color .5s"
          _hover={{ color: "brand.primary" }}
          h="max-content"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://redux.js.org/img/redux.svg"
              alt="Redux.js"
              boxSize="50px"
              mx="auto"
            />

            <Heading size="md" fontWeight="semibold">
              Redux.js
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
