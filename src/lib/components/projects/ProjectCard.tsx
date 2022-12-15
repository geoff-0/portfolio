import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function ProjectCard(props: { title: string }) {
  return (
    <Box textAlign="left">
      <Heading as="h1" size="md" py="10px">
        Project Title
      </Heading>
      <Card variant="outline" rounded="sm">
        <CardBody>
          <Box boxSize="max-content" bgColor="rgba(26, 159, 255, 0.1)" />

          <Box h="13vh" w="11vw" bgColor="white" />
          <Text>stuff</Text>
        </CardBody>
      </Card>
    </Box>
  );
}
