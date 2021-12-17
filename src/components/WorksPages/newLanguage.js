import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { AspectRatio } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import ReactLogo from "../../images/brand/react_logo.svg";
import NextLogo from "../../images/brand/next_logo.svg";
import VueLogo from "../../images/brand/vue_logo.svg";
import NuxtLogo from "../../images/brand/nuxt_logo.svg";
import MaterialUILogo from "../../images/brand/materialUI_logo.svg";
import ChakraUILogo from "../../images/brand/chakraUI_logo.svg";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const WorksNewLanguage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");

  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" color={color} bg={bg}>
      <Box h={24} display="flex" justifyContent="center" alignItems="center">
        <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
          Languages studied in 2021
          <Text as="span" color="#ECC94B">
            .
          </Text>
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" pb={14}>
        <Divider
          h={14}
          orientation="vertical"
          borderColor="#ECC94B"
          opacity="1"
        />
      </Box>
      <VStack spacing={14} style={{ "objectFit": "scale-down" }}>
        <Grid
          templateColumns="repeat(2, 3fr)"
          gap={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            p={8}
            border="1px solid"
            borderColor="#ECC94B"
            borderRadius="4px"
            objectFit="contain"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={ReactLogo.src} style={{ "objectFit": "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              React
            </Text>
          </Box>
          <Box
            p={8}
            border="1px solid"
            borderColor="#ECC94B"
            borderRadius="4px"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={NextLogo.src} style={{ "objectFit": "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              Next.js
            </Text>
          </Box>
        </Grid>
        <Grid
          templateColumns="repeat(2, 3fr)"
          gap={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            p={8}
            border="1px solid"
            borderColor="#ECC94B"
            borderRadius="4px"
            objectFit="contain"
          >
            <AspectRatio w={44} ratio={4 / 3}>
            <img src={VueLogo.src} style={{ "objectFit": "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              Vue.js
            </Text>
          </Box>
          <Box
            p={8}
            border="1px solid"
            borderColor="#ECC94B"
            borderRadius="4px"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={NuxtLogo.src} style={{ "objectFit": "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              Nuxt.js
            </Text>
          </Box>
        </Grid>
        <Grid
          templateColumns="repeat(2, 3fr)"
          gap={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            p={8}
            border="1px solid"
            borderColor="#ECC94B"
            borderRadius="4px"
            objectFit="contain"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={MaterialUILogo.src} style={{ "objectFit": "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              Material UI
            </Text>
          </Box>
          <Box
            p={8}
            border="1px solid"
            borderColor="#ECC94B"
            borderRadius="4px"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={ChakraUILogo.src} style={{ "objectFit": "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              Chakra UI
            </Text>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
};
