import { Box, VStack, Heading } from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function NPMLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://npmjs.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png"
              alt="npm"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              npm
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
