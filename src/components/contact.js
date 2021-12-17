import { Box, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const TopContact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");

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
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
          Contact
        </Text>
      </Box>
      <Box mt={10}>
        <Text
          fontFamily="Roboto"
          fontWeight="bold"
          fontSize={72}
          textAlign="center"
        >
          Contact me
          <Text as="span" color="#ECC94B">
            ?
          </Text>
        </Text>
      </Box>
      <Text fontFamily="Noto Sans JP" fontSize="sm" textAlign="center">
        質問等ありましたらこちらから
      </Text>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box color="#000">
          <Box mt={14}>
            <InputGroup>
              <Input
                border="1px solid rgba(236, 201, 75, 0.8)"
                variant="outline"
                bg="ffffff"
                w={96}
                h={12}
                placeholder="Name"
                focusBorderColor="#ECC94B"
              ></Input>
            </InputGroup>
          </Box>
          <Box mt={14}>
            <InputGroup>
              <Input
                border="1px solid rgba(236, 201, 75, 0.8)"
                variant="outline"
                bg="ffffff"
                w={80}
                h={12}
                placeholder="EmailAddress"
                focusBorderColor="#ECC94B"
              ></Input>
              <InputRightAddon bg="#ECC94B" h={12} children=".com" />
            </InputGroup>
          </Box>
          <Box mt={14}>
            <InputGroup>
              <Input
                border="1px solid rgba(236, 201, 75, 0.8)"
                variant="outline"
                bg="ffffff"
                w={96}
                h={64}
                placeholder="Message"
                focusBorderColor="#ECC94B"
              ></Input>
            </InputGroup>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              mt={14}
              p={6}
              fontFamily="Rajdhani"
              color="#ECC94B"
              borderColor="#ECC94B"
              variant="outline"
              _hover={{ background: "#ECC94B", color: "#ffffff" }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
