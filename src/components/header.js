import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link, Button, IconButton, Icon } from "@chakra-ui/react";
import MoonButtonIcon from "../images/brand/moon.svg";
import SunIconButton from "../images/brand/sun.svg";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");
  const sunMoonSwitch = useColorModeValue(SunIconButton, MoonButtonIcon);

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
          <Text as="span" color="#ECC94B">
            .
          </Text>
          2021
        </Text>
      </Link>
      <Divider w={96} borderColor="#ECC94B" opacity="1" ml={14} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={14} mr={14}>
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          transition="all .0.2s"
          _hover={{ textDecoration: "underline 1px" }}
        >
          About
        </Text>
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          _hover={{ textDecoration: "underline 1px" }}
        >
          Works
        </Text>
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          _hover={{ textDecoration: "underline 1px" }}
        >
          Contact
        </Text>
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
