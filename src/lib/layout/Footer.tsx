import { Flex, Link, Text } from "@chakra-ui/react";

import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" p="5rem">
      <Link
        as={NextLink}
        href="https://geoday.dev"
        target="_blank"
        isExternal
        rel="noopener noreferrer"
      >
        <Text fontSize="sm" color="gray.500">
          {new Date().getFullYear()} - geoday.dev
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
