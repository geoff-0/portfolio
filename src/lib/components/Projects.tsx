import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import ChakraTooltip from "./tech-stack/tech-icons/tooltips/ChakraTooltip";
import NextTooltip from "./tech-stack/tech-icons/tooltips/NextTooltip";
import ReactToolTip from "./tech-stack/tech-icons/tooltips/ReactTooltip";
import ReduxTooltip from "./tech-stack/tech-icons/tooltips/ReduxTooltip";
import TSToolTip from "./tech-stack/tech-icons/tooltips/TSTooltip";
import ProjectCard from "./projects/ProjectCard";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import { useState } from "react";

export default function Projects(props: any) {
  const projects = {
    portfolio: {
      title: "Tech Portfolio",
      description: `This portfolio is meant to display an insight into my technical capability.`,
      image: "/portfolio-snapshot.png",
      repoLink: "https://github.com/geoday03/portfolio",
      demoLink: "https://geoday.dev",
      techStack: [ReactToolTip, TSToolTip, NextTooltip, ChakraTooltip],
    },
    feigne: {
      title: "Feigne",
      description: "Feigne is a mockup e-commerce application.",
      image: "/feigne-snapshot.png",
      repoLink: "https://github.com/geoday03/feigne",
      demoLink: "https://feigne.app",
      techStack: [
        ReactToolTip,
        TSToolTip,
        NextTooltip,
        ReduxTooltip,
        ChakraTooltip,
      ],
    },
  };

  type projKey = keyof typeof projects;

  return (
    <Flex textAlign="left" flexDir="column" w="full" id="projects" {...props}>
      <HStack gap="3rem">
        <Heading as="h2" py="40px">
          Projects
        </Heading>
        <Divider m="5px" transition="0.5s ease-out" />
      </HStack>

      <Flex direction="column" gap={{ base: "5rem", md: "3rem" }}>
        {Object.keys(projects).map((key, i) => (
          <ProjectCard
            key={nanoid()}
            title={projects[key as projKey].title}
            image={projects[key as projKey].image}
            description={projects[key as projKey].description}
            demoLink={projects[key as projKey].demoLink}
            repoLink={projects[key as projKey].repoLink}
            techStack={projects[key as projKey].techStack}
          />
        ))}
      </Flex>
    </Flex>
  );
}
