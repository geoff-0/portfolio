import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useColorMode,
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
import { useEffect, useState } from "react";
import { useScrollDirection } from "lib/hooks/useScrollDirection";
import useScrollPosition from "lib/hooks/useScrollPosition";
import AboutIcon from "lib/icons/AboutIcon";
import MobileNavigation from "./MobileNavigation";
import SocialsList from "lib/components/SocialsList";

const Header = () => {
  const navLinks = {
    Home: { id: "/#home", icon: HomeIcon },
    About: { id: "/#about", icon: AboutIcon },
    "Tech Stack": { id: "/#tech-stack", icon: StackIcon },
    Projects: { id: "/#projects", icon: DualGearsIcon },
    Contact: { id: "/#contact", icon: MailIcon },
  };

  const [active, setActive] = useState("Home");

  const [isVisible, setVisible] = useState(true);

  const { colorMode } = useColorMode();

  const scrollDir = useScrollDirection();
  const scrollPos = useScrollPosition();

  const padding = useBreakpointValue({ base: "30px", md: "60px" });

  useEffect(() => {
    scrollDir == "up" ? setVisible(true) : setVisible(false);
  }, [scrollDir]);

  return (
    <Flex
      as="header"
      direction="column"
      w="full"
      top={isVisible == true ? "0" : "-95px"}
      position="sticky"
      transition=".5s ease-out"
      pb="10px"
      zIndex={100}
    >
      <Flex
        align="center"
        px={scrollPos == 0 ? padding : "30px"}
        pt={scrollPos == 0 ? "60px" : "10px"}
        transition=".5s ease-out"
        bgColor={colorMode == "light" ? "background.light" : "background.dark"}
        boxShadow={scrollPos == 0 ? "none" : colorMode == "light" ? "sm" : "lg"}
      >
        <NextLink href="https://geoday.dev" passHref>
          <Link _hover={{ textDecoration: "none", color: "brand.primary" }}>
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
              <Box
                display={{ base: "none", md: "flex" }}
                key={nanoid()}
                onClick={() => setVisible(false)}
              >
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

          <Box display={{ base: "none", md: "unset" }}>
            <ThemeToggle />
          </Box>
        </Flex>

        <MobileNavigation display={{ base: "flex", md: "none" }} />
      </Flex>

      <SocialsList
        ml="auto"
        px={scrollPos == 0 ? 5 : 3}
        py={scrollPos == 0 ? 5 : 3}
        borderWidth="1px"
        rounded="lg"
        borderTopWidth="0"
        borderTopRadius="0"
        display={{ base: "none", md: "flex" }}
      />
    </Flex>
  );
};

export default Header;
