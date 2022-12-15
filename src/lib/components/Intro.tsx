import { Box, Heading, Text } from "@chakra-ui/react";

export default function Intro(props: any) {
  return (
    <Box textAlign="left" w="60%" {...props}>
      <Text color="#1A9FFF" fontSize="xl">
        Hey.
      </Text>

      <Heading as="h1" size="4xl" mb=".5rem">
        {"I'm Geoffrey Perez,"}
      </Heading>

      <Heading as="h1" size="4xl" mb="2.5rem">
        a Software Engineer.
      </Heading>

      <Text fontSize="lg" color="gray.500">
        {"Currently, I specialize in front-end web development."}
        <br />
        {
          "I place an emphasis on user experience to create an intuitive user interface."
        }
      </Text>
    </Box>
  );
}
