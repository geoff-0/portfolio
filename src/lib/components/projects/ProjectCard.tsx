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
} from "@chakra-ui/react";

import CTASection from "../samples/CTASection";

import NextLink from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ReactIcon from "lib/icons/ReactIcon";
import ReactToolTip from "../tech-icons/ReactToolTip";
import TSToolTip from "../tech-icons/TSTooltip";
import NextTooltip from "../tech-icons/NextTooltip";

export default function ProjectCard(props: {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink: string;
  techStack: [];
}) {
  return (
    <Card
      textAlign="left"
      variant="unstyled"
      rounded="sm"
      direction={{ base: "column", md: "row" }}
      p="20px"
      gap="3rem"
    >
      <NextLink passHref href={props.demoLink}>
        <Link target="_blank">
          <Image
            alt="placeholder"
            src={props.image}
            objectFit="cover"
            maxW="580px"
            opacity=".75"
            transition="opacity .5s"
            _hover={{ opacity: 1 }}
            rounded="lg"
          />
        </Link>
      </NextLink>

      <Divider orientation="vertical" />
      <Stack>
        <CardBody minW="30rem">
          <Box>
            <Heading as="h2" mr="auto" mb="1rem">
              <NextLink href={props.demoLink} passHref>
                <Link
                  transition="color .5s"
                  _hover={{ textDecor: "none", color: "brand.primary" }}
                >
                  {props.title}
                </Link>
              </NextLink>
            </Heading>

            <HStack mb="1rem">
              <ReactToolTip />
              <TSToolTip />
              <NextTooltip />
            </HStack>

            <Text color="gray.500">{props.description}</Text>
          </Box>
        </CardBody>
        <CardFooter gap="1rem">
          <Button
            as={NextLink}
            href={props.repoLink}
            passHref
            target="_blank"
            leftIcon={<AiFillGithub />}
            size="sm"
          >
            Open in Github
          </Button>

          <Button
            as={NextLink}
            href={props.demoLink}
            passHref
            target="_blank"
            leftIcon={<ExternalLinkIcon />}
            size="sm"
          >
            Live Demo
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
