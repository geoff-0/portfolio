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

export default function SassLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://sass-lang.com" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
              alt="Sass"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              Sass
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
