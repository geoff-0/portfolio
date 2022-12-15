import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";
import HomeIcon from "lib/icons/HomeIcon";
import DualGearsIcon from "lib/icons/DualGearsIcon";
import GearThinIcon from "lib/icons/GearThinIcon";
import NavLink from "lib/components/navigation/NavLink";
import { nanoid } from "nanoid";
import StackIcon from "lib/icons/StackIcon";
import MailIcon from "lib/icons/MailIcon";
import { useState } from "react";

const Header = () => {
  const navLinks = {
    Home: { href: "/", icon: HomeIcon },
    "Tech Stack": { href: "/", icon: StackIcon },
    Projects: { href: "/", icon: DualGearsIcon },
    Contact: { href: "/", icon: MailIcon },
  };

  const [active, setActive] = useState("Home");

  return (
    <Flex as="header" width="full" h="10vh" align="center" p="60px">
      <Text fontSize="lg" fontWeight="semibold" letterSpacing="wide">
        geoday.dev
      </Text>

      <Flex ml="auto" gap="1rem">
        {Object.keys(navLinks).map((k, i) => {
          return (
            <NavLink
              key={nanoid()}
              label={k}
              icon={navLinks[k as keyof typeof navLinks].icon}
              active={active}
              setActive={setActive}
            />
          );
        })}

        <ThemeToggle p="15px" />
      </Flex>
    </Flex>
  );
};

export default Header;
