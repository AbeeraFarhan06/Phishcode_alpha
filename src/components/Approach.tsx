// This component renders the approach section of the page.
// It includes a heading, a subheading, a button, and an image.

import React from "react";
import { Text, Button, VStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import approach_section from "../assets/png imgs/approach_section.png";

// Motion-enhanced versions of Chakra UI components.
const MotionVStack = motion(VStack);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

export default function Approach() {
  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const padding = useBreakpointValue({ base: 4, md: 8 });
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "36px" });
  const subHeadingFontSize = useBreakpointValue({ base: "md", md: "16px" });
  const imageMaxWidth = useBreakpointValue({ base: "100%", md: "1000px" });

  return (
    <VStack
      id="Approach"
      spacing={10}
      align="center"
      textAlign="center"
      p={padding}
      mt={12}
    >
      {/* Header Section */}
      <MotionVStack
        spacing={2}
        initial={{ opacity: 0, y: 40 }} // Initial animation state.
        whileInView={{ opacity: 1, y: 0 }} // Animate to this state when the component is in view.
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }} // The duration of the animation.
      >
        <MotionText
          fontSize="12px"
          textTransform="uppercase"
          color="gray.500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Approach
        </MotionText>

        <MotionText
          fontSize={headingFontSize}
          fontWeight="semibold"
          color="gray.900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A comprehensive security approach
        </MotionText>

        <MotionText
          fontSize={subHeadingFontSize}
          maxW="900px"
          color="gray.600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Providing your workforce with cybersecurity awareness and training is
          a key piece of your overall PHISHCODE security strategy.
        </MotionText>

        <MotionButton
          variant="outline"
          color="black"
          borderColor="black"
          borderRadius="3px"
          borderWidth="0.1rem"
          _hover={{ bg: "gray.100" }}
          mt={4}
          fontSize={{ base: "sm", md: "13px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3}}
        >
          More about diagram
        </MotionButton>
      </MotionVStack>

      {/* Image Section */}
      <MotionImage
        src={approach_section}
        alt="Approach diagram"
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
        maxW={imageMaxWidth}
        w="100%"
        h="auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </VStack>
  );
}
