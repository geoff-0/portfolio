import {
  Box,
  VStack,
  Heading,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";
import GitHubIcon from "lib/icons/GitHubIcon";
import LinkedInIcon from "lib/icons/LinkedInIcon";

import NextLink from "next/link";

export default function MyGitHubLabel(props: any) {
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Box p="15px" {...props} fill="rgba(0,0,0,0)">
      <NextLink href="https://github.com/geoday03" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          transition="color .5s"
          _hover={{ color: "brand.primary", stroke: "brand.primary" }}
        >
          <VStack direction="column" gap="10px">
            <Icon
              as={GitHubIcon}
              boxSize="35px"
              stroke={textColor}
              _hover={{ color: "brand.primary", stroke: "brand.primary" }}
            />

            <Heading size="md" fontWeight="semibold">
              My GitHub
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
