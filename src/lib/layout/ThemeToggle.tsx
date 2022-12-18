import {
  Button,
  Flex,
  Text,
  IconProps,
  Box,
  Icon,
  useColorMode,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import HomeIcon from "lib/icons/HomeIcon";
import MoonIcon from "lib/icons/MoonIcon";
import SunIcon from "lib/icons/SunIcon";
import { ReactNode, SVGProps } from "react";

export default function ThemeToggle(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      h="max-content"
      p="15px"
      textAlign="center"
      onClick={toggleColorMode}
      variant="unstyled"
      flexDirection="column"
      fill={colorMode == "light" ? "text.light" : "text.dark"}
      _hover={{
        color: colorMode == "light" ? "#1A9FFF" : "orange.300",
        fill: colorMode == "light" ? "#1A9FFF" : "orange.300",
      }}
      {...props}
    >
      <Icon
        as={colorMode === "light" ? MoonIcon : SunIcon}
        boxSize="25px"
        mb="5px"
      />

      <Text fontSize="light" fontWeight="semibold">
        Theme
      </Text>
    </Button>
  );
}
