import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  Link
} from '@chakra-ui/react'
import React, { useState } from "react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { InfoOutlineIcon } from '@chakra-ui/icons'

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [next, setNext] = useState(false)
  const [pass, setPass] = useState(true)
  const [sign,setSign] =useState(true)
  return (
    <>

      <Flex flexDirection="row-reverse" padding={2} gap="20px" backgroundColor="#f5f5f5">
        <Link style={{ paddingRight: "50px", fontSize: "14px", color: "teal" }} onClick={onOpen}>Sign In / Sign Up</Link>
        <p style={{ fontSize: "14px", color: "teal" }}>English ($)</p>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent p={6}>
          {sign?<ModalHeader textAlign="center">Sign In</ModalHeader>:<ModalHeader textAlign="center">Sign Up</ModalHeader>}
          <hr />
          {sign?<Text textAlign="center">
            Sign in so you can save items to your wishlists, track your orders, and check out faster!
          </Text>:<Text textAlign="center">
          Welcome to Anthropologie! It's quick and easy to set up an account.
          </Text>}
          <ModalCloseButton />
          <ModalBody pb={6}>
            {!next ? <FormControl>
              <FormLabel>Email*</FormLabel>
              <Input borderRadius="2px" ref={initialRef} />
            </FormControl> : <FormControl>
              <FormLabel>Password*</FormLabel>
              <Input type={pass ? "password" : "text"} borderRadius="2px" ref={initialRef} />
            </FormControl>}

            {!next ? <FormControl>
              <Checkbox mt={3} defaultChecked>Keep me signed in{<InfoOutlineIcon ml={2} color="teal" />}</Checkbox>
            </FormControl> : <Link marginTop="20px" color="blue" onClick={() => {
              setPass(!pass)
            }}>{pass ? "Show Password" : "Hide Password"}</Link>}

          </ModalBody>

          <ModalFooter justifyContent="center">

            {sign?<Button borderRadius="none" bg='#3d475c' color="white" w="100%" onClick={() => setNext(true)}>NEXT</Button>:<Button borderRadius="none" bg='#3d475c' color="white" w="100%" onClick={() => alert("new")}>NEXT</Button>}
          </ModalFooter>
          {!next ? <ModalFooter justifyContent="center">

            <Button borderRadius="none" border="1px solid black" color="black" w="100%" onClick={onClose}>USE MOBILE NUMBER INSTEAD
            </Button>
          </ModalFooter> : <Link textAlign="center" color="blue" to="/">Forgot Your Password</Link>}
          <hr style={{ marginTop: "20px" }} />
          <ModalHeader textAlign="center">Sign Up</ModalHeader>
          <Text textAlign="center">Welcome! It's quick and easy to set up an account</Text>
          <ModalFooter justifyContent="center">

            <Button borderRadius="none" border="1px solid black" color="black" bg="white" w="100%" onClick={()=>setSign(!sign)}>{sign?"CREATE AN ACCOUNT":"Sign In"}
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  )
}