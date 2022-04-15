import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

export const TopContact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#000", "#fff");
  const color = useColorModeValue("#fff", "#000");
  const switchYellowBulueColor = useColorModeValue("#ECC94B", "#63B3ED");

  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
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
      <Box textAlign="center">
        <Text
          as="u"
          fontSize="3xl"
          color={switchYellowBulueColor}
          fontFamily="Rajdhani"
        >
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
          Contact me{" "}
          <Text as="span" color={switchYellowBulueColor}>
            ?
          </Text>
        </Text>
      </Box>
      <Text fontFamily="Noto Sans JP" fontSize="sm" textAlign="center">
        質問等ありましたらこちらから
      </Text>
      <Box>
        {/* <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2} fontFamily="Roboto">
            Can't send your message.
          </AlertTitle>
          <AlertDescription fontFamily="Roboto">
            Sorry, Message sending function is under development.
          </AlertDescription>
          <CloseButton right="8px" top="8px" />
        </Alert> */}
      </Box>
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
                focusBorderColor={switchYellowBulueColor}
                onChange={handleChange}
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
                focusBorderColor={switchYellowBulueColor}
                onChange={handleChange}
              ></Input>
              <InputRightAddon
                bg={switchYellowBulueColor}
                h={12}
                children=".com"
              />
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
                focusBorderColor={switchYellowBulueColor}
                onChange={handleChange}
              ></Input>
            </InputGroup>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              mt={14}
              p={6}
              fontFamily="Rajdhani"
              color={switchYellowBulueColor}
              borderColor={switchYellowBulueColor}
              variant="outline"
              _hover={{ background: "#ECC94B", color: "#ffffff" }}
              // onClick={}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
