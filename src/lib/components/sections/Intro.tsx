import {
  Box,
  Heading,
  ScaleFade,
  Slide,
  SlideFade,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export default function Intro(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Box textAlign="left" w="full" {...props}>
      <SlideFade offsetY={"-60vh"} in={true}>
        <Text
          color="brand.primary"
          mb="1rem"
          fontSize={{ base: "lg", md: "xl" }}
        >
          {"Hey. I'm"}
        </Text>
      </SlideFade>

      <SlideFade in={true} offsetX="60vw">
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
      </SlideFade>

      <ScaleFade in={true}>
        <Text
          fontSize={{ base: "15px", md: "20px" }}
          color={colorMode == "light" ? "gray.600" : "gray.400"}
        >
          {"A programmer specializing in front-end web development."}
          <br />
          {"Emphasizing user experience and intuitive user interfaces."}
        </Text>
      </ScaleFade>
    </Box>
  );
}
