import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import phishcode_logoo_1 from "../assets/logo/phishcode_logoo_1.png";
import contact_banner from "../assets/png imgs/contact_banner.png";
import Container from "./Container";

interface CountryCode {
  name: string;
  code: string;
  flag: string;
}

const ContactUs = () => {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [loadingCodes, setLoadingCodes] = useState(true);
  const [countries, setCountries] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  // Fetch country codes
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        setLoadingCodes(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,flag"
        );
        const data = await response.json();

        const codes: CountryCode[] = data
          .filter(
            (country: any) =>
              country.idd?.root && country.idd?.suffixes?.length > 0
          )
          .map((country: any) => {
            const mainCode = country.idd.root + (country.idd.suffixes[0] || "");
            return {
              name: country.name.common,
              code: mainCode,
              flag: country.flag,
            };
          })
          .sort((a: CountryCode, b: CountryCode) =>
            a.name.localeCompare(b.name)
          )
          .filter(
            (country: CountryCode, index: number, self: CountryCode[]) =>
              index ===
              self.findIndex(
                (c: CountryCode) =>
                  c.code === country.code && c.name === country.name
              )
          );

        setCountryCodes(codes);
      } catch (error) {
        console.error("Error fetching country codes:", error);
        setCountryCodes([
          { name: "United States", code: "+1", flag: "🇺🇸" },
          { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
          { name: "India", code: "+91", flag: "🇮🇳" },
          { name: "Canada", code: "+1", flag: "🇨🇦" },
          { name: "Australia", code: "+61", flag: "🇦🇺" },
        ]);
      } finally {
        setLoadingCodes(false);
      }
    };

    fetchCountryCodes();
  }, []);

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoadingCountries(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        const data = await response.json();

        const countryNames = data
          .map((country: any) => country.name.common)
          .sort();

        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([
          "United States",
          "United Kingdom",
          "India",
          "Canada",
          "Australia",
        ]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const inputSelectStyle = {
    border: "0.0625rem solid #d1d5db",
    borderRadius: "0.25rem",
    _hover: {
      border: "0.0625rem solid #d1d5db", // keep same border
    },
    _focus: {
      border: "0.0625rem solid #4f7cff", // blue border on focus
      boxShadow: "none", // remove Chakra's blue shadow
    },
  };

  // Common style for Select option background
  const selectOptionStyle = {
    "& option": {
      backgroundColor: "white",
      color: "black",
    },
  };

  return (
    <Box bg="white" width="100%">
      {/* Header */}
      <Box borderBottom="1px solid #e5e5e5" width="100%">
        <Container navbar1>
          <Flex>
            <Link to="/">
              <Image
                src={phishcode_logoo_1}
                h="32px"
                w="140px"
                cursor="pointer"
                mt={-3}
              />
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Banner */}
      <Container fullWidth>
        <Image src={contact_banner} width="100%" />
      </Container>

      {/* Hero Section */}
      <Container>
        <Flex direction={{ base: "column", lg: "row" }} gap={12}>
          {/* Left Content */}
          <Box flex="1">
            <Heading fontSize="37px" mb={4} fontWeight="semibold">
              Contact the PHISHCODE team
            </Heading>
            <Text fontSize="16px" mb={6}>
              Let's help you get started with PHISHCODE.
            </Text>
            <Text fontSize="16px" mb={4} textAlign="justify">
              Fill out the form and we'll have a PHISHCODE expert give you a
              call. Our team can answer your questions, provide expert guidance,
              and help you understand what PHISHCODE can do for your business.
            </Text>
          </Box>

          {/* Right Form */}
          <Box
            flex="1"
            border="1px solid #0E1726"
            borderRadius="md"
            p={8}
            bg="white"
          >
            <Heading as="h2" fontSize="29px" mb={4} fontWeight="semibold">
              Contact me
            </Heading>
            <Text fontSize="16px" mb={4} textAlign="justify">
              If you are a current customer and need technical or billing
              support, please visit our <Link to="#">support area</Link> or{" "}
              <Link to="#">log in</Link> to your account to see more options.
            </Text>
            <Text fontSize="16px" mb={4}>
              Fill out the form and we'll be in touch.
            </Text>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel fontSize="16px">First name</FormLabel>
                <Input {...inputSelectStyle} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="16px">Last name</FormLabel>
                <Input {...inputSelectStyle} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="16px">Email</FormLabel>
                <Input type="email" {...inputSelectStyle} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="16px">Company name</FormLabel>
                <Input {...inputSelectStyle} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="16px">Company size</FormLabel>
                <Select
                  placeholder="Company size"
                  {...inputSelectStyle}
                  sx={selectOptionStyle}
                >
                  <option>1</option>
                  <option>2-4</option>
                  <option>5-9</option>
                  <option>10-24</option>
                  <option>25-49</option>
                  <option>50-249</option>
                  <option>250-999</option>
                  <option>1000+</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="16px">Job role</FormLabel>
                <Input {...inputSelectStyle} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="16px">Phone</FormLabel>
                <Flex gap={2} bgColor="white">
                  <Select
                    placeholder={loadingCodes ? "Loading..." : "Country Code"}
                    maxW="40%"
                    disabled={loadingCodes}
                    {...inputSelectStyle}
                    sx={selectOptionStyle}
                  >
                    {loadingCodes ? (
                      <option disabled>Loading country codes...</option>
                    ) : (
                      <>
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </>
                    )}
                  </Select>

                  <Input placeholder="Phone number" {...inputSelectStyle} />
                </Flex>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="16px">Country/Region</FormLabel>
                <Select
                  placeholder={
                    loadingCountries ? "Loading..." : "Select country"
                  }
                  disabled={loadingCountries}
                  {...inputSelectStyle}
                  sx={selectOptionStyle}
                >
                  {loadingCountries ? (
                    <option disabled>Loading countries...</option>
                  ) : (
                    <>
                      <option value="" disabled>
                        Select country
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </>
                  )}
                </Select>
              </FormControl>

              <Button
                bg="#0E1726"
                color="white"
                _hover={{ bg: "#243B65" }}
                borderRadius="sm"
                w="12rem"
              >
                Contact me
              </Button>

              <Text fontSize="xs" color="#0E1726">
                * Please complete required fields
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bgColor="#f1f2f379" borderTop="1px solid #8c8c8d79" width="100%">
        <Container noVerticalPadding py={3}>
          <Flex justify="left" align="center" fontSize="12px" color="gray.600">
            <Text pt={3}>
              <Link to="#">Your Privacy Choices</Link> |{" "}
              <Link to="#">Trademarks</Link> |{" "}
              <Link to="#">Privacy & Cookies</Link> | © PHISHCODE
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;
