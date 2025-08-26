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
            borderRadius="0" // removes rounded corners
            p={10}
            maxW="5xl" // wider modal width
            w="46%" // custom width
            h="32%" // modal height
          >
            <ModalCloseButton />
            <ModalBody>
              <Flex
                align="center" // vertical centering
                justify="center" // horizontal centering
                h="100%" // take full modal body height
              >
                <Text
                  fontSize="14px"
                  color="#0E1726"
                  textAlign="justify"
                  maxW="90%" // prevents text from stretching too wide
                >
                  This image depicts the overall PHISHCODE security strategy and
                  includes the following pillars with icons: secure posture,
                  prevention, detection, investigation and hunting, response and
                  remediation, and highlighted awareness and training.
                </Text>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
}
