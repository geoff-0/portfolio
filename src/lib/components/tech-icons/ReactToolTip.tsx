import { IconButton, Link, Tooltip } from "@chakra-ui/react";
import ReactIcon from "lib/icons/ReactIcon";

import NextLink from "next/link";

export default function ReactToolTip() {
  return (
    <Tooltip label="React" rounded="full" bgColor="brand.primary" p="10px">
      <NextLink href="https://reactjs.org" passHref target="_blank">
        <Link>
          <IconButton
            as={ReactIcon}
            fill="brand.primary"
            aria-label="React Icon"
            variant="ghost"
            p="5px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
