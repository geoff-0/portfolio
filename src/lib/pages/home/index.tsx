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
import RenderSectionWrapper from "lib/components/RenderSectionWrapper";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      mb={8}
      overflow="hidden"
      gap="35vh"
      w="full"
      px={{ base: "10vw", lg: "20vw" }}
    >
      <Box h="full" pt="10vh" pb="15vh" textAlign="left" mr="auto">
        <Intro pt="3rem" />
      </Box>

      <RenderSectionWrapper title={About.name}>
        <About pt="5rem" />
      </RenderSectionWrapper>

      <RenderSectionWrapper title={TechStack.name}>
        <TechStack pt="5rem" />
      </RenderSectionWrapper>

      <RenderSectionWrapper title={Projects.name}>
        <Projects pt="5rem" />
      </RenderSectionWrapper>

      <RenderSectionWrapper title={Contact.name}>
        <Contact pt="5rem" />
      </RenderSectionWrapper>
    </Flex>
  );
};

export default Home;
