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
  Heading,
  SlideFade,
} from "@chakra-ui/react";

import { useScrollDirection } from "lib/hooks/useScrollDirection";

import NavItems from "lib/components/navigation/NavItems";

import NextLink from "next/link";
import useScrollPosition from "lib/hooks/useScrollPosition";
import { useEffect, useState } from "react";
import MotionBox from "lib/components/motion/Box";

const Header = () => {
  const scrollPos = useScrollPosition();

  const { colorMode } = useColorMode();

  const pxt = useBreakpointValue({ base: "40px", md: "70px" });
  const pxb = useBreakpointValue({ base: "30px", md: "60px" });
  const pyt = useBreakpointValue({ base: "25px", md: "35px" });
  const pyb = useBreakpointValue({ base: "15px", md: "20px" });

  const bgColor = useColorModeValue("background.light", "background.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Box w="full" top="0" position="sticky" zIndex={999} bgColor={bgColor}>
      <Flex
        align="center"
        px={scrollPos == 0 ? pxt : pxb}
        pt={scrollPos == 0 ? pyt : pyb}
        pb="10px"
        bgColor={bgColor}
        boxShadow={scrollPos == 0 ? "none" : colorMode == "light" ? "sm" : "xl"}
        transition=".5s ease-out, padding .4s ease-out"
      >
        <MotionBox
          initial={{ x: "-20vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <Link
            as={NextLink}
            href="https://geoday.dev"
            _hover={{ textDecoration: "none" }}
            h="full"
            scroll={false}
            mt="-10px"
          >
            <Heading
              fontSize={{ base: "md", md: "lg" }}
              letterSpacing="wide"
              color={textColor}
              _hover={{ color: "brand.primary" }}
              transition=".2s ease-out"
            >
              geoday.dev
            </Heading>
          </Link>
        </MotionBox>

        <MotionBox
          initial={{ x: "20vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
          style={{ marginLeft: "auto" }}
        >
          <NavItems />
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Header;
