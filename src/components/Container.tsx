import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps extends BoxProps {
  children: ReactNode;
  fullWidth?: boolean; // For components that need full viewport width
  noPadding?: boolean; // For components that need container width but no padding
  noVerticalPadding?: boolean; // For components like navbar that need horizontal padding but no vertical padding
  navbar1?: boolean; //Only for top navbar
  footer?: boolean; // For footer component with no bottom padding
}

const Container = ({
  children,
  fullWidth = false,
  noPadding = false,
  noVerticalPadding = false,
  navbar1 = false,
  footer = false,
  ...props
}: ContainerProps) => {
  if (fullWidth) {
    // For full-width sections like banners, backgrounds
    return (
      <Box width="100%" {...props}>
        {children}
      </Box>
    );
  }

  if (noPadding) {
    // For components that need container width but handle their own padding
    return (
      <Box
        maxWidth="1400px"
        width="100%"
        mx="auto"
        px="6rem" // 40px equivalent
        py="4rem" // 64px equivalent
        {...props}
      >
        {children}
      </Box>
    );
  }

  if (noVerticalPadding) {
    // For components like navbar that need horizontal padding but no vertical padding
    return (
      <Box
        maxWidth="1400px"
        width="100%"
        mx="auto"
        px={{ base: "2rem", md: "3rem", lg: "4rem", xl: "6rem" }} // Responsive rem-based padding
        py="0" // No vertical padding
        {...props}
      >
        {children}
      </Box>
    );
  }

  if (navbar1) {
    // For components like navbar that need horizontal padding but no vertical padding
    return (
      <Box
        maxWidth="1400px"
        width="100%"
        mx="auto"
        px={{ base: "1.5rem", md: "2.25rem", lg: "3rem", xl: "4.5rem" }} //responsive horizontal padding
        py={{ base: "0.5rem", md: "0.75rem", lg: "1rem", xl: "1.5rem" }} //responsive vertical padding
        {...props}
      >
        {children}
      </Box>
    );
  }

  if (footer) {
    // For footer component with no bottom padding
    return (
      <Box
        maxWidth="1400px"
        width="100%"
        mx="auto"
        px={{ base: "2rem", md: "3rem", lg: "4rem", xl: "6rem" }} // Responsive horizontal padding
        pt={{ base: "2rem", md: "3rem", lg: "4rem" }} // Top padding only
        pb="0" // No bottom padding
        {...props}
      >
        {children}
      </Box>
    );
  }

  // Standard container with consistent max-width and responsive layout
  return (
    <Box
      maxWidth="1400px"
      width="100%"
      mx="auto"
      px={{ base: "2rem", md: "3rem", lg: "4rem", xl: "6rem" }} // Responsive rem-based padding
      py={{ base: "2rem", md: "3rem", lg: "4rem" }} // Responsive vertical padding
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
