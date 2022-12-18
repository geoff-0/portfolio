import { Grid } from "@chakra-ui/react";
import ESLintLabel from "./tool-icons/labels/ESLintLabel";
import GimpLabel from "./tool-icons/labels/GimpLabel";
import GitHubLabel from "./tool-icons/labels/GitHubLabel";
import GitLabel from "./tool-icons/labels/GitLabel";
import NPMLabel from "./tool-icons/labels/NPMLabel";
import PrettierLabel from "./tool-icons/labels/PrettierLabel";
import VSCodeLabel from "./tool-icons/labels/VSCodeLabel";

export default function ToolList(props: any) {
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
      <GitHubLabel />
      <GitLabel />
      <NPMLabel />
      <ESLintLabel />
      <PrettierLabel />
      <VSCodeLabel />
      <GimpLabel />
    </Grid>
  );
}
