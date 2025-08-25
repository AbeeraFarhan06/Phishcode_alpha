import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps extends BoxProps {
  children: ReactNode;
  fullWidth?: boolean; // For components that need full viewport width
  noPadding?: boolean; // For components that need container width but no padding
  noVerticalPadding?: boolean; // For components like navbar that need horizontal padding but no vertical padding
}

const Container = ({
  children,
  fullWidth = false,
  noPadding = false,
  noVerticalPadding = false,
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
        px="2.5rem" // 40px equivalent
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
        px={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "3rem" }} // Responsive rem-based padding
        py="0" // No vertical padding
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
      px={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "3rem" }} // Responsive rem-based padding
      py={{ base: "1rem", md: "1.5rem", lg: "2rem" }} // Responsive vertical padding
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
