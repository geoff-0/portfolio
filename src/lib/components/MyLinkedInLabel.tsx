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
  useColorModeValue,
} from "@chakra-ui/react";
import HomeIcon from "lib/icons/HomeIcon";
import { ReactNode, SVGProps } from "react";

import { IconButton, Image, Link, Tooltip } from "@chakra-ui/react";

import NextLink from "next/link";
import LinkedInIcon from "lib/icons/LinkedInIcon";

export default function MyLinkedInLabel(props: any) {
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Box p="15px" {...props}>
      <NextLink
        href="https://www.linkedin.com/in/geoffrey-perez/"
        passHref
        target="_blank"
      >
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Icon
              as={LinkedInIcon}
              boxSize="35px"
              fill={textColor}
              _hover={{ color: "brand.primary", fill: "brand.primary" }}
            />
            <Heading size="md" fontWeight="semibold">
              My LinkedIn
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
