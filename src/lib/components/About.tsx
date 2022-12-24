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
import { useState } from "react";

export default function About(props: any) {
  const { colorMode } = useColorMode();

  const [isHovered, toggleHovered] = useState(false);

  return (
    <Flex textAlign="left" flexDir="column" w="full" id="about" {...props}>
      <HStack gap="3rem">
        <Heading as="h2" py="30px" whiteSpace="nowrap">
          About Me
        </Heading>
        <Divider
          m="5px"
          opacity={isHovered ? "1" : "unset"}
          bgColor={isHovered ? "brand.primary" : "unset"}
          transition="0.5s ease-out"
        />
      </HStack>

      <Flex gap="1.5rem" direction="column">
        <HStack gap="10px">
          <MyGitHub /> <MyLinkedIn />
        </HStack>
        <Text color={colorMode == "light" ? "gray.600" : "gray.400"}>
          {
            "Hey there! My name is Geoffrey, and I am a self-taught programmer. From Harvard's CS50 to tech documentation, I have sought and used every resource to learn what is needed to become an industry-ready developer. Today I can build responsive, accessible, and interactive applications."
          }
        </Text>
      </Flex>
    </Flex>
  );
}
