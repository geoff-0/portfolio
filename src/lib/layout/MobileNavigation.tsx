import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import NavLink from "lib/components/navigation/NavLink";
import SocialsList from "lib/components/SocialsList";
import AboutIcon from "lib/icons/AboutIcon";
import DualGearsIcon from "lib/icons/DualGearsIcon";
import HomeIcon from "lib/icons/HomeIcon";
import StackIcon from "lib/icons/StackIcon";
import { nanoid } from "nanoid";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function MobileNavigation(props: any) {
  const [active, setActive] = useState("Home");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = {
    Home: { id: "home", icon: HomeIcon },
    About: { id: "about", icon: AboutIcon },
    "Tech Stack": { id: "tech-stack", icon: StackIcon },
    Projects: { id: "projects", icon: DualGearsIcon },
    Contact: { id: "contact", icon: AboutIcon },
  };

  return (
    <Box {...props}>
      <IconButton
        as={HamburgerIcon}
        aria-label="Menu"
        variant="unstyled"
        onClick={(e) => {
          e.currentTarget.style.fill = "brand.primary";
          onOpen();
        }}
      />

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            transition="background-color .5s"
            bgColor={useColorModeValue("background.light", "background.dark")}
            p="5rem"
            w="full"
          >
            <Flex gap="1rem" direction="column">
              {Object.keys(navLinks).map((k, i) => {
                return (
                  <NavLink
                    key={nanoid()}
                    label={k}
                    icon={navLinks[k as keyof typeof navLinks].icon}
                    id={navLinks[k as keyof typeof navLinks].id}
                    active={active}
                    setActive={setActive}
                    onClose={onClose}
                  />
                );
              })}

              <SocialsList
                direction="column"
                align="center"
                w="full"
                gap="1rem"
              />

              <ThemeToggle />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
