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

import NextLink from "next/link";

import MailIcon from "lib/icons/MailIcon";
import { useState } from "react";

export default function Contact() {
  const { colorMode } = useColorMode();

  return (
    <Flex textAlign="center" flexDir="column" w="full" id="contact">
      <HStack gap="3rem">
        <Heading as="h2" py="30px" whiteSpace="nowrap">
          Contact Me
        </Heading>
        <Divider m="5px" transition="0.5s ease-out" />
      </HStack>

      <Flex gap="1.5rem" direction="column">
        <Text color={colorMode == "light" ? "gray.600" : "gray.400"}>
          {"I am actively seeking employment."}
          <br />
          {`I am actively seeking employment.
If you feel I would be a good fit for your needs, don't hesitate to contact me with the button below. I would be more than glad to talk to you.`}
        </Text>

        <Link
          as={NextLink}
          href="mailto:contact.geoffrey.perez@gmail.com"
          _hover={{ textDecoration: "none" }}
        >
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
      </Flex>
    </Flex>
  );
}
