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
      px={{ base: "10vw", lg: "20vw", xl: "25vw" }}
    >
      <Box pt="18vh" pb="15vh" textAlign="left" mr="auto">
        <Intro />
      </Box>

      <RenderSectionWrapper title={About.name}>
        <About />
      </RenderSectionWrapper>

      <RenderSectionWrapper title={TechStack.name}>
        <TechStack />
      </RenderSectionWrapper>

      <RenderSectionWrapper title={Projects.name}>
        <Projects />
      </RenderSectionWrapper>

      <RenderSectionWrapper title={Contact.name}>
        <Contact />
      </RenderSectionWrapper>
    </Flex>
  );
};

export default Home;
