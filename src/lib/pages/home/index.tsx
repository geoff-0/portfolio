import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LogoJsonLd, NextSeo } from "next-seo";

import SomeImage from "lib/components/samples/SomeImage";
import Intro from "lib/components/sections/Intro";
import Projects from "lib/components/sections/Projects";
import TechStack from "lib/components/sections/TechStack";
import About from "lib/components/sections/About";
import Contact from "lib/components/sections/Contact";

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
