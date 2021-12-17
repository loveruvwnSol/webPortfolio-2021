import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ITpassportBook from "../../images/brand/ITpassport.jpeg";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const WorksStudyITpassport = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");

  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" color={color} bg={bg}>
      <Box h={24} display="flex" justifyContent="center" alignItems="center">
        <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
          Study ITpassport
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
      <Box display="flex" justifyContent="space-around" ml={24}>
        <Box>
          <Image w={96} src={ITpassportBook.src} />
        </Box>
        <Box>
          <Box>
            <Text fontSize={44} fontFamily="Noto Sans JP" fontWeight="bold">
              現在の進捗
            </Text>
            <Divider w="660px" borderColor="#ECC94B" opacity="1" />
            <Text fontSize={24} fontFamily="Noto Sans JP">
              TextTextTextTextTextTextTextTextTextTextTextTextTextText
            </Text>
          </Box>
          <Box mt={14}>
            <Text fontSize={44} fontFamily="Noto Sans JP" fontWeight="bold">
              目標・意識すること
            </Text>
            <Divider w="660px" borderColor="#ECC94B" opacity="1" />
            <Text fontSize={24} fontFamily="Noto Sans JP">
              TextTextTextTextTextTextTextTextTextTextTextTextTextText
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
