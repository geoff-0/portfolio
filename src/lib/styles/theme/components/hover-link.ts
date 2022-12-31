import { defineStyleConfig, useColorMode } from "@chakra-ui/react";

export const HoverLink = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDir: { base: "row", md: "column" },
    textAlign: "center",
    whiteSpace: "nowrap",
    gap: "10px",
    alignItems: "center",
    w: "full",
    h: "full",
    p: "5px",
    pb: "10px",
    px: "8px",
  },
});
