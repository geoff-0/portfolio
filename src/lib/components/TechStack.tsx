import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import TechList from "./tech-stack/TechList";
import ToolList from "./tech-stack/ToolList";

export default function TechStack(props: any) {
  const [isHovered, toggleHovered] = useState(false);

  return (
    <Flex
      id="tech-stack"
      textAlign="left"
      flexDir="column"
      w="full"
      onMouseEnter={() => {
        toggleHovered(true);
      }}
      onMouseLeave={() => toggleHovered(false)}
      {...props}
    >
      <HStack gap="3rem">
        <Heading as="h2" py="40px" whiteSpace="nowrap">
          Tech Stack
        </Heading>
        <Divider
          m="5px"
          opacity={isHovered ? "1" : "unset"}
          bgColor={isHovered ? "brand.primary" : "unset"}
          transition="0.5s ease-out"
        />
      </HStack>

      <Flex direction="column" gap="3rem">
        <VStack align="left">
          <Heading as="h2" fontSize="25px">
            My Go-to
          </Heading>

          <TechList />
        </VStack>

        <VStack align="left">
          <Heading as="h2" fontSize="25px">
            Tools
          </Heading>

          <ToolList />
        </VStack>
      </Flex>
    </Flex>
  );
}
