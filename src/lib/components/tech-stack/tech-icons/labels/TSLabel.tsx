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

export default function TSLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://www.typescriptlang.org" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://www.typescriptlang.org/favicon.ico"
              alt="TypeScript"
              boxSize="50px"
              mx="auto"
            />

            <Heading size="md" fontWeight="semibold">
              TypeScript
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
