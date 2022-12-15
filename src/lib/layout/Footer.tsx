import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link href="https://geoday.dev" isExternal rel="noopener noreferrer">
          geoday.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
