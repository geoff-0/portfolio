import { Box, VStack, Heading } from "@chakra-ui/react";

import { Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

export default function GimpLabel(props: any) {
  return (
    <Box p="15px" {...props}>
      <NextLink href="https://gimp.org" passHref target="_blank">
        <Link
          variant="unstyled"
          h="max-content"
          _hover={{ color: "brand.primary" }}
          transition="color .5s"
        >
          <VStack direction="column" gap="10px">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1024px-The_GIMP_icon_-_gnome.svg.png"
              alt="Gimp"
              boxSize="50px"
              mx="auto"
              rounded="full"
            />

            <Heading size="md" fontWeight="semibold">
              Gimp
            </Heading>
          </VStack>
        </Link>
      </NextLink>
    </Box>
  );
}
