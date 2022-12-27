import { Divider, Flex, Heading, HStack, useColorMode } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import ProjectCard from "lib/components/projects/ProjectCard";

export default function Projects(props: any) {
  const { colorMode } = useColorMode();

  const projects = {
    portfolio: {
      title: "Tech Portfolio",
      description: `This portfolio is meant to display an insight into my technical capability.`,
      image: "/portfolio-snapshot.png",
      repoLink: "https://github.com/geoday03/portfolio",
      demoLink: "https://geoday.dev",
      techStack: {
        "React.js": {
          href: "https://reactjs.org",
          img: "https://reactjs.org/favicon.ico",
        },

        TypeScript: {
          img: "https://www.typescriptlang.org/favicon.ico",
          href: "https://www.typescriptlang.org",
        },

        "Next.js": {
          img:
            colorMode == "light"
              ? "/nextjs-icon-light.svg"
              : "/nextjs-icon-dark.svg",

          href: "https://nextjs.org",
        },

        "Chakra UI": {
          img: "/chakra-ui-logomark-colored.svg",
          href: "https://chakra-ui.com",
        },

        "Framer Motion": {
          img: "https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67",
          href: "https://www.framer.com/motion/",
        },
      },
    },

    feigne: {
      title: "Feigne",
      description: "Feigne is a mockup e-commerce application.",
      image: "/feigne-snapshot.png",
      repoLink: "https://github.com/geoday03/feigne",
      demoLink: "https://feigne.app",
      techStack: {
        "React.js": {
          href: "https://reactjs.org",
          img: "https://reactjs.org/favicon.ico",
        },

        "Redux.js": {
          img: "https://redux.js.org/img/redux.svg",
          href: "https://redux.js.org",
        },

        TypeScript: {
          img: "https://www.typescriptlang.org/favicon.ico",
          href: "https://www.typescriptlang.org",
        },

        "Next.js": {
          img:
            colorMode == "light"
              ? "/nextjs-icon-light.svg"
              : "/nextjs-icon-dark.svg",

          href: "https://nextjs.org",
        },

        "Chakra UI": {
          img: "/chakra-ui-logomark-colored.svg",
          href: "https://chakra-ui.com",
        },
      },
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
