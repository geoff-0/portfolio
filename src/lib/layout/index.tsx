import { Box, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      margin="0 auto"
      transition="0.5s ease-out"
      bgColor={"background.dark"}
      minH="100vh"
    >
      <Header />
      <Box as="main" py="2rem">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
