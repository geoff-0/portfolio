import { Box, useColorMode } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      margin="0 auto"
      transition="0.5s ease-out"
      bgColor={colorMode == "light" ? "background.light" : "background.dark"}
      minH="100vh"
      id="home"
    >
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
