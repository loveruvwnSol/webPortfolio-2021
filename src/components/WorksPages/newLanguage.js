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
  const switchYellowBulueColor = useColorModeValue("#ECC94B", "#63B3ED");

  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" color={color} bg={bg}>
      <Box h={24} display="flex" justifyContent="center" alignItems="center">
        <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
          Languages studied in 2021
          <Text as="span" color={switchYellowBulueColor}>
            .
          </Text>
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" pb={14}>
        <Divider
          h={14}
          orientation="vertical"
          borderColor={switchYellowBulueColor}
          opacity="1"
        />
      </Box>
      <VStack spacing={14} style={{ objectFit: "scale-down" }}>
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
            borderColor={switchYellowBulueColor}
            borderRadius="4px"
            objectFit="contain"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={ReactLogo.src} style={{ objectFit: "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              React
            </Text>
          </Box>
          <Box
            p={8}
            border="1px solid"
            borderColor={switchYellowBulueColor}
            borderRadius="4px"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              {/* <img src={NextLogo.src} style={{ objectFit: "scale-down" }} /> */}
              <svg
                width="165"
                height="84"
                viewBox="0 0 165 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.9326 21.9081H70.0534V23.9956H41.786V39.7051H68.3674V41.7926H41.786V59.0402H70.3774V61.1277H38.9326V21.9081ZM72.8409 21.9081H76.1479L90.8006 39.1557L105.777 21.9081L126.148 0L92.6809 40.9685L109.927 61.1277H106.49L90.8006 42.7813L75.0463 61.1277H71.6745L89.0498 40.9685L72.842 21.9081H72.8409ZM111.159 23.9956V21.9081H146.622V23.9956H130.285V61.1267H127.432V23.9956H111.16H111.159ZM0 21.9081H3.56624L52.7372 84L32.4168 61.1277L2.98192 24.8742L2.85232 61.1277H0V21.9081ZM146.336 58.4099C145.752 58.4099 145.315 58.0289 145.315 57.5369C145.315 57.0439 145.752 56.6629 146.335 56.6629C146.925 56.6629 147.355 57.0439 147.355 57.5369C147.355 58.0289 146.925 58.4099 146.335 58.4099H146.336ZM149.138 56.1116H150.666C150.687 56.8097 151.291 57.2782 152.179 57.2782C153.171 57.2782 153.733 56.7749 153.733 55.8304V49.851H155.287V55.836C155.287 57.5369 154.121 58.5162 152.192 58.5162C150.382 58.5162 149.14 57.566 149.14 56.1116H149.138ZM157.319 56.0364H158.86C158.991 56.8388 159.921 57.3487 161.261 57.3487C162.509 57.3487 163.425 56.8031 163.425 56.0533C163.425 55.4089 162.843 55.0213 161.516 54.7579L160.226 54.4945C158.416 54.137 157.589 53.3976 157.589 52.1549C157.589 50.6478 159.046 49.645 161.232 49.645C163.265 49.645 164.751 50.6478 164.84 52.0721H163.327C163.182 51.2931 162.378 50.8058 161.211 50.8058C159.982 50.8058 159.165 51.3044 159.165 52.0664C159.165 52.6704 159.692 53.0166 160.997 53.2743L162.1 53.503C164.153 53.9075 165 54.6111 165 55.883C165 57.5011 163.514 58.5162 161.142 58.5162C158.922 58.5162 157.43 57.5481 157.319 56.0354V56.0364Z"
                  fill={color}
                />
              </svg>
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
            borderColor={switchYellowBulueColor}
            borderRadius="4px"
            objectFit="contain"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={VueLogo.src} style={{ objectFit: "scale-down" }} />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              Vue.js
            </Text>
          </Box>
          <Box
            p={8}
            border="1px solid"
            borderColor={switchYellowBulueColor}
            borderRadius="4px"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={NuxtLogo.src} style={{ objectFit: "scale-down" }} />
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
            borderColor={switchYellowBulueColor}
            borderRadius="4px"
            objectFit="contain"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img
                src={MaterialUILogo.src}
                style={{ objectFit: "scale-down" }}
              />
            </AspectRatio>
            <Text fontSize="3xl" fontFamily="Rajdhani" textAlign="center">
              Material UI
            </Text>
          </Box>
          <Box
            p={8}
            border="1px solid"
            borderColor={switchYellowBulueColor}
            borderRadius="4px"
          >
            <AspectRatio w={44} ratio={4 / 3}>
              <img src={ChakraUILogo.src} style={{ objectFit: "scale-down" }} />
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
