import {
  Button,
  Flex,
  Text,
  IconProps,
  Box,
  Icon,
  useColorMode,
  useColorModeValue,
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
      onClick={toggleColorMode}
      variant="unstyled"
      flexDirection="column"
      fill={useColorModeValue("text.light", "text.dark")}
      _hover={{
        color: useColorModeValue("#1A9FFF", "orange.300"),
        fill: useColorModeValue("#1A9FFF", "orange.300"),
      }}
      {...props}
    >
      <Icon
        as={colorMode === "light" ? MoonIcon : SunIcon}
        boxSize="25px"
        mx="auto"
        mb="5px"
      />

      <Text fontSize="light" fontWeight="semibold">
        Theme
      </Text>
    </Button>
  );
}
