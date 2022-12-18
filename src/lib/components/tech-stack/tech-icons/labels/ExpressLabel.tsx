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

import { IconButton, Image, Link, Tooltip } from "@chakra-ui/react";

import NextLink from "next/link";

export default function ExpressLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://expressjs.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://expressjs.com/images/favicon.png"
              alt="Express.js"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              Express.js
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
