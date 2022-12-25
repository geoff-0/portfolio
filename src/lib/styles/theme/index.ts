import { extendTheme } from "@chakra-ui/react";

import { StyleFunctionProps } from "@chakra-ui/theme-tools";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "body",
        color: props.colorMode == "light" ? "text.light" : "text.dark",
        bg: props.colorMode == "light" ? "background.light" : "background.dark",
      },
      "*": {
        "scrollbar-width": "thin",
        "scrollbar-color": "gray rgba(0, 0, 0, 0)",
      },
      "*::-webkit-scrollbar": {
        width: "6px",
      },

      "*::-webkit-scrollbar-track": {
        background: "rgba(0, 0, 0, 0)",
      },

      "*::-webkit-scrollbar-thumb": {
        bg: "gray",
        width: "6px",
        "border-radius": "6px",
      },
    }),
  },

  fonts,
  colors,
  config,
  components,
});

export default customTheme;
