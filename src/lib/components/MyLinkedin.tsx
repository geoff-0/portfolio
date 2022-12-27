import {
  Icon,
  Image,
  Link,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import LinkedInIcon from "lib/icons/LinkedInIcon";
import LinkedInIcon2 from "lib/icons/LinkedInIcon2";

import NextLink from "next/link";

export default function MyLinkedIn(props: any) {
  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Tooltip
      label="My LinkedIn"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
      transition=".2s ease-out"
    >
      <Link
        as={NextLink}
        href="https://www.linkedin.com/in/geoffrey-perez/"
        target="_blank"
        fill={textColor}
        _hover={{ fill: "brand.primary" }}
        transition=".3s ease-out"
        {...props}
      >
        <Icon as={LinkedInIcon} boxSize="35px" />
      </Link>
    </Tooltip>
  );
}
