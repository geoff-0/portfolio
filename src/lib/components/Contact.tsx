import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { SkipNavContent } from "@chakra-ui/skip-nav";

import NextLink from "next/link";

import MailIcon from "lib/icons/MailIcon";
import { useState } from "react";

export default function Contact() {
  const { colorMode } = useColorMode();

  const [isHovered, toggleHovered] = useState(false);

  return (
    <Flex
      textAlign="center"
      flexDir="column"
      w="full"
      id="contact"
      onMouseEnter={() => {
        toggleHovered(true);
      }}
      onMouseLeave={() => toggleHovered(false)}
    >
      <HStack gap="3rem">
        <Heading as="h2" py="30px" whiteSpace="nowrap">
          Contact Me
        </Heading>
        <Divider
          m="5px"
          opacity={isHovered ? "1" : "unset"}
          bgColor={isHovered ? "brand.primary" : "unset"}
          transition="0.5s ease-out"
        />
      </HStack>

      <Flex gap="1.5rem" direction="column">
        <Text color={colorMode == "light" ? "gray.600" : "gray.400"}>
          {"I am actively seeking employment."}
          <br />
          {
            "If you feel I would be a good fit for your needs, please feel free to contact me with the button below. I would be more than glad to talk to you."
          }
        </Text>

        <NextLink href="mailto:contact.geoffrey.perez@gmail.com" passHref>
          <Link _hover={{ textDecoration: "none" }}>
            <Button
              leftIcon={
                <MailIcon fill={useColorModeValue("text.light", "text.dark")} />
              }
              size="md"
              mx="auto"
              rounded="md"
            >
              Contact me{" "}
            </Button>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
}
