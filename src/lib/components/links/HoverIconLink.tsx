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
} from "@chakra-ui/react";

import { MouseEventHandler } from "react";

import NextLink from "next/link";

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
  return (
    <Button
      as={NextLink}
      href={href}
      variant="ghost"
      flexDir={{ base: "row", md: "column" }}
      whiteSpace="nowrap"
      scroll={false}
      color={color}
      fill={color}
      gap="10px"
      alignItems="center"
      _hover={{ color: hoverColor, fill: hoverColor }}
      onClick={onClick}
      w="full"
      h="full"
      _active={{
        bg: "none",
      }}
      {...styles}
    >
      {icon}

      <Heading size={{ md: "xs", lg: "sm" }}>{label}</Heading>
    </Button>
  );
}
