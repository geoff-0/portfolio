import {
  Box,
  Flex,
  Slide,
  Text,
  Link,
  useBreakpointValue,
  useColorModeValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";

import { useScrollDirection } from "lib/hooks/useScrollDirection";

import NavItems from "lib/components/navigation/NavItems";

import NextLink from "next/link";
import useScrollPosition from "lib/hooks/useScrollPosition";
import { useEffect, useState } from "react";

const Header = () => {
  const scrollPos = useScrollPosition();
  const scrollDir = useScrollDirection();

  const { colorMode } = useColorMode();

  const pxt = useBreakpointValue({ base: "40px", md: "70px" });
  const pxb = useBreakpointValue({ base: "30px", md: "60px" });
  const pyt = useBreakpointValue({ base: "25px", md: "35px" });
  const pyb = useBreakpointValue({ base: "10px", md: "20px" });

  const bgColor = useColorModeValue("background.light", "background.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    scrollDir == "up" ? setOpen(true) : setOpen(false);
  }, [scrollDir]);

  return (
    <Box w="full" top="0" position="sticky" zIndex={999} bgColor={bgColor}>
      <Slide in={isOpen} direction="top">
        <Flex
          align="center"
          px={scrollPos == 0 ? pxt : pxb}
          pt={scrollPos == 0 ? pyt : pyb}
          pb="20px"
          bgColor={bgColor}
          boxShadow={
            scrollPos == 0 ? "none" : colorMode == "light" ? "sm" : "lg"
          }
          transition=".5s ease-out, padding .4s ease-out"
        >
          <Link
            as={NextLink}
            href="https://geoday.dev"
            _hover={{ textDecoration: "none", color: "brand.primary" }}
            h="full"
          >
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              fontWeight="semibold"
              letterSpacing="wide"
              color={textColor}
            >
              geoday.dev
            </Text>
          </Link>

          <NavItems />
        </Flex>
      </Slide>
    </Box>
  );
};

export default Header;
