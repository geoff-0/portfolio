import { IconButton, Link, Tooltip } from "@chakra-ui/react";
import TSIcon from "lib/icons/TSIcon";

import NextLink from "next/link";

export default function TSToolTip() {
  return (
    <Tooltip label="TypeScript" rounded="full" bgColor="brand.primary" p="10px">
      <NextLink href="https://www.typescriptlang.org" passHref target="_blank">
        <Link>
          <IconButton
            as={TSIcon}
            bgColor="#3178c6"
            aria-label="React Icon"
            variant="ghost"
            colorScheme="blue"
            p="5px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
