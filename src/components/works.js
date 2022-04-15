import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { PencilIcon } from "./Icons/Pencil";
import { JavaScriptIcon } from "./Icons/Javascript";
import { DevicesIcon } from "./Icons/Devices";

export const TopWorks = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "gray.100");
  const color = useColorModeValue("#fff", "#000");
  const border = useColorModeValue("1px solid #fff", "1px solid #000");
  const icon = useColorModeValue("#fff", "#000");
  const switchYellowBulueColor = useColorModeValue("#ECC94B", "#63B3ED");
  const switchYellowBulueBorder = useColorModeValue(
    "1px solid #ECC94B",
    "1px solid #63B3ED"
  );

  return (
    <Box
      bg="#000"
      opacity="0.8"
      color="#ffffff"
      pt={28}
      pb={28}
      color={color}
      bg={bg}
    >
      <Box textAlign="center">
        <Box>
          <Text
            as="u"
            fontSize="3xl"
            color={switchYellowBulueColor}
            fontFamily="Rajdhani"
          >
            Works
          </Text>
        </Box>
        <Box mt={10}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            Works
            <Text as="span" color={switchYellowBulueColor}>
              .
            </Text>
          </Text>
        </Box>
        <Text fontFamily="Noto Sans JP" fontSize="sm">
          今年の主な活動一覧です
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={10}
          mb={10}
        >
          <Divider
            h={14}
            orientation="vertical"
            borderColor={switchYellowBulueColor}
            opacity="1"
          />
        </Box>
      </Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Link href="/makeWebsitePage" _hover={{ textDecoration: "none" }}>
          <Box
            p={10}
            border="1px solid #ffffff"
            borderRadius="4px"
            border={border}
            _hover={{
              color: switchYellowBulueColor,
              border: switchYellowBulueBorder,
            }}
          >
            <Box display="flex" justifyContent="center">
              <DevicesIcon boxSize={20} />
            </Box>
            <Text fontSize="3xl" fontFamily="Rajdhani">
              Make Website
            </Text>
            <Text
              fontSize="sm"
              fontFamily="Rajdhani"
              color={switchYellowBulueColor}
            >
              Programming
            </Text>
          </Box>
        </Link>

        <Link href="/newLanguagePage" _hover={{ textDecoration: "none" }}>
          <Box
            p={10}
            bg="000"
            border="1px solid #ffffff"
            borderRadius="4px"
            border={border}
            _hover={{
              color: switchYellowBulueColor,
              border: switchYellowBulueBorder,
            }}
          >
            <Box display="flex" justifyContent="center">
              <JavaScriptIcon fill={icon} boxSize={20} />
            </Box>
            <Text fontSize="3xl" fontFamily="Rajdhani">
              New Language
            </Text>
            <Text
              fontSize="sm"
              fontFamily="Rajdhani"
              color={switchYellowBulueColor}
            >
              Programming
            </Text>
          </Box>
        </Link>
        <Link href="/studyITpassportPage" _hover={{ textDecoration: "none" }}>
          <Box
            p={10}
            bg="000"
            border="1px solid #ffffff"
            borderRadius="4px"
            border={border}
            _hover={{
              color: switchYellowBulueColor,
              border: switchYellowBulueBorder,
            }}
          >
            <Box display="flex" justifyContent="center">
              <PencilIcon fill={icon} boxSize={20} />
            </Box>
            <Text fontSize="3xl" fontFamily="Rajdhani">
              Study ITpassport
            </Text>
            <Text
              fontSize="sm"
              fontFamily="Rajdhani"
              color={switchYellowBulueColor}
            >
              study
            </Text>
          </Box>
        </Link>
      </Grid>
    </Box>
  );
};
