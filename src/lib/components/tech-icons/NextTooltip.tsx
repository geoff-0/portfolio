import { IconButton, Link, Tooltip } from "@chakra-ui/react";
import NextJSIcon from "lib/icons/NextJSIcon";
import ReactIcon from "lib/icons/ReactIcon";

import NextLink from "next/link";

export default function NextTooltip() {
  return (
    <Tooltip label="Next" rounded="full" bgColor="brand.primary" p="10px">
      <NextLink href="https://nextjs.org" passHref target="_blank">
        <Link>
          <IconButton
            as={NextJSIcon}
            fill="brand.primary"
            aria-label="Next Icon"
            variant="ghost"
            w="25px"
            p="5px"
          />
        </Link>
      </NextLink>
    </Tooltip>
  );
}
