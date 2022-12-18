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
} from "@chakra-ui/react";

import NextLink from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";

export default function ProjectCard(props: {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink: string;
  techStack: any;
}) {
  const { colorMode } = useColorMode();

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
      <NextLink passHref href={props.demoLink} target="_blank">
        <Link>
          <Image
            alt="placeholder"
            src={props.image}
            boxSize="lg"
            objectFit="cover"
            opacity="1"
            transition="opacity .5s"
            _hover={{ opacity: 0.75 }}
            rounded="lg"
            maxH="360px"
          />
        </Link>
      </NextLink>

      <Stack gap={{ base: "3rem", md: "0" }}>
        <CardBody>
          <Box>
            <NextLink href={props.demoLink} passHref target="_blank">
              <Link
                transition="color .5s"
                _hover={{ textDecor: "none", color: "brand.primary" }}
              >
                <Heading as="h2" mr="auto" mb="1rem">
                  {props.title}
                </Heading>
              </Link>
            </NextLink>

            <HStack mb="1rem" gap="5px">
              {props.techStack.map((e: any) => (
                <Box as={e} key={nanoid()} />
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
            <NextLink href={props.repoLink} passHref target="_blank">
              <Link _hover={{ textDecoration: "none" }}>Open in Github</Link>
            </NextLink>
          </Button>

          <Button display={{ base: "flex", md: "none" }} size="sm">
            <NextLink href={props.repoLink} passHref target="_blank">
              <Link _hover={{ textDecoration: "none" }}>Open in Github</Link>
            </NextLink>
          </Button>

          <Button
            display={{ base: "none", md: "flex" }}
            leftIcon={<ExternalLinkIcon />}
            size="sm"
          >
            <NextLink href={props.demoLink} passHref target="_blank">
              <Link _hover={{ textDecoration: "none" }}>Live Demo</Link>
            </NextLink>
          </Button>

          <Button display={{ base: "flex", md: "none" }} size="sm">
            <NextLink href={props.demoLink} passHref target="_blank">
              <Link _hover={{ textDecoration: "none" }}>Live Demo</Link>
            </NextLink>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
