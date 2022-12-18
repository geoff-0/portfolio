import { Box, Grid, Image } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import NavLink from "../navigation/NavLink";
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
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(8, 1fr)",
      }}
      gap="10px"
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
    </Grid>
  );
}
