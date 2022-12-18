import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

export default function Intro(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Box textAlign="left" {...props}>
      <Text color="#1A9FFF" mb="1rem" fontSize={{ base: "lg", md: "xl" }}>
        Hey.
      </Text>

      <Heading as="h1" size={{ base: "2xl", md: "4xl" }} mb="2.5rem">
        {"I'm Geoffrey Perez,"}
        <br />a Full-stack Developer.
      </Heading>

      <Text
        fontSize={{ base: 15, md: "lg" }}
        color={colorMode == "light" ? "gray.600" : "gray.400"}
      >
        {"Currently, I specialize in front-end web development."}
        <br />

        {
          "I place an emphasis on user experience and create intuitive user interfaces."
        }
      </Text>
    </Box>
  );
}
