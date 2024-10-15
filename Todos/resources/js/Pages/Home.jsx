import Header from "./components/Header/Header"
import { Box, Divider, Container, Flex } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Heading } from "@chakra-ui/react"
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"


export default function Home(){
    const styleCards = {
        maxW : 'sm',
        transition : 'transform 0.3s ease-in-out',
        ':hover':{
            transform : 'translateY(-10px)',
            cursor : 'pointer'
        }
    }

    const test = ['1','2','3','4','5'];

    return (
        <Box bg={'green.300'} minH={'100vh'}>
            <Header/>
            <Heading textAlign={"center"} color={'white'}>Bienvenue sur votre To do list !</Heading>
            <Text>Vos Todo list</Text>

            <Container maxW={'container.xl'}>
                <Flex justify={'space-evenly'} gap={'10px'} wrap={'wrap'} align={'center'}  h={'auto'}>
                    { test.map((t, ind)=>(
                        <Card sx={styleCards} key={ind} w={'40%'} minW={'250px'}>
                            <CardHeader> <Heading textAlign={'center'}> Titre </Heading></CardHeader>
                            <Divider/>
                            <CardBody>
                                <CircularProgress value={40} size={'100px'} color="violet" ml={'50%'} transform={'translate(-50%)'}>
                                    <CircularProgressLabel>any %</CircularProgressLabel>
                                </CircularProgress>
                                <Divider/>
                                <Text size={'md'}> Créé le {t} </Text>
                                <Text size={'md'}> Modifié le  </Text>
                            </CardBody>
                        </Card>
                        ))
                    }
                </Flex>
            </Container>
        </Box>
    )
}
