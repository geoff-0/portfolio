import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors = {
  brand: {
    primary: "#1A9FFF",
  },
  background: {
    light: "white",
    dark: "#0c0c0c",
  },
  text: {
    light: "#1A202C",
    dark: "#ffffff",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
