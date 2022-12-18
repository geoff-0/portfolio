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

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function GitHubLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://www.github.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://github.com/fluidicon.png"
              alt="GitHub"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              GitHub
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
