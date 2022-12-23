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
import ResumeIcon from "lib/icons/ResumeIcon";

import NextLink from "next/link";

export default function MyResume(props: any) {
  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Tooltip
      label="My Resume"
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
      transition=".2s ease-out"
    >
      <NextLink href="/Resume_Geoffrey_Perez.pdf" passHref target="_blank">
        <Link
          fill={textColor}
          _hover={{ fill: "brand.primary" }}
          transition=".3s ease-out"
          {...props}
        >
          {/* <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            alt="My LinkedIn"
            boxSize="35px"
          /> */}
          <Icon as={ResumeIcon} boxSize="35px" />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
