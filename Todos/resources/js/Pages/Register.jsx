import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import { Flex, Heading } from "@chakra-ui/react"


export default function Register(){
    return (
        <>
            <Header/>
            <Flex as={'div'} h={'90vh'} justify={'center'} align={'center'} direction={'column'}>
                <Heading >S'inscrire !</Heading>
                <Form register={true}/>
            </Flex>
        </>

    )
}
