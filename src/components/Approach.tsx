import React, { useState } from "react";
import {
  Text,
  Button,
  VStack,
  Image,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import approach_section from "../assets/png imgs/approach_section.png";
import Container from "./Container";

const MotionVStack = motion(VStack);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

export default function Approach() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const headingFontSize = useBreakpointValue({
    base: "1.5rem",
    md: "2.25rem",
  });
  const subHeadingFontSize = useBreakpointValue({
    base: "1rem",
    md: "1rem",
  });

  return (
    <Container noPadding>
      <VStack id="Approach" spacing={10} align="center" textAlign="center">
        {/* Header Section */}
        <MotionVStack
          spacing={2}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <MotionText
            fontSize="0.75rem"
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
            maxW="56.25rem"
            color="gray.600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Providing your workforce with cybersecurity awareness and training
            is a key piece of your overall PHISHCODE security strategy.
          </MotionText>

          <MotionButton
            variant="outline"
            color="black"
            borderColor="black"
            borderRadius="0.1875rem"
            borderWidth="0.1rem"
            _hover={{ bg: "gray.100" }}
            mt={4}
            fontSize={{ base: "0.875rem", md: "0.8125rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={onOpen}
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
          w="100%"
          h="auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Modal for translucent overlay */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent
            bg="white"
            borderRadius="0"
            p={{ base: 6, md: 10 }}
            maxW="5xl"
            w={{ base: "90%", md: "70%", lg: "46%" }} // responsive width
          >
            <ModalCloseButton />
            <ModalBody>
              <Flex
                align="center"
                justify="center"
                minH="150px" // ensures some vertical space
              >
                <Text
                  fontSize={{ base: "sm", md: "14px" }}
                  color="#0E1726"
                  textAlign="justify"
                  maxW="90%"
                  lineHeight="1.7"
                >
                  This image illustrates the PHISHCODE approach to anti-phishing
                  strategies. It highlights a cycle of three core steps:
                  assessing users' baseline phishing awareness, reducing risk
                  through targeted behavior training, and evaluating risk
                  mitigation across all attack vectors. The framework provides a
                  systematic method to measure, educate, and improve user
                  responses, ensuring comprehensive protection against phishing
                  threats in an organization.
                </Text>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
}
