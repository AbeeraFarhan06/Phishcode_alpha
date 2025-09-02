import React from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaLinkedinIn,
} from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { ChevronDownIcon } from "@chakra-ui/icons";
import phishcode_logoo_1 from "../../assets/logo/phishcode_logoo_1.png";
import Container from "../../components/Container";
import { useTranslation } from "react-i18next";

const socialIcons = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: TbBrandTwitter, label: "Twitter", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaPhone, label: "Phone", href: "#" },
];

export default function Footer() {
  const { t, i18n } = useTranslation();

  const footerSections = [
    {
      title: t("footer.products.title"),
      links: Object.values(t("footer.products.links", { returnObjects: true })),
    },
    {
      title: t("footer.ourAI.title"),
      links: Object.values(t("footer.ourAI.links", { returnObjects: true })),
    },
    {
      title: t("footer.company.title"),
      links: Object.values(t("footer.company.links", { returnObjects: true })),
    },
    {
      title: t("footer.resources.title"),
      links: Object.values(
        t("footer.resources.links", { returnObjects: true })
      ),
    },
    {
      title: t("footer.legal.title"),
      links: Object.values(t("footer.legal.links", { returnObjects: true })),
    },
  ];

  return (
    <Box bg="#f1f2f379" borderTop="3px solid #8c8c8d79" py={14} width="100%">
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap={{ base: "2rem", md: "2.5rem" }}
          mb={{ base: "2rem", md: "2rem" }}
        >
          <VStack align="flex-start" spacing={{ base: "1.5rem", md: "1.5rem" }}>
            <Box w={{ base: "8rem", md: "8.75rem" }} textAlign="left">
              <Image src={phishcode_logoo_1} alt="PhishCode Logo" />
              <Text
                fontSize="0.75rem"
                color="#0E1726"
                fontWeight="medium"
                mt="0"
              >
                {t("tagline")}
              </Text>
            </Box>
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
            <Menu>
              <MenuButton
                as={Text}
                variant="ghost"
                color="#0E1726"
                fontSize="0.875rem"
                fontWeight="semibold"
              >
                {t("language")} <ChevronDownIcon />
              </MenuButton>
              <MenuList bgColor="white">
                <MenuItem
                  bgColor="white"
                  color="#0E1726"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    document.documentElement.lang = "en";
                  }}
                >
                  English
                </MenuItem>
                <MenuItem
                  bgColor="white"
                  color="#0E1726"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    document.documentElement.lang = "ar";
                  }}
                >
                  العربية
                </MenuItem>
                <MenuItem
                  bgColor="white"
                  color="#0E1726"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    i18n.changeLanguage("fr");
                    document.documentElement.lang = "fr";
                  }}
                >
                  Français
                </MenuItem>
                <MenuItem
                  bgColor="white"
                  color="#0E1726"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    i18n.changeLanguage("ms");
                    document.documentElement.lang = "ms";
                  }}
                >
                  Melayu
                </MenuItem>
                <MenuItem
                  bgColor="white"
                  color="#0E1726"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => {
                    i18n.changeLanguage("hi");
                    document.documentElement.lang = "hi";
                  }}
                >
                  हिन्दी
                </MenuItem>
              </MenuList>
            </Menu>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: "2rem", md: "2.5rem" }}
            flex="1"
            minChildWidth={{ base: "100%", md: "11.25rem" }}
            ml={{ base: "0", md: "6.25rem" }}
          >
            <VStack align="flex-start" spacing="0.5rem">
              <Text fontWeight="semibold">{footerSections[0].title}</Text>
              <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                {footerSections[0].links.map((link, j) => (
                  <Link key={j}>{link}</Link>
                ))}
              </VStack>
            </VStack>

            <VStack align="flex-start" spacing="2rem">
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[1].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[1].links.map((link, j) => (
                    <Link key={j}>{link}</Link>
                  ))}
                </VStack>
              </Box>
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[2].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[2].links.map((link, j) => (
                    <Link key={j}>{link}</Link>
                  ))}
                </VStack>
              </Box>
            </VStack>

            <VStack align="flex-start" spacing="2rem">
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[3].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[3].links.map((link, j) => (
                    <Link key={j}>{link}</Link>
                  ))}
                </VStack>
              </Box>
              <Box>
                <Text fontWeight="semibold" mb="0.5rem">
                  {footerSections[4].title}
                </Text>
                <VStack align="flex-start" spacing="0.5rem" color="#A4A4A4">
                  {footerSections[4].links.map((link, j) => (
                    <Link key={j}>{link}</Link>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
