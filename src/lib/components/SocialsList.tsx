import {
  Box,
  Button,
  Flex,
  StyleConfig,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Attributes, HTMLAttributes, StyleHTMLAttributes } from "react";
import MyGitHub from "./MyGitHub";
import MyGitHubLabel from "./MyGitHubLabel";
import MyLinkedIn from "./MyLinkedin";
import MyLinkedInLabel from "./MyLinkedInLabel";
import MyResume from "./MyResume";
import MyResumeLabel from "./MyResumeLabel";

export default function SocialsList(props: any) {
  const bgColor = useColorModeValue("background.light", "background.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Box bgColor={bgColor} transition=".5s ease-out" {...props}>
      <Flex
        direction="row"
        bgColor={bgColor}
        gap={"1rem"}
        fill={textColor}
        _hover={{ fill: "brand.primary" }}
        display={{ base: "none", md: "flex" }}
      >
        <MyGitHub />
        <MyLinkedIn />
        <MyResume />
      </Flex>

      <Flex
        direction="column"
        bgColor={bgColor}
        gap={15}
        fill={textColor}
        _hover={{ fill: "brand.primary" }}
        h="max-content"
        {...props}
        display={{ base: "flex", md: "none" }}
      >
        <MyGitHubLabel />
        <MyLinkedInLabel />
        <MyResumeLabel />
      </Flex>
    </Box>
  );
}
