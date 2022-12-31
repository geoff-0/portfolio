import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LogoJsonLd, NextSeo } from "next-seo";

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
      w="full"
      mx="auto"
      overflow="hidden"
    >
      <Box w={{ base: "80%", lg: "75%", xl: "65%" }}>
        <Box pt="18vh" pb="60vh" textAlign="left">
          <Intro />
        </Box>

        <About py="5rem" />

        <TechStack py="10rem" />

        <Projects py="10rem" />

        <Contact />
      </Box>
    </Flex>
  );
};

export default Home;
