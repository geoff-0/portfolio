import { SimpleGrid } from "@chakra-ui/react";
import ChakraLabel from "./tech-icons/labels/ChakaLabel";
import ExpressLabel from "./tech-icons/labels/ExpressLabel";
import MongoLabel from "./tech-icons/labels/MongoLabel";
import NextLabel from "./tech-icons/labels/NextLabel";
import ReactLabel from "./tech-icons/labels/ReactLabel";
import ReduxLabel from "./tech-icons/labels/ReduxLabel";
import SassLabel from "./tech-icons/labels/SassLabel";
import TSLabel from "./tech-icons/labels/TSLabel";

export default function TechList(props: any) {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 6, xl: 8 }}
      spacing={10}
      py="1rem"
      {...props}
    >
      <ReactLabel />
      <ReduxLabel />
      <TSLabel />
      <NextLabel />
      <ChakraLabel />
      <ExpressLabel />
      <MongoLabel />
      <SassLabel />
    </SimpleGrid>
  );
}
