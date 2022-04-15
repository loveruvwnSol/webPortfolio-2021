import { Box, Text, Divider } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import penguinIcon from "../images/brand/penguinIcon.png";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const TopAbout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");
  const border = useColorModeValue("1px solid #000", "1px solid #fff");
  const icon = useColorModeValue("#fff", "#000");
  const switchYellowBulueColor = useColorModeValue("#ECC94B", "#63B3ED");

  return (
    <Box
      bg="#000"
      opacity="0.9"
      color="#ffffff"
      pt={28}
      pb={28}
      color={color}
      bg={bg}
    >
      <Box textAlign="center">
        <Text
          as="u"
          fontSize="3xl"
          color={switchYellowBulueColor}
          fontFamily="Rajdhani"
        >
          About
        </Text>
      </Box>
      <Box ml={350}>
        <Box textAlign="left" display="flex" alignItems="center">
          <Box m={0}>
            <Text fontFamily="Roboto" fontWeight="bold" fontSize={72} m>
              Hi
              <Text as="span" color={switchYellowBulueColor}>
                .
              </Text>
            </Text>
            <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
              I'm Shogo Arai
            </Text>
          </Box>
          <Box ml={50}>
            <Image src={penguinIcon.src} />
          </Box>
        </Box>
        <Divider
          w={20}
          borderColor={switchYellowBulueColor}
          opacity="1"
          mb={5}
        />
        <Box display="flex" justifyContent="left" alignItems="center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="M12.0001 22C10.4882 22.0043 8.99532 21.6622 7.6361 21C7.13865 20.758 6.66203 20.4754 6.2111 20.155L6.0741 20.055C4.83392 19.1396 3.81997 17.9522 3.1101 16.584C2.37584 15.1679 1.99501 13.5952 2.00005 12C2.00005 6.47715 6.47725 2 12.0001 2C17.5229 2 22.0001 6.47715 22.0001 12C22.0051 13.5944 21.6247 15.1664 20.8911 16.582C20.1822 17.9494 19.1697 19.1364 17.9311 20.052C17.4639 20.394 16.968 20.6951 16.4491 20.952L16.3691 20.992C15.009 21.6577 13.5144 22.0026 12.0001 22ZM12.0001 17C10.5016 16.9971 9.12776 17.834 8.4431 19.167C10.6845 20.2772 13.3157 20.2772 15.5571 19.167V19.162C14.8716 17.8305 13.4977 16.9954 12.0001 17ZM12.0001 15C14.1662 15.0028 16.1635 16.1701 17.2291 18.056L17.2441 18.043L17.2581 18.031L17.2411 18.046L17.2311 18.054C19.7601 15.8691 20.6644 12.3423 19.4987 9.21011C18.3331 6.07788 15.3432 4.00032 12.0011 4.00032C8.65901 4.00032 5.66909 6.07788 4.50345 9.21011C3.33781 12.3423 4.2421 15.8691 6.7711 18.054C7.83736 16.169 9.83446 15.0026 12.0001 15ZM12.0001 14C9.79096 14 8.0001 12.2091 8.0001 10C8.0001 7.79086 9.79096 6 12.0001 6C14.2092 6 16.0001 7.79086 16.0001 10C16.0001 11.0609 15.5787 12.0783 14.8285 12.8284C14.0784 13.5786 13.061 14 12.0001 14ZM12.0001 8C10.8955 8 10.0001 8.89543 10.0001 10C10.0001 11.1046 10.8955 12 12.0001 12C13.1047 12 14.0001 11.1046 14.0001 10C14.0001 8.89543 13.1047 8 12.0001 8Z"
              fill={icon}
            />
          </svg>
          <Text fontSize="3xl" fontFamily="Rajdhani">
            N high school & N Code Labo
          </Text>
        </Box>
        <Box display="flex" justifyContent="left" alignItems="center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="M14.641 22.024C13.4805 22.0201 12.5415 21.0785 12.541 19.918V17.811H14.641C15.8047 17.811 16.748 18.7543 16.748 19.918C16.748 21.0817 15.8047 22.025 14.641 22.025V22.024ZM9.359 22.024C8.19847 22.0201 7.25955 21.0785 7.259 19.918V14.644C7.259 13.8925 7.65993 13.1981 8.31075 12.8223C8.96158 12.4466 9.76343 12.4466 10.4143 12.8223C11.0651 13.1981 11.466 13.8925 11.466 14.644V19.918C11.4655 21.0813 10.5223 22.024 9.359 22.024ZM19.909 16.751H14.641C13.4776 16.751 12.5345 15.8079 12.5345 14.6445C12.5345 13.4811 13.4776 12.538 14.641 12.538H19.909C21.0724 12.538 22.0155 13.4811 22.0155 14.6445C22.0155 15.8079 21.0724 16.751 19.909 16.751ZM4.092 16.751C2.92862 16.751 1.9855 15.8079 1.9855 14.6445C1.9855 13.4811 2.92862 12.538 4.092 12.538H6.192V14.644C6.192 15.8069 5.24989 16.7499 4.087 16.751H4.092ZM19.909 11.462H17.809V9.356C17.8123 8.19699 18.754 7.2598 19.913 7.262C21.072 7.26421 22.0101 8.20498 22.009 9.36399C22.0079 10.523 21.068 11.462 19.909 11.462ZM14.641 11.462C13.4805 11.4581 12.5415 10.5165 12.541 9.356V4.082C12.541 3.33049 12.9419 2.63607 13.5928 2.26032C14.2436 1.88456 15.0454 1.88456 15.6963 2.26032C16.3471 2.63607 16.748 3.33049 16.748 4.082V9.356C16.7475 10.5193 15.8043 11.462 14.641 11.462ZM9.359 11.462H4.092C2.92862 11.462 1.9855 10.5189 1.9855 9.3555C1.9855 8.19211 2.92862 7.249 4.092 7.249H9.359C10.5224 7.249 11.4655 8.19211 11.4655 9.3555C11.4655 10.5189 10.5224 11.462 9.359 11.462ZM11.459 6.18901H9.359C8.50676 6.19143 7.73706 5.67997 7.40914 4.89333C7.08122 4.10669 7.25973 3.19996 7.86136 2.59632C8.46299 1.99269 9.36912 1.81116 10.1569 2.13646C10.9446 2.46175 11.4586 3.22975 11.459 4.082V6.188V6.18901Z"
              fill={icon}
            />
          </svg>

          <Text fontSize="3xl" fontFamily="Rajdhani">
            Slack : Shogo Arai
          </Text>
        </Box>
        <Box display="flex" justifyContent="left" alignItems="center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="M12.026 2C7.13292 1.99937 2.9618 5.54799 2.17838 10.3779C1.39497 15.2079 4.23058 19.893 8.87299 21.439C9.37299 21.529 9.55199 21.222 9.55199 20.958C9.55199 20.721 9.54398 20.093 9.54099 19.258C6.76599 19.858 6.17999 17.92 6.17999 17.92C5.9973 17.317 5.60456 16.7993 5.07299 16.461C4.17299 15.842 5.14199 15.856 5.14199 15.856C5.78266 15.9438 6.34654 16.3235 6.66899 16.884C6.94192 17.3803 7.40174 17.747 7.94629 17.9026C8.49084 18.0583 9.075 17.99 9.56899 17.713C9.61541 17.207 9.84052 16.7341 10.204 16.379C7.98999 16.128 5.66199 15.272 5.66199 11.449C5.6497 10.4602 6.01688 9.5043 6.68799 8.778C6.38434 7.91731 6.4201 6.97325 6.78799 6.138C6.78799 6.138 7.62499 5.869 9.52999 7.159C11.1638 6.71101 12.8881 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0375 9.50423 18.4044 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5611 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.659 15.203 21.874 10.3743C21.089 5.54565 16.918 1.99888 12.026 2Z"
              fill={icon}
            />
          </svg>
          <Text fontSize="3xl" fontFamily="Rajdhani">
            GitHub : loveruvwnSo1
          </Text>
        </Box>
        <Button
          ml={3}
          mt={3}
          fontFamily="Rajdhani"
          color={switchYellowBulueColor}
          borderColor={switchYellowBulueColor}
          variant="outline"
          _hover={{ background: "#ECC94B", color: "#ffffff" }}
        >
          Contact me
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        {/* <Image src={arrowIcon.src} /> */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.03 16.93L24 33.9L40.97 16.93L38.142 14.1L24 28.244L9.858 14.1L7.03 16.93Z"
            fill={switchYellowBulueColor}
          />
        </svg>
      </Box>
    </Box>
  );
};
