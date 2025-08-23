import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps extends BoxProps {
  children: ReactNode;
  fullWidth?: boolean; // For components that need full viewport width
  noPadding?: boolean; // For components that need container width but no padding
}

const Container = ({
  children,
  fullWidth = false,
  noPadding = false,
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
        maxWidth="1400px" // Consistent max-width across all components
        width="100%"
        mx="auto" // Center the container
        {...props}
      >
        {children}
      </Box>
    );
  }

  // Standard container with consistent max-width and responsive layout
  return (
    <Box
      maxWidth="1400px" // Consistent max-width across all components
      width="100%"
      mx="auto" // Center the container
    //   px={{ base: "4", md: "6", lg: "8", xl: "12" }} // Responsive horizontal padding
    //   py={{ base: "4", md: "6", lg: "8" }} // Responsive vertical padding
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
