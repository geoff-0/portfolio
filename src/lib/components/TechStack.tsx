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

import TechList from "./tech-stack/TechList";
import ToolList from "./tech-stack/ToolList";

export default function TechStack() {
  return (
    <Flex textAlign="left" flexDir="column" w="full">
      <HStack gap="3rem">
        <Heading as="h2" py="40px" whiteSpace="nowrap" id="tech-stack">
          Tech Stack
        </Heading>
        <Divider p="5px" />
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
