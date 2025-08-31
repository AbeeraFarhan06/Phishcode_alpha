// This component renders the impact section of the page.
// It includes a heading, a subheading, and a grid of stats.

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Container from "./Container";

// Motion-enhanced versions of Chakra UI components.
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

// The content for the stats grid.
const stats = [
  {
    value: "$164,000",
    description: "Saved with PHISHCODE Unified cybersecurity platform.",
  },
  {
    value: "70%",
    description: "Reduction in social engineering with SAT.",
  },
  {
    value: "$432,000",
    description: "Risk reduction over three years.",
  },
  {
    value: "$210,000",
    description: "Saved on email alert costs.",
  },
];

const Impact = () => {
  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const headingFontSize = useBreakpointValue({
    base: "1.5rem",
    md: "2.25rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1rem",
  });
  const gridSpacing = useBreakpointValue({ base: 8, md: 12 });

  return (
    <Box id="Impact" bg="#0f172a" color="white">
      <Container noPadding>
        <Box>
          {/* Label */}
          <MotionText
            fontSize="0.75rem"
            fontWeight="semibold"
            textTransform="uppercase"
            color="white"
            mb={4}
            initial={{ opacity: 0, y: 30 }} // Initial animation state.
            whileInView={{ opacity: 1, y: 0 }} // Animate to this state when the component is in view.
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} // The duration of the animation.
          >
            Impact
          </MotionText>
          {/* Heading + Subheading */}
          <MotionVStack
            align="start"
            spacing={4}
            mb={12}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading fontSize={headingFontSize} fontWeight="semibold">
              The Total Economical Impact of PHISHCODE Attack Simulation
            </Heading>
            <Text fontSize={textFontSize} color="gray.300" maxW="80rem">
              Explore the advantages of PHISHCODE in this commissioned study
              conducted by security researchers.
            </Text>
          </MotionVStack>
          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, md: 1, lg:1, xl:2  }} spacing={gridSpacing}>
            {stats.map((stat, idx) => (
              <MotionFlex
                key={idx}
                align="flex-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }} // staggered animation
              >
                {/* Vertical bar */}
                <Box
                  w="0.1875rem"
                  h="1.875rem"
                  bg="white"
                  mr={4}
                  borderRadius="full"
                />
                {/* Text */}
                <VStack align="start" spacing={1}>
                  <Heading
                    fontSize={{ base: "1.25rem", md: "1.5rem" }}
                    fontWeight="semibold"
                  >
                    {stat.value}
                  </Heading>
                  <Text
                    fontSize={{ base: "0.875rem", md: "0.875rem" }}
                    color="white"
                    fontWeight="semibold"
                    mt={4}
                  >
                    {stat.description}
                  </Text>
                </VStack>
              </MotionFlex>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Impact;
