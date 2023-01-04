import { Box, useColorMode } from "@chakra-ui/react";
import MotionBox from "lib/components/motion/Box";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box
        margin="0 auto"
        transition="0.5s ease-out"
        bgColor={colorMode == "light" ? "background.light" : "background.dark"}
        minH="100vh"
        id="home"
        scrollBehavior="smooth"
      >
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </MotionBox>
  );
};

export default Layout;
