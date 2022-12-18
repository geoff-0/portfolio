import { Box, VStack, Heading } from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function ESLintLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://eslint.org" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://eslint.org/favicon.ico"
              alt="ESLint"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              ESLint
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
