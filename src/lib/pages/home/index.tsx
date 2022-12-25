import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import SomeImage from "lib/components/samples/SomeImage";
import Intro from "lib/components/Intro";
import Projects from "lib/components/Projects";
import TechStack from "lib/components/TechStack";
import About from "lib/components/About";
import Contact from "lib/components/Contact";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      mb={8}
      w={{ base: "85%", lg: "75%", xl: "70%" }}
      mx="auto"
      overflow="hidden"
    >
      <NextSeo title="Geoffrey Perez | Front-end Developer" />

      <Box pt="30vh" pb="60vh" textAlign="left" w="full">
        <Intro />
      </Box>

      <About pb="10rem" />

      <TechStack pb="10rem" />

      <Projects pb="10rem" />

      <Contact />
    </Flex>
  );
};

export default Home;
