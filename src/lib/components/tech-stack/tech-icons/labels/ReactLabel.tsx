import {
  Button,
  Flex,
  Text,
  IconProps,
  Box,
  Icon,
  useColorMode,
  VStack,
  Heading,
} from "@chakra-ui/react";
import HomeIcon from "lib/icons/HomeIcon";
import { ReactNode, SVGProps } from "react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function ReactLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://reactjs.org" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://reactjs.org/favicon.ico"
              alt="React.js"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              React.js
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
