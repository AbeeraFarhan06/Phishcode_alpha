import React from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import phishcode_logoo_1 from "../../assets/logo/phishcode_logoo_1.png";

interface PageLayoutTemplateProps {
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
  onNext: () => void;
  cancelButtonText?: string;
  nextButtonText?: string;
  showCancelButton?: boolean;
}

const PageLayoutTemplate: React.FC<PageLayoutTemplateProps> = ({
  title,
  children,
  onCancel,
  onNext,
  cancelButtonText = "Cancel",
  nextButtonText = "Next",
  showCancelButton = true,
}) => {
  // Responsive values
  const cardWidth = useBreakpointValue({
    base: "95vw", // mobile
    xs: "98vw", // very small mobile
    sm: "90vw", // small mobile
    md: "70vw", // tablet
    lg: "32rem", // desktop
  });

  const cardHeight = useBreakpointValue({
    base: "75vh",
    xs: "auto",
    sm: "auto",
    md: "70vh",
    lg: "32rem",
  });

  const cardMaxWidth = useBreakpointValue({
    base: "none",
    md: "34rem",
    lg: "32rem",
  });

  const cardMaxHeight = useBreakpointValue({
    base: "none",
    md: "34rem",
    lg: "32rem",
  });

  const cardPadding = useBreakpointValue({
    base: "2rem 1.5rem", // xs
    xs: "2rem 1.5rem",
    sm: "2.5rem", // sm
    md: "clamp(2rem, 5vw, 3rem)",
    lg: "clamp(2rem, 5vw, 3rem)",
  });

  const titleMarginBottom = useBreakpointValue({
    base: "0.25rem",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.5rem",
  });

  const contentMinHeight = useBreakpointValue({
    base: "10rem", // xs
    xs: "10rem",
    sm: "12rem", // sm
    md: "14rem",
    lg: "14rem",
  });

  const buttonPadding = useBreakpointValue({
    base: "0.6rem 1.2rem", // xs
    xs: "0.6rem 1.2rem",
    sm: "0.7rem 1.5rem", // sm
    md: "0.6rem 2rem",
    lg: "0.6rem 2rem",
  });

  const buttonWidth = useBreakpointValue({
    base: "5.5rem", // xs
    xs: "5.5rem",
    sm: "6rem", // sm
    md: "7rem",
    lg: "7rem",
  });

  const buttonFontSize = useBreakpointValue({
    base: "0.75rem", // xs
    xs: "0.75rem",
    sm: "0.8rem", // sm
    md: "clamp(0.8rem, 3vw, 0.875rem)",
    lg: "clamp(0.8rem, 3vw, 0.875rem)",
  });

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f5f5f5"
    >
      <Card
        w={cardWidth}
        h={cardHeight}
        minH="32rem"
        maxW={cardMaxWidth}
        maxH={cardMaxHeight}
        borderRadius="0"
        boxShadow="lg"
        border="none"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <CardBody
          p={cardPadding}
          display="flex"
          flexDirection="column"
          flex="1"
        >
          {/* Logo */}
          <Box textAlign="start" mb="4">
            <Image
              src={phishcode_logoo_1}
              alt="PhishCode Logo"
              h="2.50rem"
              w="auto"
            />
          </Box>

          {/* Title */}
          <Heading
            as="h2"
            textAlign="start"
            fontWeight="normal"
            color="#2d3748"
            fontSize="2rem"
            mb={titleMarginBottom}
            lineHeight="1.2"
          >
            {title}
          </Heading>

          {/* Content Area */}
          <Box
            flex="1"
            minH={contentMinHeight}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            {children}
          </Box>

          {/* Buttons */}
          <Flex justifyContent="flex-end" mt="auto" gap="0.5rem">
            {showCancelButton && (
              <Button
                onClick={onCancel}
                bg="#e2e8f0"
                color="#2d3748"
                border="none"
                borderRadius="0"
                fontWeight="400"
                fontSize={buttonFontSize}
                p={buttonPadding}
                minW="7rem"
                w={buttonWidth}
                transition="background-color 0.2s ease"
                _hover={{
                  bg: "#cbd5e0",
                  color: "#2d3748",
                }}
                _focus={{
                  bg: "#cbd5e0",
                  color: "#2d3748",
                  boxShadow: "none",
                }}
                _active={{
                  bg: "#cbd5e0",
                  color: "#2d3748",
                }}
              >
                {cancelButtonText}
              </Button>
            )}
            <Button
              onClick={onNext}
              bg="#2d3748"
              color="white"
              border="none"
              borderRadius="0"
              fontWeight="400"
              fontSize={buttonFontSize}
              p={buttonPadding}
              minW="7rem"
              w={buttonWidth}
              transition="background-color 0.2s ease"
              _hover={{
                bg: "#1a202c",
                color: "white",
              }}
            >
              {nextButtonText}
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default PageLayoutTemplate;
