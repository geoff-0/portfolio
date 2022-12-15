import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import Intro from "lib/components/Intro";
import Projects from "lib/components/projects/Projects";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Geoffrey Perez" />

      <Intro mb="20rem" mt="8rem" />

      <Projects />
    </Flex>
  );
};

export default Home;
