import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Button,
  Divider,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Container from "../../components/Container";
import { Link as RouterLink } from "react-router-dom";

// Custom Print Icon component
const PrintIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8M18,3H6V7H18V3M8,19V15H16V19H8M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12Z"
    />
  </Icon>
);

const PrivacyStatementBody: React.FC = () => {
  return (
    <Box bg="white" minH="100vh">
      <Container>
        {/* Header Section */}
        <VStack
          spacing={{ base: "1rem", md: "1.5rem" }}
          align="center"
          mb={{ base: "2rem", md: "3rem" }}
        >
          <Heading
            as="h1"
            fontSize={{
              base: "1.8rem",
              sm: "2.2rem",
              md: "2.8rem",
              lg: "3.2rem",
            }}
            textAlign="center"
            color="gray.800"
            fontWeight="600"
          >
            PHISHCODE Privacy Statement
          </Heading>

          <VStack spacing="0.5rem" align="center">
            <Text fontSize={{ base: "0.8rem", md: "0.9rem" }} color="gray.600">
              Last Updated: September 2025
            </Text>
            <Link
              color="blue.600"
              fontSize={{ base: "0.8rem", md: "0.9rem" }}
              textDecoration="underline"
            >
              What's new?
            </Link>
          </VStack>

          <Box w="100%">
            <HStack
              spacing={{ base: "0.8rem", md: "1rem" }}
              justify="flex-end"
              flexWrap="wrap"
            >
              <Button
                leftIcon={<PrintIcon color="gray.600" />}
                variant="ghost"
                size={{ base: "xs", md: "sm" }}
                fontSize={{ base: "0.8rem", md: "0.9rem" }}
                color="blue.600"
                _hover={{ bg: "gray.50" }}
                fontWeight={400}
              >
                Print
              </Button>
              <Button
                rightIcon={<ChevronDownIcon color="gray.600" />}
                variant="ghost"
                size={{ base: "xs", md: "sm" }}
                fontSize={{ base: "0.8rem", md: "0.9rem" }}
                color="blue.600"
                _hover={{ bg: "gray.50" }}
                fontWeight={400}
              >
                Expand All
              </Button>
            </HStack>
          </Box>
        </VStack>

        {/* Main Content Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "18rem 1fr",
            xl: "20rem 1fr",
          }}
          gap={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
        >
          {/* Sidebar Navigation */}
          <GridItem>
            <Box
              bg="white"
              p={{ base: "1rem", md: "1.5rem" }}
              borderLeft="4px solid #d1d5db"
              pl={{ base: "1.5rem", md: "2rem" }}
              position={{ base: "static", lg: "static" }}
              top="1.25rem"
            >
              <Heading
                as="h3"
                fontSize={{ base: "1rem", md: "1.1rem" }}
                mb={{ base: "1rem", md: "1.25rem" }}
                color="gray.800"
                fontWeight={600}
              >
                Privacy Statement
              </Heading>

              <VStack
                align="stretch"
                spacing={{ base: "0.4rem", md: "0.5rem" }}
              >
                <Link
                  href="#key-definitions"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Key Definitions
                </Link>
                <Link
                  href="#information-we-collect"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Information We Collect
                </Link>
                <Link
                  href="#personal-info"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  How We Use Personal Information
                </Link>
                <Link
                  href="#collection-methods"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Collection Methods
                </Link>
                <Link
                  href="#sharing-info"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Sharing of Information
                </Link>
                <Link
                  href="#third-party-links"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Third-Party Links
                </Link>
                <Link
                  href="#data-retention"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Data Retention
                </Link>
                <Link
                  href="#children-privacy"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Children's Privacy
                </Link>
                <Link
                  href="#your-rights"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Your Rights
                </Link>
                <Link
                  href="#data-security"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Data Security
                </Link>
                <Link
                  href="#updates"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Updates to This Policy
                </Link>
              </VStack>

              <Divider
                my={{ base: "1rem", md: "1.25rem" }}
                borderRadius="full"
              />

              <Box>
                <Heading
                  as="h4"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  mb={{ base: "0.8rem", md: "1rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  Related Information:
                </Heading>
                <VStack
                  align="stretch"
                  spacing={{ base: "0.4rem", md: "0.5rem" }}
                >
                  <Link
                    as={RouterLink}
                    to="/terms-and-conditions"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Terms & Conditions ›
                  </Link>
                </VStack>
              </Box>
            </Box>
          </GridItem>

          {/* Main Content */}
          <GridItem>
            <VStack
              spacing={{ base: "2rem", md: "3rem", lg: "3.5rem" }}
              align="stretch"
            >
              {/* Introduction */}
              <Box>
                <Text
                  fontSize={{ base: "1rem", md: "1.1rem", lg: "1.125rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight="400"
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  PHISHCODE Technologies and its affiliated entities
                  (collectively,{" "}
                  <span style={{ fontWeight: 600 }}>
                    “PHISHCODE,” “we,” “our,” or “us”
                  </span>
                  ) are committed to protecting your privacy. This Privacy
                  Policy describes how we collect, use, share, and safeguard
                  Personal Information when you interact with our websites,
                  applications, and services (together, the{" "}
                  <span style={{ fontWeight: 600 }}>“Services”</span>). By using our Services, you agree to these terms and our{" "}
                  <Link
                    as={RouterLink}
                    to="/terms-and-conditions"
                    color="blue.600"
                    textDecoration="underline"
                  >
                    Terms & Conditions
                  </Link>
                  .
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  Our Services enable Clients to conduct and manage
                  cybersecurity awareness initiatives, including phishing
                  simulations, security training campaigns, and related
                  awareness programs. If certain practices differ for specific
                  Services, we will provide clear notice at the time information
                  is collected.
                </Text>
              </Box>

              {/* key Definitions Section */}
              <Box id="key-definitions">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  1. Key Definitions
                </Heading>

                <UnorderedList
                  spacing={{ base: "0.5rem", md: "0.6rem" }}
                  pl={{ base: "1rem", md: "1.25rem" }}
                  textAlign="justify"
                >
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight="600">
                      Affiliate:
                    </Text>{" "}
                    Any entity that directly or indirectly controls, is
                    controlled by, or is under common control with PHISHCODE.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight="600">
                      Client:
                    </Text>{" "}
                    Any individual or organization registered to use our
                    Services.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight="600">
                      Target:
                    </Text>{" "}
                    An individual engaged through a Client’s campaign, such as a
                    recipient of simulated phishing emails or assigned training.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight="600">
                      Campaign List:
                    </Text>{" "}
                    A list of Targets provided or managed by a Client within our
                    platform, along with related information (e.g., names, email
                    addresses).
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight="600">
                      Visitor:
                    </Text>{" "}
                    Anyone who interacts with PhishCode outside of being a
                    Client or Target, such as website visitors or event
                    participants.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight="600">
                      Personal Information:
                    </Text>{" "}
                    Data that identifies, relates to, or can reasonably identify
                    an individual, including but not limited to name, email
                    address, contact details, or job title.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight="600">
                      Control:
                    </Text>{" "}
                    Ownership or authority over an entity representing 50% or
                    more of the voting or equity interests.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box id="information-we-collect">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  2. Information We Collect
                </Heading>

                <VStack
                  spacing={{ base: "1.5rem", md: "2rem" }}
                  align="stretch"
                >
                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "1.1rem", md: "1.25rem" }}
                      mb={{ base: "0.8rem", md: "1rem" }}
                      color="gray.800"
                      fontWeight={600}
                    >
                      Information You Provide
                    </Heading>
                    <UnorderedList
                      spacing={{ base: "0.5rem", md: "0.6rem" }}
                      pl={{ base: "1rem", md: "1.25rem" }}
                    >
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Identification Data:
                        </Text>{" "}
                        Name, email address, billing details, phone number, and
                        similar identifiers.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Transaction Data:
                        </Text>{" "}
                        Payment information and billing records.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Employment Data:
                        </Text>{" "}
                        Business information such as role, department, or
                        organization.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Account Data:
                        </Text>{" "}
                        Credentials used to register and access our Services.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Communication Data:
                        </Text>{" "}
                        Correspondence with customer support or account
                        management teams.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Marketing Data:
                        </Text>{" "}
                        Contact details for campaigns or promotions.
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "1.1rem", md: "1.25rem" }}
                      mb={{ base: "0.8rem", md: "1rem" }}
                      color="gray.800"
                      fontWeight={600}
                    >
                      Information Collected Automatically
                    </Heading>
                    <UnorderedList
                      spacing={{ base: "0.5rem", md: "0.6rem" }}
                      pl={{ base: "1rem", md: "1.25rem" }}
                    >
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        textAlign="justify"
                      >
                        <Text as="span" fontWeight="600">
                          Device Data:
                        </Text>{" "}
                        Operating system, browser type, device identifiers, and
                        settings.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Usage Data:
                        </Text>{" "}
                        Session activity, access dates, clicked links, and
                        navigation details.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="600">
                          Performance Data:
                        </Text>{" "}
                        Delivery and engagement metrics from simulated
                        campaigns.
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "1.1rem", md: "1.25rem" }}
                      mb={{ base: "0.8rem", md: "1rem" }}
                      color="gray.800"
                      fontWeight={600}
                    >
                      Information from Third Parties
                    </Heading>
                    <UnorderedList
                      spacing={{ base: "0.5rem", md: "0.6rem" }}
                      pl={{ base: "1rem", md: "1.25rem" }}
                      textAlign="justify"
                    >
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        Data from analytics providers, integration partners, or
                        social networks.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        Information from publicly available databases or joint
                        marketing partners.
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "1.1rem", md: "1.25rem" }}
                      mb={{ base: "0.8rem", md: "1rem" }}
                      color="gray.800"
                      fontWeight={600}
                      textAlign="justify"
                    >
                      Aggregated Data
                    </Heading>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      Statistical or demographic insights derived from Personal
                      Information but not identifying any individual.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* How We Use Personal Information */}
              <Box id="personal-info">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  3. How We Use Personal Information
                </Heading>
                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  We process Personal Information to:
                </Text>
                <UnorderedList
                  spacing={{ base: "0.5rem", md: "0.6rem" }}
                  pl={{ base: "1rem", md: "1.25rem" }}
                >
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Deliver, administer, and improve our Services.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Communicate about accounts, campaigns, and system updates.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Provide billing, invoicing, and transaction support.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Detect, investigate, and mitigate security or technical
                    issues.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Support research, analytics, and product development.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Comply with legal obligations and enforce our{" "}
                    <Link
                      color="blue.600"
                      fontSize={{ base: "0.8rem", md: "0.9rem" }}
                      textDecoration="underline"
                      href="/terms-and-conditions"
                    >
                      Terms & Conditions.{" "}
                    </Link>
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Offer tailored recommendations, surveys, or promotions.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box id="collection-methods">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  4. Collection Methods
                </Heading>

                <UnorderedList
                  spacing={{ base: "0.5rem", md: "0.6rem" }}
                  pl={{ base: "1rem", md: "1.25rem" }}
                >
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Direct Interactions:
                    </Text>{" "}
                    Information submitted via our websites, applications, or
                    direct communications.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Third-Party Sources:
                    </Text>{" "}
                    Data from analytics tools, social media platforms, and
                    integration providers.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Automated Technologies:
                    </Text>{" "}
                    Cookies, log files, and tracking technologies.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Regulatory Bodies:
                    </Text>{" "}
                    To comply with legal or regulatory requirements.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Corporate Transactions:
                    </Text>{" "}
                    In the event of mergers, acquisitions, or restructuring.
                  </ListItem>
                </UnorderedList>
              </Box>

              {/* Sharing of Information */}
              <Box id="sharing-info">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  5. Sharing of Information
                </Heading>
                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  We may share information with:
                </Text>
                <UnorderedList
                  spacing={{ base: "0.5rem", md: "0.6rem" }}
                  pl={{ base: "1rem", md: "1.25rem" }}
                >
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Affiliates & Subsidiaries:
                    </Text>{" "}
                    For consistent service delivery.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Service Providers:
                    </Text>{" "}
                    Contractors supporting platform operations.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Business Partners:
                    </Text>{" "}
                    Where collaboration is required for integrated services.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Regulatory Bodies:
                    </Text>{" "}
                    To comply with legal or regulatory requirements.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    <Text as="span" fontWeight={600}>
                      Corporate Transactions:
                    </Text>{" "}
                    In the event of mergers, acquisitions, or restructuring.
                  </ListItem>
                </UnorderedList>
                <Text
                  mt={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  We may also share Aggregated Data for research, reporting, or
                  product improvement.{" "}
                  <Text as="span" fontWeight="600">
                    We do not sell Client Campaign Lists.
                  </Text>
                </Text>
              </Box>

              {/* Third-Party Links  */}
              <Box id="third-party-links">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  6. Third-Party Links
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  Our Services may contain links to third-party websites.
                  PHISHCODE is not responsible for their privacy practices, and
                  we encourage you to review their policies before sharing
                  information.
                </Text>
              </Box>

              {/* Data Retention */}
              <Box id="data-retention">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  7. Data Retention
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  We retain Personal Information only as long as necessary for
                  the purposes outlined in this Policy or as required by law.
                  Retention depends on factors such as data sensitivity,
                  regulatory requirements, and contractual obligations.
                </Text>
              </Box>

              {/* Children's Privacy */}
              <Box id="children-privacy">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  8. Children's Privacy
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  Our Services are not intended for individuals under 13 (or the
                  relevant local age of consent). We do not knowingly collect
                  data from children.
                </Text>
              </Box>

              {/* Your Rights */}
              <Box id="your-rights">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  9. Your Rights
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  Depending on your jurisdiction, you may have rights to access,
                  correct, delete, or restrict processing of your Personal
                  Information. Requests can be made through our contact details.
                </Text>
              </Box>

              {/* Data Security */}
              <Box id="data-security">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  10. Data Security
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  We implement administrative, technical, and physical
                  safeguards to protect Personal Information from unauthorized
                  access, loss, or misuse.
                </Text>
              </Box>

              {/* Updates to This Policy */}
              <Box id="updates">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  11. Updates to This Policy
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  PHISHCODE may update this Privacy Policy periodically. Any
                  material changes will be communicated by updating this page,
                  and continued use of our Services indicates acceptance of the
                  revised policy.
                </Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrivacyStatementBody;
