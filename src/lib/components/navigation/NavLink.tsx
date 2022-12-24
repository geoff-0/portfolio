import { Button, Flex, Text, Box, Icon, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavLink(props: {
  icon: any;
  id: string;
  label: string;
  active: string;
  setActive: Function;
  onClose?: any;
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant="unstyled"
      as={NextLink}
      scrollBehavior="smooth"
      href={props.id}
      h="max-content"
      p="15px"
      scroll={false}
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
      textAlign="center"
      _hover={{ color: "brand.primary", fill: "brand.primary" }}
      onClick={() => {
        props.setActive(props.label);
        if (props.onClose) props.onClose();
      }}
    >
      <Icon as={props.icon} boxSize="25px" mb="15px" mx="auto" />

      <Text fontSize="15px">{props.label}</Text>
    </Button>
  );
}
