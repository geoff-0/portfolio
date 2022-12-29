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
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

import { MouseEventHandler } from "react";

import NextLink from "next/link";

type HoverButtonProps = {
  label?: string;
  href: string;
  img: string;
  color: string;
  hoverColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: any;
  tooltip: Boolean;
};

export default function HoverImageLink({
  href,
  label,
  img,
  color,
  hoverColor,
  onClick,
  styles,
  tooltip,
}: HoverButtonProps) {
  const { colorMode } = useColorMode();

  return (
    <Tooltip
      label={tooltip ? label : ""}
      rounded="full"
      bgColor={colorMode == "light" ? "background.dark" : "background.light"}
      color={colorMode == "light" ? "text.dark" : "text.light"}
    >
      <Button
        as={NextLink}
        href={href}
        variant="ghost"
        whiteSpace="nowrap"
        scroll={false}
        color={color}
        fill={color}
        alignItems="center"
        _hover={{ color: hoverColor, fill: hoverColor }}
        onClick={onClick}
        _active={{
          bg: "none",
        }}
        {...styles}
      >
        <Stack direction="column" gap="10px">
          <Image
            src={img}
            alt={label}
            rounded="full"
            objectFit="contain"
            mx="auto"
            boxSize={tooltip ? "35px" : "50px"}
          />

          <Heading
            size="md"
            fontWeight="semibold"
            display={tooltip ? "none" : "unset"}
            textAlign="center"
          >
            {label}
          </Heading>
        </Stack>
      </Button>
    </Tooltip>
  );
}
