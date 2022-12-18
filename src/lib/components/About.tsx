import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import LinkedIn from "./MyLinkedin";
import MyGitHub from "./MyGitHub";
import MyGithub from "./MyGitHub";
import MyLinkedIn from "./MyLinkedin";

export default function About() {
  const { colorMode } = useColorMode();

  return (
    <Flex textAlign="left" flexDir="column" w="full" id="about">
      <HStack gap="3rem">
        <Heading as="h2" py="30px" whiteSpace="nowrap">
          About Me
        </Heading>
        <Divider p="5px" />
      </HStack>

      <Flex gap="1.5rem" direction="column">
        <HStack gap="10px">
          <MyGitHub /> <MyLinkedIn />
        </HStack>
        <Text color={colorMode == "light" ? "gray.600" : "gray.400"}>
          {
            "Hey there! My name is Geoffrey and I am a self-taught programmer. From Harvard's CS50, to tech documentation, and googling terms I wasn't familiar with, I have sought and used every resource within my reach to learn what is needed to build responsive, accessible, and interactive applications."
          }
        </Text>
      </Flex>
    </Flex>
  );
}
