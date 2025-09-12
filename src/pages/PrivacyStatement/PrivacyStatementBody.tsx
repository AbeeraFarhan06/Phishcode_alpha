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
                PhishCode Privacy Statement
              </Heading>

              <VStack
                align="stretch"
                spacing={{ base: "0.4rem", md: "0.5rem" }}
              >
                <Link
                  href="#personal-data-collect"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Personal data we collect
                </Link>
                <Link
                  href="#how-we-use"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  How we use personal data
                </Link>
                <Link
                  href="#sharing-info"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Sharing of information
                </Link>
                <Link
                  href="#access-control"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  How to access and control your personal data
                </Link>
                <Link
                  href="#cookies"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Cookies and similar technologies
                </Link>
                <Link
                  href="#data-security"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Data security
                </Link>
                <Link
                  href="#phishcode-account"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  PhishCode account
                </Link>
                <Link
                  href="#data-retention"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Data retention
                </Link>
                <Link
                  href="#children-privacy"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Children's privacy
                </Link>
                <Link
                  href="#your-rights"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Your rights
                </Link>
                <Link
                  href="#updates"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Updates to this policy
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
                  Service-specific details:
                </Heading>
                <VStack
                  align="stretch"
                  spacing={{ base: "0.4rem", md: "0.5rem" }}
                >
                  <Link
                    href="#cybersecurity-training"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Cybersecurity Training Platforms ›
                  </Link>
                  <Link
                    href="#phishing-simulation"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Phishing Simulation Services ›
                  </Link>
                  <Link
                    href="#awareness-campaigns"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Security Awareness Campaigns ›
                  </Link>
                  <Link
                    href="#client-portal"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Client Management Portal ›
                  </Link>
                  <Link
                    href="#reporting-analytics"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Reporting and Analytics ›
                  </Link>
                  <Link
                    href="#enterprise-solutions"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Enterprise Solutions ›
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
                >
                  Your privacy is important to us. This privacy statement
                  explains the personal data PhishCode processes, how PhishCode
                  processes it, and for what purposes.
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  PhishCode offers a wide range of cybersecurity products,
                  including phishing simulation platforms used to help
                  organizations worldwide, security awareness training that
                  employees use at work, and services designed to create and
                  host cybersecurity awareness campaigns. References to
                  PhishCode products in this statement include PhishCode
                  services, websites, apps, software, servers, and devices.
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  Please read the service-specific details in this privacy
                  statement, which provide additional relevant information. This
                  statement applies to the interactions PhishCode has with you
                  and the PhishCode products listed below, as well as other
                  PhishCode products that display this statement.
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  Young people may prefer starting with the{" "}
                  <Link
                    href="#privacy-young-people"
                    color="blue.600"
                    borderBottom="1.5px solid"
                    borderBottomColor="blue.600"
                    textDecoration="none"
                    _hover={{
                      color: "blue.700",
                      borderBottomColor: "blue.700",
                    }}
                  >
                    Privacy for young people
                  </Link>{" "}
                  page. That page highlights information that may be helpful for
                  young people.
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  For individuals in the United States, please refer to our{" "}
                  <Link
                    href="#us-data-privacy"
                    color="blue.600"
                    borderBottom="1.5px solid"
                    borderBottomColor="blue.600"
                    textDecoration="none"
                    _hover={{
                      color: "blue.700",
                      borderBottomColor: "blue.700",
                    }}
                  >
                    U.S. State Data Privacy Notice
                  </Link>{" "}
                  and the{" "}
                  <Link
                    href="#consumer-health"
                    color="blue.600"
                    borderBottom="1.5px solid"
                    borderBottomColor="blue.600"
                    textDecoration="none"
                    _hover={{
                      color: "blue.700",
                      borderBottomColor: "blue.700",
                    }}
                  >
                    Consumer Health Data Privacy Policy
                  </Link>{" "}
                  for additional information about the processing of your
                  personal data, and your rights under applicable U.S. state
                  data privacy laws.
                </Text>
              </Box>

              {/* Personal Data We Collect Section */}
              <Box id="personal-data-collect">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  Personal data we collect
                </Heading>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  PhishCode collects data from you, through our interactions
                  with you and through our products. You provide some of this
                  data directly, and we get some of it by collecting data about
                  your interactions, use, and experiences with our products. The
                  data we collect depends on the context of your interactions
                  with PhishCode and the choices you make, including your
                  privacy settings and the products and features you use.
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  If you represent an organization, such as a business or
                  school, that utilizes Enterprise and Developer Products from
                  PhishCode, please see the{" "}
                  <Link
                    href="#enterprise-products"
                    color="blue.600"
                    borderBottom="1.5px solid"
                    borderBottomColor="blue.600"
                  >
                    Enterprise and developer products
                  </Link>{" "}
                  section of this privacy statement to learn how we process your
                  data. If you are an end user of a PhishCode product or a
                  PhishCode account provided by your organization, please see
                  the{" "}
                  <Link
                    href="#organization-products"
                    color="blue.600"
                    borderBottom="1.5px solid"
                    borderBottomColor="blue.600"
                  >
                    Products provided by your organization
                  </Link>
                  and the{" "}
                  <Link
                    href="#phishcode-account"
                    color="blue.600"
                    borderBottom="1.5px solid"
                    borderBottomColor="blue.600"
                  >
                    PhishCode account
                  </Link>{" "}
                  sections for more information.
                </Text>

                <Text
                  mb={{ base: "1.5rem", md: "2rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  You have choices when it comes to the technology you use and
                  the data you share. When we ask you to provide personal data,
                  you can decline. Many of our products require some personal
                  data to provide you with a service. If you choose not to
                  provide data required to provide you with a product or
                  feature, you cannot use that product or feature.
                </Text>

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
                        <Text as="span" fontWeight="bold">
                          Identification Data:
                        </Text>{" "}
                        Name, email address, billing details, phone number, and
                        similar identifiers.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="bold">
                          Transaction Data:
                        </Text>{" "}
                        Payment information and billing records.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="bold">
                          Employment Data:
                        </Text>{" "}
                        Business information such as role, department, or
                        organization.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="bold">
                          Account Data:
                        </Text>{" "}
                        Credentials used to register and access our Services.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="bold">
                          Communication Data:
                        </Text>{" "}
                        Correspondence with customer support or account
                        management teams.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="bold">
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
                      >
                        <Text as="span" fontWeight="bold">
                          Device Data:
                        </Text>{" "}
                        Operating system, browser type, device identifiers, and
                        settings.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="bold">
                          Usage Data:
                        </Text>{" "}
                        Session activity, access dates, clicked links, and
                        navigation details.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        <Text as="span" fontWeight="bold">
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
                    >
                      Aggregated Data
                    </Heading>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                    >
                      Statistical or demographic insights derived from Personal
                      Information but not identifying any individual.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* How We Use Personal Information */}
              <Box id="how-we-use">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  How We Use Personal Information
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
                    Comply with legal obligations and enforce our Terms &
                    Conditions.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Offer tailored recommendations, surveys, or promotions.
                  </ListItem>
                </UnorderedList>
              </Box>

              {/* Key Definitions */}
              <Box id="key-definitions">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  Key Definitions
                </Heading>
                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={{ base: "1rem", md: "1.25rem" }}
                >
                  <GridItem>
                    <Box
                      p={{ base: "1rem", md: "1.25rem" }}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="0.5rem"
                    >
                      <Heading
                        as="h4"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        mb="0.5rem"
                        color="gray.800"
                        fontWeight={600}
                      >
                        Affiliate:
                      </Heading>
                      <Text
                        fontSize={{ base: "0.8rem", md: "0.9rem" }}
                        color="gray.800"
                        lineHeight="1.5"
                      >
                        Any entity that directly or indirectly controls, is
                        controlled by, or is under common control with
                        PhishCode.
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Box
                      p={{ base: "1rem", md: "1.25rem" }}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="0.5rem"
                    >
                      <Heading
                        as="h4"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        mb="0.5rem"
                        color="gray.800"
                        fontWeight={600}
                      >
                        Client:
                      </Heading>
                      <Text
                        fontSize={{ base: "0.8rem", md: "0.9rem" }}
                        color="gray.800"
                        lineHeight="1.5"
                      >
                        Any individual or organization registered to use our
                        Services.
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Box
                      p={{ base: "1rem", md: "1.25rem" }}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="0.5rem"
                    >
                      <Heading
                        as="h4"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        mb="0.5rem"
                        color="gray.800"
                        fontWeight={600}
                      >
                        Target:
                      </Heading>
                      <Text
                        fontSize={{ base: "0.8rem", md: "0.9rem" }}
                        color="gray.800"
                        lineHeight="1.5"
                      >
                        An individual engaged through a Client's campaign, such
                        as a recipient of simulated phishing emails or assigned
                        training.
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Box
                      p={{ base: "1rem", md: "1.25rem" }}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="0.5rem"
                    >
                      <Heading
                        as="h4"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        mb="0.5rem"
                        color="gray.800"
                        fontWeight={600}
                      >
                        Campaign List:
                      </Heading>
                      <Text
                        fontSize={{ base: "0.8rem", md: "0.9rem" }}
                        color="gray.800"
                        lineHeight="1.5"
                      >
                        A list of Targets provided or managed by a Client within
                        our platform, along with related information.
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Box
                      p={{ base: "1rem", md: "1.25rem" }}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="0.5rem"
                    >
                      <Heading
                        as="h4"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        mb="0.5rem"
                        color="gray.800"
                        fontWeight={600}
                      >
                        Visitor:
                      </Heading>
                      <Text
                        fontSize={{ base: "0.8rem", md: "0.9rem" }}
                        color="gray.800"
                        lineHeight="1.5"
                      >
                        Anyone who interacts with PhishCode outside of being a
                        Client or Target, such as website visitors.
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Box
                      p={{ base: "1rem", md: "1.25rem" }}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="0.5rem"
                    >
                      <Heading
                        as="h4"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        mb="0.5rem"
                        color="gray.800"
                        fontWeight={600}
                      >
                        Personal Information:
                      </Heading>
                      <Text
                        fontSize={{ base: "0.8rem", md: "0.9rem" }}
                        color="gray.800"
                        lineHeight="1.5"
                      >
                        Data that identifies, relates to, or can reasonably
                        identify an individual.
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>
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
                  Sharing of Information
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
                >
                  We may also share Aggregated Data for research, reporting, or
                  product improvement. We do not sell Client Campaign Lists.
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
                  Data Retention
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
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
                  Children's Privacy
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
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
                  Your Rights
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
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
                  Data Security
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
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
                  Updates to This Policy
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  PhishCode may update this Privacy Policy periodically. Any
                  material changes will be communicated by updating this page,
                  and continued use of our Services indicates acceptance of the
                  revised policy.
                </Text>
              </Box>

              {/* Third-Party Links */}
              <Box id="third-party-links">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  Third-Party Links
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  Our Services may contain links to third-party websites.
                  PhishCode is not responsible for their privacy practices, and
                  we encourage you to review their policies before sharing
                  information.
                </Text>
              </Box>

              {/* Collection Methods */}
              <Box id="collection-methods">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  Collection Methods
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
                </UnorderedList>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrivacyStatementBody;
