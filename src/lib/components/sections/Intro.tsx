import { Box, Heading, SlideFade, Text, useColorMode } from "@chakra-ui/react";
import MotionBox from "../motion/Box";

export default function Intro(props: any) {
  const { colorMode } = useColorMode();

  return (
    <Box textAlign="left" w="full" transition="5s ease-out" {...props}>
      <MotionBox
        initial={{ y: "-60vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Text color="brand.primary" fontSize={{ base: "lg", md: "xl" }}>
          {"Hey. I'm"}
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ x: "80vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
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
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0, y: "60vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Text
          fontSize={{ base: "15px", md: "20px" }}
          color={colorMode == "light" ? "gray.600" : "gray.400"}
        >
          {"A programmer specializing in front-end web development."}
          <br />
          {"Emphasizing user experience and intuitive user interfaces."}
        </Text>
      </MotionBox>
    </Box>
  );
}
