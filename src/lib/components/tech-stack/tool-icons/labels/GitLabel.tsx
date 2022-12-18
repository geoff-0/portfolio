import { Box, VStack, Heading } from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function GitLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://git-scm.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="Git"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              Git
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
