// This component renders the risk section of the page.
// It includes a heading, a subheading, and a 3-column grid of features.

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Link,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import acces_icon_phishcode_1 from "../assets/icons/access_icon_phishcode_1.svg";
import improve from "../assets/icons/improve.svg";
import performance_icon_phishcode_1 from "../assets/icons/performance_icon_phishcode_1.svg";
import Container from "./Container";

// Motion-enhanced versions of Chakra UI components.
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// The content for the features grid.
const features = [
  {
    icon: acces_icon_phishcode_1,
    title: "Assess phishing risk",
    description:
      "Conduct safe attack simulations within your organization to assess security practices and evaluate employees' awareness of phishing threats.",
    linkText: "Explore your payloads >",
  },
  {
    icon: improve,
    title: "Improve user awareness",
    description:
      "Remediate risks and enhance user behavior with our comprehensive cybersecurity awareness training platform.",
    linkText: "Explore training >",
  },
  {
    icon: performance_icon_phishcode_1,
    title: "Assess performance",
    description:
      "The dashboard offers a clear overview of phishing risk assessments, user vulnerability, and the status of cybersecurity awareness training completion.",
    linkText: "View insights and reporting >",
  },
];

const Risk = () => {
  // useBreakpointValue is a Chakra UI hook that allows you to specify different values for different breakpoints.
  const headingFontSize = useBreakpointValue({
    base: "1.5rem",
    md: "2.25rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1rem",
  });
  const gridColumns = useBreakpointValue({ base: 1, md: 3 });
  const gridSpacing = useBreakpointValue({ base: 8, md: 12 });

  return (
    <Container noPadding>
      <Box id="Risk">
        {/* Heading + Subheading with animation */}
        <VStack spacing={3} textAlign="center" mb={14}>
          <MotionHeading
            fontSize={headingFontSize}
            fontWeight="semibold"
            initial={{ opacity: 0, y: 40 }} // Initial animation state.
            whileInView={{ opacity: 1, y: 0 }} // Animate to this state when the component is in view.
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} // The duration of the animation.
          >
            Phishing risk evaluation and reduction platform
          </MotionHeading>

          <MotionText
            fontSize={textFontSize}
            color="gray.600"
            maxW="50rem"
            mt={2}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Seamlessly implement a security awareness training program and
            assess user behavior improvements over time.
          </MotionText>
        </VStack>

        {/* 3 Column Features with animation */}
        <SimpleGrid columns={gridColumns} spacing={gridSpacing}>
          {features.map((feature, idx) => (
            <MotionVStack
              key={idx}
              align="start"
              spacing={4}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Icon */}
              <Image src={feature.icon} alt={feature.title} w={8} h={8} />

              {/* Title with left divider line */}
              <Flex align="center">
                <Box
                  w="0.125rem"
                  h="1.25rem"
                  bg="gray.800"
                  mr={3}
                  borderRadius="full"
                />
                <Heading
                  fontSize={{ base: "1rem", md: "1.125rem" }}
                  fontWeight="semibold"
                  color="gray.800"
                >
                  {feature.title}
                </Heading>
              </Flex>

              {/* Description */}
              <Text fontSize={{ base: "0.875rem", md: "0.875rem" }}>
                {feature.description}
              </Text>

              {/* Link */}
              <Link
                fontSize={{ base: "0.875rem", md: "0.875rem" }}
                fontWeight="semibold"
                color="gray.800"
                textDecoration="underline"
              >
                {feature.linkText}
              </Link>
            </MotionVStack>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Risk;
