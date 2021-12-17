import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Flex, Heading } from "@chakra-ui/layout";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

// const IndexPage = () => {
//   const formBackground = useColorModeValue("gray.100", "gray.700");

//   return (
//     <Flex height="100vh" alignItems="center" justifyContent="center">
//       <Flex direction="column" background={formBackground} p={12} rounded={6}>
//         <Heading mb={6}>Log in</Heading>
//         <Input
//           placeholder="lazar@chakra-ui.com"
//           variant="filled"
//           mb={3}
//           type="email"
//         />
//         <Input placeholder="*******" variant="filled" mb={6} type="password" />
//         <Button colorScheme="teal">Log in</Button>
//       </Flex>
//     </Flex>
//   );
// };

// export default IndexPage;

function TransitionExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen}>Discard</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default TransitionExample