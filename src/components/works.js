import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import deviceIcon from "../images/brand/device.svg";
import javasciprtIcon from "../images/brand/javascript.svg";
import editIcon from "../images/brand/edit.svg";
import { Link } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const TopWorks = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "gray.100");
  const color = useColorModeValue("#fff", "#000");
  const border = useColorModeValue("1px solid #fff", "1px solid #000");
  const icon = useColorModeValue("#fff", "#000");

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
          <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
            Works
          </Text>
        </Box>
        <Box mt={10}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            Works
            <Text as="span" color="#ECC94B">
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
            borderColor="#ECC94B"
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
              border: "1px solid rgba(236, 201, 75, 0.8)",
              color: "#ECC94B",
            }}
          >
            <Box display="flex" justifyContent="center">
              <svg
                width="144"
                height="72"
                viewBox="0 0 144 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63 57H9C5.68629 57 3 54.3137 3 51V48H9V21C9 17.6863 11.6863 15 15 15H57C60.3137 15 63 17.6863 63 21V48H69V51C69 54.3137 66.3137 57 63 57ZM15 21V48H57V21H15Z"
                  fill={icon}
                />
                <path
                  d="M122.25 69H92.25C88.9363 69 86.25 66.3137 86.25 63V9C86.25 5.68629 88.9363 3 92.25 3H122.25C125.564 3 128.25 5.68629 128.25 9V63C128.25 66.3137 125.564 69 122.25 69ZM92.25 9V63H122.25V9H92.25ZM107.25 60C105.593 60 104.25 58.6569 104.25 57C104.25 55.3431 105.593 54 107.25 54C108.907 54 110.25 55.3431 110.25 57C110.25 58.6569 108.907 60 107.25 60Z"
                  fill={icon}
                />
              </svg>
            </Box>
            <Text fontSize="3xl" fontFamily="Rajdhani">
              Make Website
            </Text>
            <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
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
              border: "1px solid rgba(236, 201, 75, 0.8)",
              color: "#ECC94B",
            }}
          >
            <Box display="flex" justifyContent="center">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63 63H9V9H63V63ZM27.3 51.696L23.196 54.228C23.8356 55.6318 24.8722 56.8176 26.178 57.639C27.5965 58.4519 29.2083 58.8665 30.843 58.839C31.7005 58.833 32.5546 58.7324 33.39 58.539C35.1378 58.109 36.6196 56.9546 37.464 55.365C38.3055 53.385 38.6157 51.2196 38.364 49.083C38.364 48.675 38.364 48.258 38.364 47.838C38.379 44.757 38.364 41.622 38.364 38.586C38.364 37.038 38.364 35.487 38.364 33.933V33.807H33.3C33.3 35.985 33.3 38.158 33.3 40.326C33.3 42.507 33.3 44.685 33.3 46.869C33.3 47.427 33.3 47.973 33.3 48.498C33.4506 49.9954 33.342 51.5075 32.979 52.968C32.5432 53.8091 31.6464 54.3077 30.702 54.234C30.279 54.2328 29.8584 54.1691 29.454 54.045C28.6415 53.6202 27.9865 52.9463 27.585 52.122L27.486 51.954C27.393 51.795 27.33 51.684 27.3 51.684V51.696ZM45.147 51.096L41.028 53.457C41.3652 54.1949 41.8304 54.8672 42.402 55.443C42.543 55.599 42.702 55.767 42.849 55.953C44.8632 57.7543 47.4955 58.7077 50.196 58.614C53.6907 58.9584 56.9924 56.9517 58.296 53.691V53.667C58.6374 52.4685 58.6919 51.2065 58.455 49.983L58.557 50.13C58.113 47.343 56.094 45.408 51.801 43.665C51.468 43.509 51.123 43.365 50.787 43.215C49.452 42.639 48.192 42.099 47.754 41.115C47.5588 40.6088 47.5232 40.055 47.652 39.528C47.9626 38.4724 48.9812 37.7878 50.076 37.899C50.4102 37.899 50.7427 37.9475 51.063 38.043C52.0503 38.3756 52.849 39.1133 53.259 40.071C55.584 38.55 55.584 38.55 57.207 37.539C56.8357 36.9052 56.3939 36.3155 55.89 35.781C54.35 34.1301 52.1404 33.2728 49.89 33.453H49.53L47.946 33.654C46.4584 33.9879 45.1125 34.7788 44.097 35.916C42.9032 37.4089 42.3656 39.322 42.607 41.2182C42.8484 43.1145 43.8482 44.8318 45.378 45.978C46.6919 46.8773 48.1091 47.6155 49.599 48.177C51.522 48.987 53.181 49.677 53.517 50.94C53.7203 51.6715 53.5705 52.4559 53.112 53.061C52.2976 53.8652 51.1711 54.271 50.031 54.171C49.7171 54.17 49.4035 54.15 49.092 54.111C47.3954 53.7308 45.9511 52.6254 45.141 51.087L45.147 51.096Z"
                  fill={icon}
                />
              </svg>
            </Box>
            <Text fontSize="3xl" fontFamily="Rajdhani">
              New Language
            </Text>
            <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
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
              border: "1px solid rgba(236, 201, 75, 0.8)",
              color: "#ECC94B",
              fill: "#ECC94B",
            }}
          >
            <Box display="flex" justifyContent="center">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.26 61.737C12.4184 61.7356 11.6162 61.3807 11.049 60.759C10.4713 60.1424 10.1843 59.3086 10.26 58.467L10.995 50.385L44.949 16.443L55.56 27.051L21.615 60.99L13.533 61.725C13.44 61.734 13.347 61.737 13.26 61.737ZM57.678 24.93L47.07 14.322L53.433 7.95902C53.9957 7.39569 54.7593 7.07916 55.5555 7.07916C56.3517 7.07916 57.1153 7.39569 57.678 7.95902L64.041 14.322C64.6043 14.8847 64.9209 15.6483 64.9209 16.4445C64.9209 17.2407 64.6043 18.0043 64.041 18.567L57.681 24.927L57.678 24.93Z"
                  fill={icon}
                />
              </svg>
            </Box>
            <Text fontSize="3xl" fontFamily="Rajdhani">
              Study ITpassport
            </Text>
            <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
              study
            </Text>
          </Box>
        </Link>
      </Grid>
    </Box>
  );
};
