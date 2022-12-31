import { Link, LinkProps } from "@chakra-ui/react";

import nextLink from "next/link";

export default function NextLink(props: any) {
  return <Link as={nextLink} {...props} />;
}
