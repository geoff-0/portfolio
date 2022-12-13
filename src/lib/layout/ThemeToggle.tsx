import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      icon={useColorModeValue(
        <RiMoonFill fill="#1A9FFF" />,
        <RiSunLine fill="#53a4c4" />
      )}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
