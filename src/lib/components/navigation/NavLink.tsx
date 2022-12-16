import {
  Button,
  Flex,
  Text,
  IconProps,
  Box,
  Icon,
  useColorMode,
  textDecoration,
} from "@chakra-ui/react";
import HomeIcon from "lib/icons/HomeIcon";
import { ReactNode, SVGProps } from "react";

export default function NavLink(props: {
  icon: any;
  label: string;
  active: string;
  setActive: Function;
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant="unstyled"
      h="max-content"
      p="15px"
      fill={
        props.active == props.label
          ? "brand.primary"
          : colorMode == "light"
          ? "text.light"
          : "text.dark"
      }
      color={
        props.active == props.label
          ? "brand.primary"
          : colorMode == "light"
          ? "text.light"
          : "text.dark"
      }
      _hover={{ color: "brand.primary", fill: "brand.primary" }}
      onClick={() => props.setActive(props.label)}
    >
      <Flex direction="column" gap="5px">
        <Box mx="auto">
          <Icon as={props.icon} boxSize="25px" />
        </Box>

        <Text fontSize="15px">{props.label}</Text>
      </Flex>
    </Button>
  );
}
