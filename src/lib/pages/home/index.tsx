import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
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
      gap={"10rem"}
      mb={8}
      w={{ base: "85%", lg: "75%", xl: "67%" }}
      mx="auto"
      overflow="hidden"
    >
      <NextSeo title="Geoffrey Perez" />

      <Intro mb="17rem" py="1rem" />

      <About />

      <TechStack />

      <Projects />

      <Contact />
    </Flex>
  );
};

export default Home;
