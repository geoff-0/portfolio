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

import { IconButton, Image, Link, Tooltip } from "@chakra-ui/react";

import NextLink from "next/link";

export default function MongoLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://www.mongodb.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://www.mongodb.com/assets/images/global/favicon.ico"
              alt="MongoDB"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              MongoDB
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
