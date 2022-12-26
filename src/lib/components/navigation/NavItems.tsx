import {
  Box,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Slide,
  SlideFade,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import HomeIcon from "lib/icons/HomeIcon";

import DualGearsIcon from "lib/icons/DualGearsIcon";

import { nanoid } from "nanoid";

import StackIcon from "lib/icons/StackIcon";

import MailIcon from "lib/icons/MailIcon";

import { Dispatch, SetStateAction, useState } from "react";

import AboutIcon from "lib/icons/AboutIcon";

import HoverIconLink from "../links/HoverIconLink";

import MoonIcon from "lib/icons/MoonIcon";

import SunIcon from "lib/icons/SunIcon";
import ResumeIcon from "lib/icons/ResumeIcon";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavItems() {
  const navLinks = {
    Home: { href: "/#home", icon: HomeIcon },
    About: { href: "/#about", icon: AboutIcon },
    "Tech Stack": { href: "/#tech-stack", icon: StackIcon },
    Projects: { href: "/#projects", icon: DualGearsIcon },
    Contact: { href: "/#contact", icon: MailIcon },
  };

  const [active, setActive] = useState("Home");

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = useColorModeValue("text.light", "text.dark");

  const itemH = useBreakpointValue({
    base: 70 / Object.keys(navLinks).length + 2,
    md: "full",
  });

  return (
    <Flex ml="auto" w="full">
      <Flex
        ml="auto"
        gap={{ base: "3rem", md: "1rem" }}
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        {Object.keys(navLinks).map((k, i) => {
          return (
            <HoverIconLink
              key={nanoid()}
              href={navLinks[k as keyof typeof navLinks].href}
              label={k}
              icon={
                <Icon
                  as={navLinks[k as keyof typeof navLinks].icon}
                  m="0"
                  boxSize="25px"
                  align="center"
                />
              }
              color={active == k ? "brand.primary" : textColor}
              hoverColor="brand.primary"
              onClick={() => {
                onClose();
                setActive(k);
              }}
              styles={{ h: itemH, w: "full" }}
            />
          );
        })}
        <HoverIconLink
          key={nanoid()}
          href="/Resume_Geoffrey_Perez.pdf"
          label={"Resume"}
          icon={<Icon as={ResumeIcon} boxSize="25px" align="center" />}
          color={textColor}
          hoverColor="brand.primary"
          onClick={() => {
            onClose();
          }}
          styles={{ h: itemH, w: "full", target: "_blank" }}
        />
        <HoverIconLink
          href={""}
          label={"Theme"}
          icon={
            <Icon
              as={colorMode == "light" ? MoonIcon : SunIcon}
              boxSize="25px"
              align="center"
            />
          }
          color={textColor}
          hoverColor={colorMode == "light" ? "cyan.400" : "orange.300"}
          onClick={() => {
            toggleColorMode();
          }}
          styles={{
            h: itemH,
            w: "full",
          }}
        />
      </Flex>

      <Box display={{ base: "flex", md: "flex", lg: "none" }} w="full">
        <IconButton
          as={HamburgerIcon}
          aria-label="Menu"
          variant="unstyled"
          ml="auto"
          onClick={(e) => {
            e.currentTarget.style.fill = "brand.primary";
            onToggle();
          }}
        />

        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton size="lg" />

            <DrawerBody
              transition="background-color .5s"
              bgColor={useColorModeValue("background.light", "background.dark")}
              w="full"
            >
              <Box pt="10vh">
                <Flex
                  ml="auto"
                  gap={{ base: "2rem", md: "3rem" }}
                  direction={{ base: "column", md: "column", lg: "row" }}
                >
                  {Object.keys(navLinks).map((k, i) => {
                    return (
                      <HoverIconLink
                        key={nanoid()}
                        href={navLinks[k as keyof typeof navLinks].href}
                        label={k}
                        icon={
                          <Icon
                            as={navLinks[k as keyof typeof navLinks].icon}
                            boxSize="25px"
                            align="center"
                          />
                        }
                        color={active == k ? "brand.primary" : textColor}
                        hoverColor="brand.primary"
                        onClick={() => {
                          onClose();
                          setActive(k);
                        }}
                        styles={{
                          h: itemH,
                          w: "full",
                        }}
                      />
                    );
                  })}

                  <HoverIconLink
                    key={nanoid()}
                    href="/Resume_Geoffrey_Perez.pdf"
                    label={"Resume"}
                    icon={
                      <Icon as={ResumeIcon} boxSize="25px" align="center" />
                    }
                    color={textColor}
                    hoverColor="brand.primary"
                    onClick={() => onClose()}
                    styles={{ h: itemH, w: "full", target: "_blank" }}
                  />

                  <HoverIconLink
                    href={""}
                    label={"Theme"}
                    icon={
                      <Icon
                        as={colorMode == "light" ? MoonIcon : SunIcon}
                        boxSize="25px"
                        align="center"
                      />
                    }
                    color={textColor}
                    hoverColor={
                      colorMode == "light" ? "cyan.400" : "orange.300"
                    }
                    onClick={() => {
                      toggleColorMode();
                    }}
                    styles={{
                      h: itemH,
                      w: "full",
                    }}
                  />
                </Flex>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
}
