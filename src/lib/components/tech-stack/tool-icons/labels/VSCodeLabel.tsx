import { Box, VStack, Heading } from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function VSCodeLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://code.visualstudio.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://code.visualstudio.com/favicon.ico"
              alt="Visual Studio Code"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              VSCode
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
