import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";
import HoverImageLink from "../links/HoverImageLink";

export default function ProjectCard(props: {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink: string;
  techStack: any;
}) {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Card
      textAlign="left"
      variant="unstyled"
      rounded="sm"
      direction={{ base: "column", md: "row" }}
      p="20px"
      w="full"
      gap={{ base: "1rem", md: "4rem" }}
    >
      <Link
        as={NextLink}
        href={props.demoLink}
        target="_blank"
        w={{ base: "full", md: "50%" }}
        _hover={{ opacity: 0.75 }}
      >
        <Image
          alt="placeholder"
          mx="auto"
          src={props.image}
          boxSize="lg"
          opacity="1"
          objectFit="cover"
          transition="opacity .5s"
          rounded="lg"
          maxH="360px"
        />
      </Link>

      <Stack gap={{ base: "3rem", md: "0" }} w={{ base: "full", md: "50%" }}>
        <CardBody>
          <Box>
            <Link
              as={NextLink}
              href={props.demoLink}
              target="_blank"
              transition="color .5s"
              _hover={{ textDecor: "none", color: "brand.primary" }}
            >
              <Heading as="h2" mr="auto" mb="1rem">
                {props.title}
              </Heading>
            </Link>

            <HStack mb="1rem">
              {Object.keys(props.techStack).map((k) => (
                <HoverImageLink
                  key={nanoid()}
                  img={props.techStack[k as keyof typeof props.techStack].img}
                  href={props.techStack[k as keyof typeof props.techStack].href}
                  label={k}
                  color={textColor}
                  hoverColor={"brand.primary"}
                  styles={{
                    target: "_blank",
                    h: "full",
                    px: "0",
                    _hover: { opacity: 0.8 },
                  }}
                  tooltip={true}
                />
              ))}
            </HStack>

            <Text color={colorMode == "light" ? "gray.600" : "gray.400"}>
              {props.description}
            </Text>
          </Box>
        </CardBody>

        <CardFooter gap="1rem">
          <Button
            display={{ base: "none", md: "flex" }}
            leftIcon={<AiFillGithub />}
            size="sm"
          >
            <Link
              as={NextLink}
              href={props.repoLink}
              passHref
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              Open in Github
            </Link>
          </Button>

          <Button display={{ base: "flex", md: "none" }} size="sm">
            <Link
              as={NextLink}
              href={props.repoLink}
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              Open in Github
            </Link>
          </Button>

          <Button
            display={{ base: "none", md: "flex" }}
            leftIcon={<ExternalLinkIcon />}
            size="sm"
          >
            <Link
              as={NextLink}
              href={props.demoLink}
              _hover={{ textDecoration: "none" }}
            >
              Live Demo
            </Link>
          </Button>

          <Button display={{ base: "flex", md: "none" }} size="sm">
            <Link
              as={NextLink}
              href={props.demoLink}
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
