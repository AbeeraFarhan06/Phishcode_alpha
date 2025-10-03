// Navbar.tsx
import {
  Box,
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  Textarea,
  Checkbox,
  FormErrorMessage,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../../assets/logo/phishcode_logoo_1.png";
import icon_feedback_01_1 from "../../assets/icons/icon_feedback_01_1.png";
import pipeline from "../../assets/icons/pipeline.png";
import Container from "../../components/Container";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useMemo, useState } from "react";

type FeedbackKind = "issue" | "idea" | "complaint";

const Navbar = () => {
  const handleLogoClick = () => {
    navigate("/");
  };

  const navigate = useNavigate();

  // Drawer disclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Feedback chooser (first popup)
  const {
    isOpen: isFeedbackOpen,
    onOpen: onFeedbackOpen,
    onClose: onFeedbackClose,
  } = useDisclosure();

  // Reusable detail modal (second popup)
  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onClose: onDetailClose,
  } = useDisclosure();

  // Which flow user picked
  const [feedbackKind, setFeedbackKind] = useState<FeedbackKind>("issue");

  // ====== Local state for the second popup ======
  const [feedbackText, setFeedbackText] = useState("");
  const [includeEmail, setIncludeEmail] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid = useMemo(
    () => (!includeEmail ? true : emailRegex.test(email)),
    [includeEmail, email]
  );

  const disableSend = useMemo(
    () =>
      feedbackText.trim().length === 0 ||
      (includeEmail && (!email || !isEmailValid)),
    [feedbackText, includeEmail, email, isEmailValid]
  );
  // ===============================================

  const heading: string =
    feedbackKind === "issue"
      ? "Tell us about your issue"
      : feedbackKind === "idea"
      ? "Tell us about your idea"
      : "Tell us the complaint";

  const openDetail = (kind: FeedbackKind) => {
    setFeedbackKind(kind);
    onFeedbackClose();
    onDetailOpen();
  };

  return (
    <Box position="sticky" zIndex={1000} bg="white">
      <Container navbar1>
        <Flex direction="column">
          {/* Desktop version */}
          <Flex
            h={2}
            alignItems="center"
            justifyContent="space-between"
            display={{ base: "none", xl: "flex" }}
          >
            <HStack spacing={5} align="center">
              <Image
                src={phishcode_logoo_1}
                h="2.5rem"
                w="auto"
                cursor="pointer"
                onClick={handleLogoClick}
              />
              <Image src={pipeline} />
              <Text
                fontSize="14px"
                mt={4}
                cursor="pointer"
                _hover={{ textDecoration: "underline", color: "#243B65" }}
              >
                Why PHISHCODE?
              </Text>
            </HStack>

            <HStack spacing="10px" align="center">
              {/* Feedback Icon */}
              <Text
                cursor="pointer"
                fontSize="11px"
                mt={4}
                onClick={onFeedbackOpen}
              >
                <Image src={icon_feedback_01_1} h="20px" w="30px" />
              </Text>

              <Button
                bg="#0E1726"
                color="white"
                aria-label="Try for Free"
                size="sm"
                fontSize="12px"
                borderRadius="3px"
                fontWeight="normal"
                w="94px"
                h="31px"
                _hover={{ bg: "#243B65" }}
                onClick={() => navigate("/signup/step1")}
              >
                Try for free
              </Button>

              <Button
                variant="outline"
                borderColor="black"
                color="black"
                aria-label="Sign In"
                size="xs"
                w="54px"
                h="31px"
                fontSize="12px"
                fontWeight="normal"
                borderRadius="3px"
                _hover={{ bg: "gray.200" }}
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Button>
            </HStack>
          </Flex>

          {/* Mobile navbar */}
          <Box w="100%" display={{ base: "block", xl: "none" }}>
            <Flex justify="space-between" align="center" position="relative">
              {/* Hamburger menu */}
              <IconButton
                aria-label="Open Menu"
                icon={<HamburgerIcon w={4} h={4} color="#0E1726" />}
                variant="ghost"
                onClick={onOpen}
              />

              {/* Center logo */}
              <Box position="absolute" left="50%" transform="translateX(-50%)">
                <Image
                  src={phishcode_logoo_1}
                  h="2.5rem"
                  w="auto"
                  cursor="pointer"
                  onClick={handleLogoClick}
                />
              </Box>

              {/* Feedback Icon */}
              <Text
                cursor="pointer"
                fontSize="11px"
                mt={4}
                onClick={onFeedbackOpen}
              >
                <Image src={icon_feedback_01_1} h="20px" w="30px" />
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>

      {/* Drawer (mobile) */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton />
          <DrawerHeader bgColor="white">
            <HStack>
              <Image
                src={phishcode_logoo_1}
                h="6"
                cursor="pointer"
                onClick={handleLogoClick}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              {/* Sign in */}
              <Button
                variant="outline"
                w="full"
                borderColor="#0E1726"
                color="#0E1726"
                bg="white"
                _hover={{ bg: "#243B65", color: "white" }}
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Button>

              <Button
                bgColor="#0E1726"
                fontWeight="normal"
                w="full"
                _hover={{ bg: "#243B65" }}
                onClick={() => navigate("/signup/step1")}
                color="white"
              >
                Try for Free
              </Button>

              <Box textAlign="left">
                <RouterLink to="/about-us">
                  <Text
                    fontSize="14px"
                    mt={3}
                    cursor="pointer"
                    _hover={{ textDecoration: "underline", color: "#243B65" }}
                  >
                    Why PHISHCODE?
                  </Text>
                </RouterLink>
                {/* Feedback Icon */}
                <Text cursor="pointer" fontSize="14px" onClick={onFeedbackOpen}>
                  Feedback
                </Text>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Feedback Modal (Step 1) */}
      <Modal isOpen={isFeedbackOpen} onClose={onFeedbackClose} isCentered>
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent
          bg="white"
          color="black"
          borderRadius="md"
          boxShadow="xl"
          w={{ base: "90%", sm: "400px" }}
        >
          <ModalHeader
            fontSize="18px"
            fontWeight="semibold"
            px={6}
            pt={6}
            pb={2}
            color="black"
          >
            What kind of feedback do you have for PHISHCODE?
          </ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody px={6} pb={6} pt={2}>
            <VStack spacing={3} align="stretch">
              <Button
                fontSize="15px"
                fontWeight="normal"
                color="white"
                bgColor="#0E1726"
                _hover={{ bg: "#243B65" }}
                onClick={() => openDetail("issue")}
              >
                Report an issue
              </Button>
              <Button
                fontSize="15px"
                fontWeight="normal"
                color="white"
                bgColor="#0E1726"
                _hover={{ bg: "#243B65" }}
                onClick={() => openDetail("idea")}
              >
                Share an idea
              </Button>
              <Button
                fontSize="15px"
                fontWeight="normal"
                color="white"
                bgColor="#0E1726"
                _hover={{ bg: "#243B65" }}
                onClick={() => openDetail("complaint")}
              >
                Give a complaint
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Feedback Modal (Step 2) */}
      <Modal isOpen={isDetailOpen} onClose={onDetailClose} isCentered>
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent
          bg="white"
          color="gray.900"
          borderRadius="md"
          boxShadow="xl"
          w={{ base: "90%", md: "70%", lg: "46%" }} // responsive width
        >
          <ModalHeader
            fontSize="20px"
            fontWeight="semibold"
            px={6}
            pt={6}
            pb={2}
          >
            {heading}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px={6} pb={4} pt={2}>
            <VStack spacing={4} align="stretch">
              <Box border="1px solid #0E1726" borderRadius="6px">
                <Textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Enter feedback here..."
                />
              </Box>
              <Checkbox
                isChecked={includeEmail}
                defaultChecked
                onChange={(e) => setIncludeEmail(e.target.checked)}
              >
                Include email to be contacted about your feedback
              </Checkbox>

              {includeEmail && (
                <FormControl isInvalid={!!email && !isEmailValid}>
                  <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    borderColor="#0E1726"
                    _focus={{
                      borderColor: "#0E1726",
                      boxShadow: "0 0 0 1px #0E1726",
                    }}
                  />
                  {!!email && !isEmailValid && (
                    <FormErrorMessage>
                      Please enter a valid email
                    </FormErrorMessage>
                  )}
                </FormControl>
              )}

              <Link fontSize="sm" color="blue.600" href="#">
                Privacy statement
              </Link>
            </VStack>
          </ModalBody>
          <Flex justify="flex-end" gap={2} px={6} pb={6}>
            {/* Go Back Button */}
            <Button
              bg="#0E1726"
              color="white"
              w="85px"
              _hover={{ bg: "blue.700" }}
              onClick={() => {
                onDetailClose();
                onFeedbackOpen();
              }}
            >
              Go back
            </Button>

            {/* Send Button */}
            <Button
              w="85px"
              isDisabled={disableSend}
              bg={disableSend ? "#e5e5e5" : "#0E1726"} // grey when disabled
              color={disableSend ? "#9ca3af" : "white"}
              _hover={disableSend ? {} : { bg: "blue.700" }}
              onClick={() => {
                console.log("Feedback submitted:", feedbackText, email);
              }}
            >
              Send
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
