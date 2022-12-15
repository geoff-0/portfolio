import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Grid>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
    </Grid>
  );
}
