import { Box, Text } from "@chakra-ui/layout";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");

  return (
    <Box bg="#000" opacity="0.9" bg={bg}>
      <Text
        fontSize="lg"
        fontFamily="Rajdhani"
        color="#ECC94B"
        textAlign="right"
        mr={12}
      >
        MP.2021
      </Text>
    </Box>
  );
};
