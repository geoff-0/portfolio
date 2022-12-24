import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

export default function Intro(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Box textAlign="left" w="full" {...props}>
      <Text color="#1A9FFF" mb="1rem" fontSize={{ base: "lg", md: "xl" }}>
        Hey.
      </Text>

      <Heading
        as="h1"
        size={{ base: "lg", md: "3xl", lg: "3xl", xl: "4xl" }}
        mb="2.5rem"
      >
        {"I'm Geoffrey Perez,"}
        <br />a Front-end Developer.
      </Heading>

      <Text
        fontSize={{ base: "15px", md: "lg" }}
        color={colorMode == "light" ? "gray.600" : "gray.400"}
      >
        {"Programmer pecializing in front-end web development"}
        <br />

        {
          "Placing emphasis on user experience and create intuitive user interfaces."
        }
      </Text>
    </Box>
  );
}
