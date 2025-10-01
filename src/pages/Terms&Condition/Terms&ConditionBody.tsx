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
import { Link as RouterLink } from "react-router-dom";
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

// // Container component
// const Container = ({ children }: { children: React.ReactNode }) => (
//   <Box
//     maxW="1200px"
//     mx="auto"
//     px={{ base: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }}
//     py={{ base: "2rem", md: "3rem" }}
//   >
//     {children}
//   </Box>
// );

const TermsAndConditions: React.FC = () => {
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
            PHISHCODE Terms & Conditions
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
                Terms & Conditions
              </Heading>

              <VStack
                align="stretch"
                spacing={{ base: "0.4rem", md: "0.5rem" }}
              >
                <Link
                  href="#user-accounts"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  User Accounts
                </Link>
                <Link
                  href="#disclaimer-warranties"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Disclaimer of Warranties
                </Link>
                <Link
                  href="#data-protection"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Data Protection & Security
                </Link>
                <Link
                  href="#acceptable-use"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Acceptable Use Policy
                </Link>
                <Link
                  href="#account-suspension"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Account Suspension & Termination
                </Link>
                <Link
                  href="#service-availability"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Service Availability & Maintenance
                </Link>
                <Link
                  href="#limitation-liability"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Limitation of Liability
                </Link>
                <Link
                  href="#indemnification"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Indemnification
                </Link>
                <Link
                  href="#intellectual-property"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Intellectual Property
                </Link>
                <Link
                  href="#governing-law"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Governing Law & Jurisdiction
                </Link>
                <Link
                  href="#modifications"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Modifications
                </Link>
                <Link
                  href="#waiver"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Waiver
                </Link>
                <Link
                  href="#headings"
                  color="blue.600"
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                >
                  Headings
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
                    to="/privacy-statement"
                    color="blue.600"
                    fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  >
                    Privacy Statement ›
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
                  color="black.600"
                  fontWeight="600"
                  textAlign="justify"
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE ACCESSING OR
                  USING THIS PLATFORM.
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  These Terms of Use ("Terms") govern your access to and use of
                  the website{" "}
                  <span style={{ fontWeight: 600 }}>
                    https://phishcode.com/
                  </span>{" "}
                  (the "Website") and all related products, services, features,
                  or applications provided through it (collectively, the
                  "Services").
                </Text>

                <Text
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  By accessing or using the Website and Services, you ("User,"
                  "you," or "your") agree to be bound by these Terms, forming a
                  legally enforceable agreement with{" "}
                  <span style={{ fontWeight: 600 }}>PHISHCODE, Inc.</span>{" "}
                  ("PHISHCODE," "we," "us," or "our"). Our{" "}
                  <Link
                    as={RouterLink}
                    to="/privacy-statement"
                    color="blue.600"
                    textDecoration="underline"
                  >
                    Privacy Statement
                  </Link>{" "}
                  explains how we handle your data. If you do not agree to
                  these Terms, you must discontinue use of the Website and
                  Services immediately.
                </Text>
              </Box>

              {/* User Accounts */}
              <Box id="user-accounts">
                <Heading
                  fontWeight={600}
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                >
                  1. User Accounts
                </Heading>

                <VStack
                  spacing={{ base: "1rem", md: "1.25rem" }}
                  align="stretch"
                >
                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      1.1 Eligibility:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      By creating an account, you confirm that you are at least
                      18 years old, have not been convicted of fraud, money
                      laundering, terrorism, or any other criminal offense.
                      Minors may only use the Services under the supervision of
                      a parent/guardian who accepts these Terms on their behalf.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      1.2 Entities:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      If registering on behalf of a company, partnership, or
                      organization ("Entity"), you represent that you have the
                      authority to bind the Entity to these Terms. You agree to
                      provide proof of such authorization if requested.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      1.3 Accuracy of Information:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      You agree to provide complete and accurate information
                      during account registration and maintain its accuracy.
                      PHISHCODE reserves the right to verify the information and
                      request supporting documentation.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      1.4 Account Usage:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      Each User may maintain only one account. Impersonation,
                      creation of fake accounts, or unauthorized use of another
                      person's account is strictly prohibited.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      1.5 Non-Transferability:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      Your account is personal to you or your Entity. You may
                      not assign, sell, or transfer it to any third party.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Disclaimer of Warranties */}
              <Box id="disclaimer-warranties">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  2. Disclaimer of Warranties
                </Heading>

                <VStack
                  spacing={{ base: "1rem", md: "1.25rem" }}
                  align="stretch"
                >
                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      2.1 Service Limitations:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      PHISHCODE does not guarantee that the Website or Services
                      will be error-free, uninterrupted, or free from security
                      vulnerabilities, malware, or other harmful components.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      2.2 Data Security:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      While PHISHCODE implements industry-standard security
                      measures, no system is fully secure. We are not
                      responsible for unauthorized access, data breaches, or
                      misuse of your information outside of our reasonable
                      control.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      2.3 As-Is Basis:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      The Website and Services are provided on an "as is" and
                      "as available" basis. PHISHCODE disclaims all
                      warranties—express, implied, statutory, or
                      otherwise—including but not limited to warranties of
                      merchantability, fitness for a particular purpose,
                      non-infringement, accuracy, and reliability.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      2.4 Transmission Risks:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      Data may be transmitted over networks beyond PHISHCODE's
                      control. We assume no liability for loss, corruption, or
                      delay of data in transit.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Data Protection & Security */}
              <Box id="data-protection">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  3. Data Protection & Security
                </Heading>

                <VStack
                  spacing={{ base: "1rem", md: "1.25rem" }}
                  align="stretch"
                >
                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      3.1 Password Responsibility:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      You are solely responsible for safeguarding your account
                      credentials. If you suspect unauthorized access, you must
                      notify PHISHCODE immediately.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      3.2 Backup & Recovery:
                    </Text>
                    <Text
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      You are responsible for maintaining appropriate safeguards
                      and backup procedures for your data.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Acceptable Use Policy */}
              <Box id="acceptable-use">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  4. Acceptable Use Policy
                </Heading>

                <VStack
                  spacing={{ base: "1rem", md: "1.25rem" }}
                  align="stretch"
                >
                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      4.1 Intended Purpose:
                    </Text>
                    <Text
                      mb={{ base: "0.75rem", md: "1rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      lineHeight={{ base: "1.5", md: "1.6" }}
                      textAlign="justify"
                    >
                      You may use the Website and Services only for lawful,
                      professional, and ethical purposes related to
                      cybersecurity awareness and phishing simulation.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      fontWeight={600}
                    >
                      4.2 Prohibited Uses:
                    </Text>
                    <Text
                      mb={{ base: "0.5rem", md: "0.75rem" }}
                      color="gray.800"
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                    >
                      You agree not to:
                    </Text>
                    <UnorderedList
                      spacing={{ base: "0.5rem", md: "0.6rem" }}
                      pl={{ base: "1rem", md: "1.25rem" }}
                    >
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        Use the Services for fraudulent, malicious, or unlawful
                        activities.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        Publish or share misleading, offensive, defamatory, or
                        harmful content.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        Promote hate speech, extremist, or political propaganda.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        Attempt unauthorized access to the Website or its
                        systems.
                      </ListItem>
                      <ListItem
                        color="gray.800"
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                      >
                        Impersonate others or damage the reputation of PHISHCODE
                        or third parties.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </VStack>
              </Box>

              {/* Account Suspension & Termination */}
              <Box id="account-suspension">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  5. Account Suspension & Termination
                </Heading>
                <Text
                  mb={{ base: "0.75rem", md: "1rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  PHISHCODE reserves the right to suspend or terminate your
                  account:
                </Text>
                <UnorderedList
                  spacing={{ base: "0.5rem", md: "0.6rem" }}
                  pl={{ base: "1rem", md: "1.25rem" }}
                >
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    For violation of these Terms.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    To comply with law enforcement or regulatory requirements.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    If criminal proceedings are initiated against you.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    For insolvency or business discontinuation.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    At our discretion, with 15 days' prior notice, without the
                    need to provide cause.
                  </ListItem>
                </UnorderedList>
              </Box>

              {/* Service Availability & Maintenance */}
              <Box id="service-availability">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  6. Service Availability & Maintenance
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  PHISHCODE may suspend access temporarily for upgrades,
                  maintenance, or security improvements. We will endeavor to
                  minimize disruptions.
                </Text>
              </Box>

              {/* Limitation of Liability */}
              <Box id="limitation-liability">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  7. Limitation of Liability
                </Heading>
                <Text
                  mb={{ base: "0.75rem", md: "1rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  PHISHCODE and its affiliates, officers, employees, and
                  partners shall not be liable for:
                </Text>
                <UnorderedList
                  spacing={{ base: "0.5rem", md: "0.6rem" }}
                  pl={{ base: "1rem", md: "1.25rem" }}
                  textAlign="justify"
                >
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Any reliance on content, advertising, or third-party
                    materials.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Loss of data, service interruptions, or unauthorized access.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Any indirect, incidental, punitive, or consequential
                    damages.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Events beyond our reasonable control (force majeure,
                    including natural disasters, war, strikes, outages, etc.).
                  </ListItem>
                </UnorderedList>
              </Box>

              {/* Indemnification */}
              <Box id="indemnification">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  8. Indemnification
                </Heading>
                <Text
                  mb={{ base: "0.75rem", md: "1rem" }}
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  You agree to indemnify and hold harmless PHISHCODE, its
                  affiliates, officers, and employees against any claims,
                  damages, liabilities, costs, or expenses arising from:
                </Text>
                <UnorderedList
                  spacing={{ base: "0.5rem", md: "0.6rem" }}
                  pl={{ base: "1rem", md: "1.25rem" }}
                  textAlign="justify"
                >
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Your violation of these Terms.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Misuse of the Website or Services.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  >
                    Unauthorized use of your account.
                  </ListItem>
                </UnorderedList>
              </Box>

              {/* Intellectual Property */}
              <Box id="intellectual-property">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  9. Intellectual Property
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
                    All intellectual property rights in the Website, Services,
                    software, designs, and trademarks belong exclusively to
                    PHISHCODE.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    textAlign="justify"
                  >
                    You may not copy, modify, reverse-engineer, distribute, or
                    resell our intellectual property.
                  </ListItem>
                  <ListItem
                    color="gray.800"
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    textAlign="justify"
                  >
                    Any unauthorized use will result in immediate termination of
                    your rights under these Terms.
                  </ListItem>
                </UnorderedList>
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
                  10. Third-Party Links
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  The Website may include links to third-party websites.
                  PHISHCODE does not endorse or assume responsibility for
                  third-party content or services.
                </Text>
              </Box>

              {/* Relationship of Parties */}
              <Box id="relationship-parties">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  11. Relationship of Parties
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  These Terms do not create a partnership, joint venture, or
                  agency relationship between you and PHISHCODE.
                </Text>
              </Box>

              {/* Entire Agreement */}
              <Box id="entire-agreement">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  12. Entire Agreement
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  These Terms represent the complete agreement between you and
                  PHISHCODE, superseding any prior communications or
                  understandings.
                </Text>
              </Box>

              {/* Governing Law & Jurisdiction */}
              <Box id="governing-law">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  13. Governing Law & Jurisdiction
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  These Terms are governed by the laws of the State of
                  California, USA. Any disputes shall be subject to the
                  exclusive jurisdiction of the courts in San Francisco,
                  California.
                </Text>
              </Box>

              {/* Modifications */}
              <Box id="modifications">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  14. Modifications
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  PHISHCODE may update these Terms at any time without prior
                  notice. Continued use of the Website constitutes your
                  acceptance of the updated Terms.
                </Text>
              </Box>

              {/* Waiver */}
              <Box id="waiver">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  15. Waiver
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  Failure to enforce any right under these Terms shall not
                  constitute a waiver of such right.
                </Text>
              </Box>

              {/* Headings */}
              <Box id="headings">
                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem", lg: "1.8rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  16. Headings
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  textAlign="justify"
                >
                  Section headings are for reference only and do not affect
                  interpretation of these Terms.
                </Text>
              </Box>

              {/* Contact Information */}
              <Box
                id="contact-info"
                bg="gray.50"
                p={{ base: "1.5rem", md: "2rem" }}
                borderRadius="0.5rem"
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "1.2rem", md: "1.4rem" }}
                  mb={{ base: "1rem", md: "1.25rem" }}
                  color="gray.800"
                  fontWeight={600}
                >
                  Contact Information
                </Heading>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                  mb={{ base: "0.5rem", md: "0.75rem" }}
                  textAlign="justify"
                >
                  If you have any questions about these Terms & Conditions,
                  please contact us at:
                </Text>
                <Text
                  color="gray.800"
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  lineHeight={{ base: "1.5", md: "1.6" }}
                >
                  <Text as="span" fontWeight="600">
                    Email:
                  </Text>{" "}
                  legal@phishcode.com
                  <br />
                  <Text as="span" fontWeight="600">
                    Website:
                  </Text>{" "}
                  https://phishcode.com/
                </Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
