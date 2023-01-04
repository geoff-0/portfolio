import { Box, Fade, SlideFade, StyleConfig } from "@chakra-ui/react";

import useIntersectionObserver from "lib/hooks/useIntersectionObserver";

import { ReactNode, useRef, useEffect, CSSProperties, useState } from "react";
import MotionBox from "./motion/Box";

export default function RenderSectionWrapper(props: {
  title: string;
  styles?: any;
  children: ReactNode;
}) {
  const { title, children } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const calledOnce = useRef(false);

  useEffect(() => {
    console.log(`Render section ${title}`, { isVisible });

    if (calledOnce.current) {
      return;
    }

    if (isVisible === true) {
      console.log("I run only once if toggle is false.");

      calledOnce.current = true;
    }
  }, [isVisible, title]);

  return (
    <Box
      transform={isVisible ? "translateX(0)" : "translateX(-100%)"}
      opacity={isVisible ? 1 : 0}
      filter={isVisible ? "blur(0)" : "blur(5px)"}
      transition={calledOnce.current ? "0s" : "all 1s"}
      ref={ref}
    >
      {children}
    </Box>
  );
}
