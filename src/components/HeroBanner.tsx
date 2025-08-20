import { useState, useRef } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'

// Motion wrapper
const MotionFlex = motion(Flex)

const HeroBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Scroll animation hook
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const flexDirection = useBreakpointValue({ base: 'column', lg: 'row' });
  const px = useBreakpointValue({ base: 4, md: 16 });
  const py = useBreakpointValue({ base: 8, md: 20 });
  const headingFontSize = useBreakpointValue({ base: '2rem', md: '38px' });
  const headingLineHeight = useBreakpointValue({ base: '2.2rem', md: '3rem' });
  const headingMarginLeft = useBreakpointValue({ base: 0, md: 8 });
  const textMarginLeft = useBreakpointValue({ base: 0, md: 8 });
  const stackMarginLeft = useBreakpointValue({ base: 0, sm: 8 });
  const rightBoxMarginTop = useBreakpointValue({ base: 8, lg: 0 });
  const videoBoxHeight = useBreakpointValue({ base: '200px', md: '300px' });

  return (
    <MotionFlex
      ref={ref}
      px={px}
      py={py}
      align="center"
      justify="space-between"
      flexDirection={flexDirection} // Stack on mobile/tablet, row on large
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Left Section: Text and Buttons */}
      <Box flex="1" pr={{ base: 0, lg: 12 }}>
        <Heading
          fontSize={headingFontSize}
          fontWeight="500"
          color="white"
          mb={{base: 5, md: 7}}
          ml={headingMarginLeft}
          lineHeight={headingLineHeight}
        >
          AI-powered <br/>
          Phishing Attack Simulation
        </Heading>

        <Text color="lightgray" mb={{base: 3, md: 6}} ml={textMarginLeft} fontWeight="thin" fontSize="18px">
          Empower organizations to identify and defend against<br/> 
          phishing attacks with intelligent, realistic challenging<br/> 
          simulations and cybersecurity awareness training.
        </Text>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} ml={stackMarginLeft}>
          <Button
            bg="white"
            color="#0E1726"
            fontWeight="semibold"
            fontSize={{ base: "sm", md: "15px" }}
            h="50px"
            w="100px"
            px={6}
            py={6}
            borderRadius="md"
            _hover={{ bg: '#243B65' }}
          >
            Try for free
          </Button>

          <Button
            variant="outline"
            borderColor="white"
            borderWidth="1px"
            color="lightgray"
            aria-label="Sign In"
            size="sm"
            h="50px"
            fontSize={{ base: "sm", md: "15px" }}
            fontWeight="thin"
            borderRadius="6px"
          >
            Contact sales
          </Button>
        </Stack>
      </Box>

      {/* Right Section: Video Placeholder */}
      <Box
        flex="1"
        mt={rightBoxMarginTop} // Margin top only when stacked
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        p={2}
        w="100%"
      >
        <Box
          bg="rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          borderColor="rgba(255, 255, 255, 0.1)"
          overflow="hidden"
          height={videoBoxHeight}
          position="relative"
        >
          {isPlaying ? (
            <Box
              as="iframe"
              title="Intro Video"
              borderRadius="xl"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              border="0"
            />
          ) : (
            <Box
              w="100%"
              h="100%"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Button
                position="absolute"
                size="16px 16px"
                top="15%"
                left="9%"
                transform="translate(-50%, -50%)"
                bg="white"
                borderRadius="8px"
                p={2}
                onClick={() => setIsPlaying(true)}
                _hover={{ bg: '#e4e4e4ff' }}
              >
                <FaPlay color="#0E1726" size="15px"/>
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </MotionFlex>
  )
}

export default HeroBanner
