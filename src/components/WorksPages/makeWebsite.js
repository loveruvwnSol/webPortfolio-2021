import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import sharevelImg from "../../images/brand/sharevel.png";
import paymentAppImg from "../../images/brand/paymentApp.png";
import pronAlfaImg from "../../images/brand/pronAlfa.png";
import progateImg from "../../images/brand/progate.png";
import deitoraImg from "../../images/brand/deitora.png";
import myWorkImg from "../../images/brand/myWork.png";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const WorksMakeWebsite = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");
  const switchYellowBulueColor = useColorModeValue("#ECC94B", "#63B3ED");

  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff",
      threshold: 1,
    },
    slide1: {
      background: "#FEA900",
    },
    slide2: {
      background: "#B3DC4A",
    },
    slide3: {
      background: "#6AC0FF",
    },
  };

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
      <Box ml={150}>
        <Box textAlign="left" display="flex" alignItems="center">
          <Box m={0}>
            <Text fontFamily="Roboto" fontWeight="bold" fontSize={72} m>
              I Made{" "}
              <Text as="span" color={switchYellowBulueColor}>
                Any{" "}
              </Text>
              <Text
                as="span"
                fontFamily="Roboto"
                fontWeight="bold"
                fontSize={72}
              >
                Website
              </Text>
              <Text
                as="span"
                fontFamily="Roboto"
                fontWeight="bold"
                fontSize={72}
                color={switchYellowBulueColor}
              >
                .
              </Text>
              <Text
                as="span"
                fontFamily="Rajdhani"
                fontWeight="bold"
                fontSize={24}
                ml={24}
                color={switchYellowBulueColor}
              >
                Can slide images and can jump to Webpages
              </Text>
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="left">
          <Divider
            h={500}
            orientation="vertical"
            borderColor={switchYellowBulueColor}
            opacity="1"
            mr={20}
          />
          <AutoPlaySwipeableViews enableMouseEvents>
            <Box>
              <Image w="80%" src={sharevelImg.src} />
              <Link href="https://loveruvwnsol.github.io/ShareVel/">
                <Text fontSize="3xl" fontFamily="Rajdhani">
                  ShareVel
                </Text>
              </Link>
            </Box>
            <Box>
              <Image w="80%" src={paymentAppImg.src} />
              <Link href="https://loveruvwnsol.github.io/payment-app/">
                <Text fontSize="3xl" fontFamily="Rajdhani">
                  payment-app
                </Text>
              </Link>
            </Box>
            <Box>
              <Image w="80%" src={progateImg.src} />
              <Link href="">
                <Text fontSize="3xl" fontFamily="Rajdhani">
                  Progate - ※copy
                </Text>
              </Link>
            </Box>
            <Box>
              <Image w="80%" src={deitoraImg.src} />
              <Link href="">
                <Text fontSize="3xl" fontFamily="Noto Sans JP">
                  デイトラ{" "}
                  <Text as="span" fontFamily="Rajdhani">
                    - ※copy
                  </Text>
                </Text>
              </Link>
            </Box>
            <Box>
              <Image w="80%" src={myWorkImg.src} />
              <Link href="https://loveruvwnsol.github.io/My_work/">
                <Text fontSize="3xl" fontFamily="Rajdhani">
                  My work - ※copy
                </Text>
              </Link>
            </Box>
            <Box>
              <Image w="80%" src={pronAlfaImg.src} />
              <Link href="https://loveruvwnsol.github.io/alfa-Yokohama-D-8/">
                <Text fontSize="3xl" fontFamily="Rajdhani">
                  ProjectN alfa WebGame
                </Text>
              </Link>
            </Box>
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
    </Box>
  );
};
