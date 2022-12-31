import { EmailIcon } from "@chakra-ui/icons";

import {
  Button,
  Icon,
  ImageProps,
  Text,
  Box,
  ComponentWithAs,
  Stack,
  Image,
  Heading,
  VStack,
  HStack,
  Flex,
  useStyleConfig,
  Link,
} from "@chakra-ui/react";

import { MouseEventHandler, useState } from "react";

import MotionBox from "../motion/Box";

import { useMotionValue } from "framer-motion";

import NextLink from "../next/NextLink";

type HoverButtonProps = {
  label?: string;
  href: string;
  icon?: any;
  color: string;
  hoverColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: any;
};

export default function HoverLink({
  href,
  label,
  icon,
  color,
  hoverColor,
  onClick,
  styles,
}: HoverButtonProps) {
  const componentStyles = useStyleConfig("HoverLink", {});

  return (
    <MotionBox
      initial={{
        y: 0,
      }}
      whileHover={{
        y: -3,
      }}
    >
      <NextLink
        href={href}
        _hover={{ textDecor: "none" }}
        scroll={false}
        onClick={onClick}
        {...styles}
      >
        <VStack
          __css={componentStyles}
          fill={color}
          color={color}
          transition=".2s ease-out"
          _hover={{ color: hoverColor, fill: hoverColor }}
          {...styles}
        >
          {icon}

          <Heading size={{ md: "xs", lg: "sm" }}>{label}</Heading>
        </VStack>
      </NextLink>
    </MotionBox>
  );
}
