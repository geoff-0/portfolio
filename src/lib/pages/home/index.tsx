import React from "react";
import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("lib/components/sections/Intro"));
const About = dynamic(() => import("lib/components/sections/About"));
const TechStack = dynamic(() => import("lib/components/sections/TechStack"));
const Projects = dynamic(() => import("lib/components/sections/Projects"));
const Contact = dynamic(() => import("lib/components/sections/Contact"));
const RenderSectionWrapper = dynamic(
  () => import("lib/components/RenderSectionWrapper")
);

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
      <Intro pt="3rem" />

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
