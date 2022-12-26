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
      <NextSeo
        title="Geoffrey Perez | Front-end Developer"
        description={`A programmer specializing in front-end web development. 
          Emphasizing user experience and intuitive user interfaces.`}
        openGraph={{
          url: `https://geoday.dev`,
          title: "Geoffrey Perez | Front-end Developer",
          description: `A programmer specializing in front-end web development. 
          Emphasizing user experience and intuitive user interfaces.`,
          images: [
            {
              url: "/portfolio-snapshot.png",
              alt: "Portfolio Snapshot",
              type: "image/jpeg",
            },
          ],
        }}
      />

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
