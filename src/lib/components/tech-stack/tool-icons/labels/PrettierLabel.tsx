import { Box, VStack, Heading } from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function PrettierLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://prettier.io" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://prettier.io/icon.png"
              alt="Git"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              Prettier
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
