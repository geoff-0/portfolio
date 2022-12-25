import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

export default function Intro(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Box textAlign="left" w="full" {...props}>
      <Text color="brand.primary" mb="1rem" fontSize={{ base: "lg", md: "xl" }}>
        {"Hey. I'm"}
      </Text>

      <Heading
        as="h1"
        fontSize={{
          base: "40px",
          md: "60px",
          lg: "65px",
        }}
        mb="2.5rem"
      >
        <Text>{"Geoffrey Perez,"}</Text>
        <Text>A Front-end Developer.</Text>
      </Heading>

      <Text
        fontSize={{ base: "15px", md: "20px" }}
        color={colorMode == "light" ? "gray.600" : "gray.400"}
      >
        {"Programmer specializing in front-end web development."}
        <br />

        {
          "Placing emphasis on user experience and create intuitive user interfaces."
        }
      </Text>
    </Box>
  );
}
