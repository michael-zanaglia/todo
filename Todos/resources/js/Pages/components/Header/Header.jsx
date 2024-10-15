import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex,
    Spacer,
    HStack,
    Link,
    Heading
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
      <>
        <Button colorScheme='green' ref={btnRef} onClick={onOpen} variant={'solid'} borderRadius={'0 0 5px 0'}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" style={{width:'32px', height:'32px'}}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path>
            <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> </g>
        </svg>
        </Button>
        <Drawer isOpen={isOpen} placement='top' onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay bg={'green.400'}/>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><Heading>To do List</Heading></DrawerHeader>

            <DrawerBody>
            </DrawerBody>

            <DrawerFooter>
                <HStack spacing={'15px'}>
                    <Link href='/login'>Se connecter</Link>
                    <Link href='/register'>S'inscrire</Link>
                </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
