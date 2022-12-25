import { EmailIcon } from "@chakra-ui/icons";

import { Button, StyleConfig, StyleProps, Text } from "@chakra-ui/react";

import { MouseEventHandler } from "react";

import NextLink from "next/link";

type HoverButtonProps = {
  label?: string;
  href: string;
  icon: any;
  color: string;
  hoverColor: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  styles?: StyleProps;
};

export default function HoverButton({
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
      leftIcon={icon}
      flexDir={{ base: "row", md: "column" }}
      whiteSpace="nowrap"
      scroll={false}
      color={color}
      fill={color}
      gap="10px"
      alignItems="center"
      _hover={{ color: hoverColor, fill: hoverColor }}
      onClick={onClick}
      _active={{
        bg: "none",
      }}
      {...styles}
    >
      {label}
    </Button>
  );
}
