import { Box, Center, Flex } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" h="10vh" align="center" p="1rem">
      <Center marginLeft="auto">
        <ThemeToggle />
      </Center>
    </Flex>
  );
};

export default Header;
