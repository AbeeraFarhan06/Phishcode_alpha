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
  FormErrorMessage,
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companySize: string;
  jobRole: string;
  countryCode: string;
  phone: string;
  country: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  companyName?: string;
  companySize?: string;
  jobRole?: string;
  countryCode?: string;
  phone?: string;
  country?: string;
}

const ContactUs = () => {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [loadingCodes, setLoadingCodes] = useState(true);
  const [countries, setCountries] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companySize: "",
    jobRole: "",
    countryCode: "",
    phone: "",
    country: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Debug: Log form data changes
  useEffect(() => {
    console.log("Current form data:", formData);
  }, [formData]);

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
        console.log("Country codes loaded:", codes.length);
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
        console.log("Countries loaded:", countryNames.length);
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

  // Enhanced validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    return (
      phoneRegex.test(phone) &&
      cleanPhone.length >= 7 &&
      cleanPhone.length <= 15
    );
  };

  const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
  };

  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    return nameRegex.test(name) && name.trim().length > 0;
  };

  const validateCompanyName = (companyName: string): boolean => {
    const companyRegex = /^[a-zA-Z0-9\s.,&'-]+$/;
    return companyRegex.test(companyName) && companyName.trim().length > 0;
  };

  const validateJobRole = (jobRole: string): boolean => {
    const jobRegex = /^[a-zA-Z\s.,&'()-]+$/;
    return jobRegex.test(jobRole) && jobRole.trim().length > 0;
  };

  // Simple update functions for each field
  const updateField = (field: keyof FormData, value: string) => {
    console.log(`Updating ${field} to:`, value);
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      console.log("Updated form data:", updated);
      return updated;
    });

    // Clear error when field gets a value
    if (value.trim().length > 0 && errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Handle input changes with filtering for text inputs only
  const handleInputChange = (field: keyof FormData, value: string) => {
    let filteredValue = value;

    // Apply filtering only for text inputs
    switch (field) {
      case "firstName":
      case "lastName":
        filteredValue = value.replace(/[^a-zA-Z\s'-]/g, "");
        break;
      case "phone":
        filteredValue = value.replace(/[^0-9\s\-\+\(\)]/g, "");
        break;
      case "companyName":
        filteredValue = value.replace(/[^a-zA-Z0-9\s.,&'-]/g, "");
        break;
      case "jobRole":
        filteredValue = value.replace(/[^a-zA-Z\s.,&'()-]/g, "");
        break;
      case "email":
        filteredValue = value.replace(/\s/g, "");
        break;
      default:
        filteredValue = value;
    }

    updateField(field, filteredValue);
  };

  // Handle field blur validation
  const handleFieldBlur = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case "firstName":
        if (!validateRequired(value)) {
          newErrors.firstName = "First name is required";
        } else if (!validateName(value)) {
          newErrors.firstName =
            "Please enter a valid first name (letters only)";
        } else {
          delete newErrors.firstName;
        }
        break;

      case "lastName":
        if (!validateRequired(value)) {
          newErrors.lastName = "Last name is required";
        } else if (!validateName(value)) {
          newErrors.lastName = "Please enter a valid last name (letters only)";
        } else {
          delete newErrors.lastName;
        }
        break;

      case "email":
        if (!validateRequired(value)) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;

      case "companyName":
        if (!validateRequired(value)) {
          newErrors.companyName = "Company name is required";
        } else if (!validateCompanyName(value)) {
          newErrors.companyName = "Please enter a valid company name";
        } else {
          delete newErrors.companyName;
        }
        break;

      case "companySize":
        if (!validateRequired(value)) {
          newErrors.companySize = "Company size is required";
        } else {
          delete newErrors.companySize;
        }
        break;

      case "jobRole":
        if (!validateRequired(value)) {
          newErrors.jobRole = "Job role is required";
        } else if (!validateJobRole(value)) {
          newErrors.jobRole = "Please enter a valid job role";
        } else {
          delete newErrors.jobRole;
        }
        break;

      case "phone":
        if (!validateRequired(value)) {
          newErrors.phone = "Phone number is required";
        } else if (!validatePhone(value)) {
          newErrors.phone = "Please enter a valid phone number (7-15 digits)";
        } else {
          delete newErrors.phone;
        }
        break;

      case "country":
        if (!validateRequired(value)) {
          newErrors.country = "Country/Region is required";
        } else {
          delete newErrors.country;
        }
        break;

      case "countryCode":
        if (!validateRequired(value)) {
          newErrors.countryCode = "Country code is required";
        } else {
          delete newErrors.countryCode;
        }
        break;
    }

    setErrors(newErrors);
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateRequired(formData.firstName)) {
      newErrors.firstName = "First name is required";
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = "Please enter a valid first name (letters only)";
    }

    if (!validateRequired(formData.lastName)) {
      newErrors.lastName = "Last name is required";
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = "Please enter a valid last name (letters only)";
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validateRequired(formData.companyName)) {
      newErrors.companyName = "Company name is required";
    } else if (!validateCompanyName(formData.companyName)) {
      newErrors.companyName = "Please enter a valid company name";
    }

    if (!validateRequired(formData.companySize)) {
      newErrors.companySize = "Company size is required";
    }

    if (!validateRequired(formData.jobRole)) {
      newErrors.jobRole = "Job role is required";
    } else if (!validateJobRole(formData.jobRole)) {
      newErrors.jobRole = "Please enter a valid job role";
    }

    if (!validateRequired(formData.countryCode)) {
      newErrors.countryCode = "Country code is required";
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (7-15 digits)";
    }

    if (!validateRequired(formData.country)) {
      newErrors.country = "Country/Region is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("Form has validation errors:", errors);
    }
  };

  const inputSelectStyle = {
    border: "0.0625rem solid #d1d5db",
    borderRadius: "0.25rem",
    _hover: {
      border: "0.0625rem solid #d1d5db",
    },
    _focus: {
      border: "0.125rem solid #4f7cff",
      boxShadow: "0 0 0 1px #4f7cff",
      outline: "none",
    },
    _focusVisible: {
      border: "0.125rem solid #4f7cff",
      boxShadow: "0 0 0 1px #4f7cff",
      outline: "none",
    },
  };

  const getInputStyle = (fieldName: keyof FormErrors) => ({
    ...inputSelectStyle,
    borderColor: errors[fieldName] ? "#e53e3e" : "#d1d5db",
    _focus: {
      ...inputSelectStyle._focus,
      borderColor: errors[fieldName] ? "#e53e3e" : "#4f7cff",
      boxShadow: errors[fieldName] ? "0 0 0 1px #e53e3e" : "0 0 0 1px #4f7cff",
    },
  });

  return (
    <Box bg="white" width="100%">
      {/* Header */}
      <Box borderBottom="1px solid #e5e5e5" width="100%">
        <Container navbar1>
          <Flex>
            <Link to="/">
              <Image
                src={phishcode_logoo_1}
                h="2.5rem"
                w="auto"
                cursor="pointer"
                mt={-4}
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
              Get Started with PHISHCODE.
            </Text>
            <Text fontSize="16px" mb={4} textAlign="justify">
              Complete the form, and one of our PHISHCODE specialists will reach
              out to you. Our team is ready to answer your questions, provide
              expert guidance, and show you how PHISHCODE can benefit your
              business.
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
            <form onSubmit={handleSubmit}>
              <Heading as="h2" fontSize="29px" mb={4} fontWeight="semibold">
                Contact me
              </Heading>
              <Text fontSize="16px" mb={4} textAlign="justify">
                Just fill out the form, and we'll reach out to you soon.
              </Text>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired isInvalid={!!errors.firstName}>
                  <FormLabel fontSize="16px">First name</FormLabel>
                  <Input
                    {...getInputStyle("firstName")}
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    onBlur={(e) => handleFieldBlur("firstName", e.target.value)}
                    placeholder="Enter your first name"
                  />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.lastName}>
                  <FormLabel fontSize="16px">Last name</FormLabel>
                  <Input
                    {...getInputStyle("lastName")}
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    onBlur={(e) => handleFieldBlur("lastName", e.target.value)}
                    placeholder="Enter your last name"
                  />
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.email}>
                  <FormLabel fontSize="16px">Email</FormLabel>
                  <Input
                    type="email"
                    {...getInputStyle("email")}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onBlur={(e) => handleFieldBlur("email", e.target.value)}
                    placeholder="Enter your email address"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.companyName}>
                  <FormLabel fontSize="16px">Company name</FormLabel>
                  <Input
                    {...getInputStyle("companyName")}
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    onBlur={(e) =>
                      handleFieldBlur("companyName", e.target.value)
                    }
                    placeholder="Enter your company name"
                  />
                  <FormErrorMessage>{errors.companyName}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.companySize}>
                  <FormLabel fontSize="16px">Company size</FormLabel>
                  <Select
                    placeholder="Select company size"
                    {...getInputStyle("companySize")}
                    value={formData.companySize}
                    onChange={(e) => {
                      console.log(
                        "Company size onChange triggered:",
                        e.target.value
                      );
                      updateField("companySize", e.target.value);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2-4">2-4</option>
                    <option value="5-9">5-9</option>
                    <option value="10-24">10-24</option>
                    <option value="25-49">25-49</option>
                    <option value="50-249">50-249</option>
                    <option value="250-999">250-999</option>
                    <option value="1000+">1000+</option>
                  </Select>
                  <FormErrorMessage>{errors.companySize}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.jobRole}>
                  <FormLabel fontSize="16px">Job role</FormLabel>
                  <Input
                    {...getInputStyle("jobRole")}
                    value={formData.jobRole}
                    onChange={(e) =>
                      handleInputChange("jobRole", e.target.value)
                    }
                    onBlur={(e) => handleFieldBlur("jobRole", e.target.value)}
                    placeholder="Enter your job role"
                  />
                  <FormErrorMessage>{errors.jobRole}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  isInvalid={!!errors.phone || !!errors.countryCode}
                >
                  <FormLabel fontSize="16px">Phone</FormLabel>
                  <Flex gap={2} bgColor="white">
                    <Select
                      placeholder={loadingCodes ? "Loading..." : "Code"}
                      maxW="40%"
                      disabled={loadingCodes}
                      {...getInputStyle("countryCode")}
                      value={formData.countryCode}
                      onChange={(e) => {
                        console.log(
                          "Country code onChange triggered:",
                          e.target.value
                        );
                        updateField("countryCode", e.target.value);
                      }}
                    >
                      {!loadingCodes &&
                        countryCodes.map((country) => (
                          <option
                            key={`${country.name}-${country.code}`}
                            value={country.code}
                          >
                            {country.code} {country.name}
                          </option>
                        ))}
                    </Select>

                    <Input
                      placeholder="Phone number"
                      {...getInputStyle("phone")}
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      onBlur={(e) => handleFieldBlur("phone", e.target.value)}
                    />
                  </Flex>
                  <FormErrorMessage>
                    {errors.countryCode || errors.phone}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.country}>
                  <FormLabel fontSize="16px">Country/Region</FormLabel>
                  <Select
                    placeholder={
                      loadingCountries ? "Loading..." : "Select country"
                    }
                    disabled={loadingCountries}
                    {...getInputStyle("country")}
                    value={formData.country}
                    onChange={(e) => {
                      console.log(
                        "Country onChange triggered:",
                        e.target.value
                      );
                      updateField("country", e.target.value);
                    }}
                  >
                    {!loadingCountries &&
                      countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                  </Select>
                  <FormErrorMessage>{errors.country}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  bg="#2D3748"
                  color="white"
                  _hover={{ bg: "#1A202C" }}
                  borderRadius="none"
                  w="7rem"
                  h="2.5rem"
                  fontSize="14px"
                  fontWeight="medium"
                >
                  Contact me
                </Button>

                <Text fontSize="xs" color="#0E1726">
                  * Please complete required fields
                </Text>
              </VStack>
            </form>
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
