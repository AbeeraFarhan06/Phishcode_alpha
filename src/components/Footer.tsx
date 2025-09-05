import {
  Box,
  Flex,
  VStack,
  Text,
  Link,
  IconButton,
  SimpleGrid,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaLinkedinIn,
} from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { ChevronDownIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../assets/logo/phishcode_logoo_1.png";
import Container from "./Container";

// Social Icons
const socialIcons = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: TbBrandTwitter, label: "Twitter", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaPhone, label: "Phone", href: "#" },
];

// Footer sections with dynamic paths
const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Overview", path: "#Overview" },
      { label: "Impact", path: "#Impact" },
      { label: "Approach", path: "#Approach" },
      { label: "Resources", path: "#Resources" },
      { label: "Next Step", path: "#Next-steps" },
      { label: "Watch Demo", path: "#Next-steps" },
      { label: "Sign In", path: "/signin" },
    ],
  },
  {
    title: "Our AI",
    links: [
      { label: "Cyber AI", path: "" },
      { label: "AI Research Centre", path: "" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why PHISHCODE?", path: "/security" },
      { label: "Contact Us", path: "/contact-us" },
      { label: "Free Trial", path: "/signup/step1" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "All Resources", path: "#Resources" },
      { label: "Blog", path: "#Resources" },
      { label: "Demo", path: "#Resources" },
      { label: "Infographics", path: "#Resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "" },
      { label: "Cookie Policy", path: "" },
    ],
  },
];

export default function Footer() {
  return (
    <Box bg="#f1f2f379" borderTop="3px solid #8c8c8d79" width="100%">
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap={{ base: "2rem", md: "2.5rem" }}
          // mb={{ base: "2rem", md: "2rem" }}
        >
          {/* Left Section: Logo, Social Icons, Language Selector */}
          <VStack align="flex-start" spacing={{ base: "1.5rem", md: "1.5rem" }}>
            <Box w={{ base: "8rem", md: "8.75rem" }} textAlign="left">
              <Image src={phishcode_logoo_1} alt="PhishCode Logo" />
              <Text
                fontSize="0.75rem"
                color="#0E1726"
                fontWeight="medium"
                mt="0"
              >
                Remediates human errors
              </Text>
            </Box>

            {/* Social Icons */}
            <SimpleGrid
              columns={{ base: 2, md: 3 }}
              spacing={{ base: "1rem", md: "1rem" }}
              mb="0.75rem"
            >
              {socialIcons.map(({ icon: Icon, label, href }, i) => (
                <IconButton
                  key={i}
                  as="a"
                  href={href}
                  aria-label={label}
                  color="#0E1726"
                  icon={<Icon />}
                  rounded="full"
                  border="0.125rem solid"
                  borderColor="#0E1726"
                  variant="ghost"
                  boxSize="3rem"
                />
              ))}
            </SimpleGrid>

            {/* Language Selector */}
            {/* <Menu>
              <MenuButton
                as={Text}
                variant="ghost"
                color="#0E1726"
                fontSize="0.875rem"
                fontWeight="semibold"
                cursor="pointer"
              >
                Language <ChevronDownIcon />
              </MenuButton>
              <MenuList bgColor="white">
                {["English", "Arabic", "French", "Malay", "Hindi"].map((lang, i) => (
                  <MenuItem
                    key={i}
                    bgColor="white"
                    color="#0E1726"
                    _hover={{ bg: "gray.100" }}
                  >
                    {lang}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu> */}
          </VStack>

          {/* Right Section: Footer Links */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: "2rem", md: "2.5rem" }}
            flex="1"
            minChildWidth={{ base: "100%", md: "11.25rem" }}
            ml={{ base: "0", md: "6.25rem" }}
          >
            {/* Column 1: Products */}
            <VStack align="flex-start" spacing="0.5rem">
              <Text fontWeight="semibold">{footerSections[0].title}</Text>
              <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                {footerSections[0].links.map(({ label, path }, j) => (
                  <Link
                    as={path && !path.startsWith("#") ? RouterLink : "button"}
                    {...(path && !path.startsWith("#") ? { to: path } : {})}
                    key={j}
                    onClick={(e) => {
                      if (!path || path.startsWith("#")) {
                        e.preventDefault();
                        const targetId = label.replace(/\s+/g, "-"); // Same as NavBar2
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      textAlign: "left",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* Column 2: Our AI + Company */}
            <VStack align="flex-start" spacing="2rem">
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[1].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[1].links.map(({ label, path }, j) => (
                    <Link
                      as={path && !path.startsWith("#") ? RouterLink : "button"}
                      {...(path && !path.startsWith("#") ? { to: path } : {})}
                      key={j}
                      onClick={(e) => {
                        if (!path || path.startsWith("#")) {
                          e.preventDefault();
                          const targetId = label.replace(/\s+/g, "-"); // Same as NavBar2
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </VStack>
              </Box>
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[2].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[2].links.map(({ label, path }, j) => (
                    <Link
                      as={path && !path.startsWith("#") ? RouterLink : "button"}
                      {...(path && !path.startsWith("#") ? { to: path } : {})}
                      key={j}
                      onClick={(e) => {
                        if (!path || path.startsWith("#")) {
                          e.preventDefault();
                          const targetId = label.replace(/\s+/g, "-"); // Same as NavBar2
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </VStack>
              </Box>
            </VStack>

            {/* Column 3: Resources + Legal */}
            <VStack align="flex-start" spacing="2rem">
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[3].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[3].links.map(({ label, path }, j) => (
                    <Link
                      as={path && !path.startsWith("#") ? RouterLink : "button"}
                      {...(path && !path.startsWith("#") ? { to: path } : {})}
                      key={j}
                      onClick={(e) => {
                        if (!path || path.startsWith("#")) {
                          e.preventDefault();
                          const targetId = path.replace("#", "");
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </VStack>
              </Box>
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[4].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[4].links.map(({ label, path }, j) => (
                    <Link
                      as={path && !path.startsWith("#") ? RouterLink : "button"}
                      {...(path && !path.startsWith("#") ? { to: path } : {})}
                      key={j}
                      onClick={(e) => {
                        if (!path || path.startsWith("#")) {
                          e.preventDefault();
                          const targetId = label.replace(/\s+/g, "-"); // Same as NavBar2
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </Flex>

        {/* Copyright Section */}
        <Box
          borderTop="1px solid #E2E8F0"
          pt={{ base: "1rem", md: "1.25rem" }}
          mt={{ base: "1rem", md: "1.5rem" }}
        >
          <Text fontSize="0.875rem" color="#A4A4A4" textAlign="left">
            Copyright © 2024-2025 PHISHCODE. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
