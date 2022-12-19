import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";
import HomeIcon from "lib/icons/HomeIcon";
import DualGearsIcon from "lib/icons/DualGearsIcon";
import NavLink from "lib/components/navigation/NavLink";
import { nanoid } from "nanoid";
import StackIcon from "lib/icons/StackIcon";
import MailIcon from "lib/icons/MailIcon";
import { useEffect, useRef, useState } from "react";
import { useScrollDirection } from "lib/hooks/useScrollDirection";
import useScrollPosition from "lib/hooks/useScrollPosition";
import AboutIcon from "lib/icons/AboutIcon";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const navLinks = {
    Home: { id: "home", icon: HomeIcon },
    About: { id: "about", icon: AboutIcon },
    "Tech Stack": { id: "tech-stack", icon: StackIcon },
    Projects: { id: "projects", icon: DualGearsIcon },
    Contact: { id: "contact", icon: MailIcon },
  };

  const [active, setActive] = useState("Home");

  const scrollDir = useScrollDirection();
  const scrollPos = useScrollPosition();

  const padding = useBreakpointValue({ base: "30px", md: "60px" });

  return (
    <Flex
      as="header"
      w="full"
      align="center"
      top={scrollDir == "up" ? "0" : "-300"}
      px={scrollPos == 0 ? padding : "30px"}
      py={scrollPos == 0 ? "60px" : "10px"}
      position="sticky"
      transition="top .3s, padding .3s, background-color .5s"
      zIndex={100}
      boxShadow={scrollPos == 0 ? "none" : "sm"}
      bgColor={useColorModeValue("background.light", "background.dark")}
    >
      <NextLink href="https://geoday.dev" passHref>
        <Link
          transition="color .5s"
          _hover={{ textDecoration: "none", color: "brand.primary" }}
        >
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="semibold"
            letterSpacing="wide"
          >
            geoday.dev
          </Text>
        </Link>
      </NextLink>

      <Flex ml="auto" gap="1rem">
        {Object.keys(navLinks).map((k, i) => {
          return (
            <Box display={{ base: "none", md: "flex" }} key={nanoid()}>
              <NavLink
                label={k}
                icon={navLinks[k as keyof typeof navLinks].icon}
                id={navLinks[k as keyof typeof navLinks].id}
                active={active}
                setActive={setActive}
              />
            </Box>
          );
        })}

        <Box display={{ base: "none", md: "flex" }}>
          <ThemeToggle />
        </Box>
      </Flex>

      <MobileNavigation display={{ base: "flex", md: "none" }} />
    </Flex>
  );
};

export default Header;
