import {
  Icon,
  Image,
  Link,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import GitHubIcon from "lib/icons/GitHubIcon";

import NextLink from "next/link";

export default function MyGitHub(props: any) {
  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Tooltip
      label="My GitHub"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
      transition=".2s ease-out"
    >
      <NextLink href="https://github.com/geoday03" passHref target="_blank">
        <Link
          transition=".2s ease-out"
          stroke={textColor}
          fill="rgba(0,0,0,0)"
          _hover={{ stroke: "brand.primary" }}
          {...props}
        >
          {/* <Image
            src="https://github.com/fluidicon.png"
            alt="My GitHub"
            boxSize="35px"
          /> */}
          <Icon as={GitHubIcon} boxSize="35px" />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
