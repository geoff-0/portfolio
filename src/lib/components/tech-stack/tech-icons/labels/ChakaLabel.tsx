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

export default function ChakraLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://chakra-ui.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="/chakra-ui-logomark-colored.svg"
              alt="Chakra UI"
              boxSize="50px"
              mx="auto"
            />

            <Heading size="md" fontWeight="semibold">
              Chakra UI
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
