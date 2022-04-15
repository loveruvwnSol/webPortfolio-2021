import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/react";
import MoonButtonIcon from "../../images/brand/moon.svg";
import SunIconButton from "../../images/brand/sun.svg";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const WorksHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");
  const sunMoonSwitch = useColorModeValue(SunIconButton, MoonButtonIcon);
  const switchYellowBulueColor = useColorModeValue("#ECC94B", "#63B3ED");

  return (
    <Box
      bg="#000"
      opacity="0.9"
      color="#ffffff"
      h={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color={color}
      bg={bg}
    >
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
          Mp
          <Text as="span" color={switchYellowBulueColor}>
            .
          </Text>
          2021{" "}
          <Text as="span" color={switchYellowBulueColor}>
            /{" "}
          </Text>
          <Text as="span" fontSize={32}>
            works
          </Text>
        </Text>
      </Link>
      <Divider
        w={96}
        borderColor={switchYellowBulueColor}
        opacity="1"
        ml={14}
      />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={14} mr={14}>
        <Link href="/makeWebsitePage" _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="2xl"
            fontFamily="Rajdhani"
            transition="all .0.2s"
            _hover={{ textDecoration: "underline 1px" }}
          >
            make Website
          </Text>
        </Link>
        <Link href="/newLanguagePage" _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="2xl"
            fontFamily="Rajdhani"
            _hover={{ textDecoration: "underline 1px" }}
          >
            new language
          </Text>
        </Link>
        <Link href="/studyITpassportPage" _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="2xl"
            fontFamily="Rajdhani"
            _hover={{ textDecoration: "underline 1px" }}
          >
            ITpassport
          </Text>
        </Link>
      </Grid>
      <Divider
        h={14}
        orientation="vertical"
        borderColor="ffffff"
        opacity="1"
        mr={14}
      />
      <Image src={sunMoonSwitch.src} onClick={toggleColorMode}></Image>
    </Box>
  );
};
