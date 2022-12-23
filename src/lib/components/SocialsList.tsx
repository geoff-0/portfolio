import {
  Button,
  Flex,
  StyleConfig,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Attributes, HTMLAttributes, StyleHTMLAttributes } from "react";
import MyGitHub from "./MyGitHub";
import MyLinkedIn from "./MyLinkedin";
import MyResume from "./MyResume";

export default function SocialsList(props: any) {
  const bgColor = useColorModeValue("background.light", "background.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Flex
      direction="row"
      bgColor={bgColor}
      gap={15}
      transition=".5s ease-out"
      fill={textColor}
      _hover={{ fill: "brand.primary" }}
      {...props}
    >
      <MyGitHub />
      <MyLinkedIn />
      <MyResume />
    </Flex>
  );
}
