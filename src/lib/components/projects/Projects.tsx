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
import HR from "../HR";
import ReactToolTip from "../tech-icons/ReactToolTip";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = {
    portfolio: {
      title: "Tech Portfolio",
      description: `This portfolio is meant to display an insight into my technical capability.`,
      image: "/portfolio-snapshot.png",
      repoLink: "https://github.com/geoday03/portfolio",
      demoLink: "https://geoday.dev",
      techStack: [ReactToolTip],
    },
    feigne: {
      title: "Feigne",
      description: "Feigne is a mockup e-commerce application.",
      image: "/feigne-snapshot.png",
      repoLink: "https://github.com/geoday03/feigne",
      demoLink: "https://feigne.vercel.app",
      techStack: [ReactToolTip],
    },
  };

  type projKey = keyof typeof projects;

  return (
    <Flex textAlign="left" flexDir="column">
      <HStack gap="3rem">
        <Heading as="h2" py="40px">
          Projects
        </Heading>
        <Divider />
      </HStack>

      <Flex direction="column" gap="3rem">
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
