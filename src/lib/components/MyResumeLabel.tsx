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
import HomeIcon from "lib/icons/HomeIcon";
import { ReactNode, SVGProps } from "react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";
import ResumeIcon from "lib/icons/ResumeIcon";

export default function MyResumeLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <Link
        href="/Resume_Geoffrey_Perez.pdf"
        target="_blank"
        variant="unstyled"
        h="max-content"
        _hover={{ color: "brand.primary", fill: "brand.primary" }}
        transition="color .5s"
      >
        <VStack direction="column" gap="10px">
          <Icon as={ResumeIcon} boxSize="35px" fill="white" />

          <Text fontWeight="semibold">My Resume</Text>
        </VStack>
      </Link>
    </Box>
  );
}
