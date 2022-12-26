import { Divider, Flex, Heading, HStack, VStack } from "@chakra-ui/react";

import TechList from "lib/components/tech-stack/TechList";
import ToolList from "lib/components/tech-stack/ToolList";

export default function TechStack(props: any) {
  return (
    <Flex id="tech-stack" textAlign="left" flexDir="column" w="full" {...props}>
      <HStack gap="3rem">
        <Heading as="h2" py="40px" whiteSpace="nowrap">
          Tech Stack
        </Heading>
        <Divider transition="0.5s ease-out" />
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
