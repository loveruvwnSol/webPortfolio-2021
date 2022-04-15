import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ITpassportBook from "../../images/brand/ITpassport.jpeg";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const WorksStudyITpassport = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");
  const switchYellowBulueColor = useColorModeValue("#ECC94B", "#63B3ED");

  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" color={color} bg={bg}>
      <Box h={24} display="flex" justifyContent="center" alignItems="center">
        <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
          Study ITpassport
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
      <Box display="flex" justifyContent="space-around" ml={24}>
        <Box>
          <Image w={96} src={ITpassportBook.src} />
        </Box>
        <Box>
          <Box>
            <Text fontSize={44} fontFamily="Noto Sans JP" fontWeight="bold">
              現在の進捗
            </Text>
            <Divider
              w="660px"
              borderColor={switchYellowBulueColor}
              opacity="1"
            />
            <Text fontSize={24} fontFamily="Noto Sans JP">
              教材の全体の8割ほどまで進みました。
              <br />
              現在は企業のことや経営戦略について勉強。
            </Text>
          </Box>
          <Box mt={14}>
            <Text fontSize={44} fontFamily="Noto Sans JP" fontWeight="bold">
              目標・意識すること
            </Text>
            <Divider
              w="660px"
              borderColor={switchYellowBulueColor}
              opacity="1"
            />
            <Text fontSize={24} fontFamily="Noto Sans JP">
              本来は2021/12に確認テストまで行う予定でしたが、
              <br />
              スケジュール管理があまく行うことができませんでした。
              <br />
              2022年の3月までには合格できるよう頑張ります。
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
