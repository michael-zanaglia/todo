import React from "react";
import Header from "@/Pages/components/Header/Header.jsx";
import Form from "@/Pages/components/Form/Form.jsx";
import { Box, Heading, Flex, Link, Text } from "@chakra-ui/react";

export default function Login(){
    return(
        <Box maxH={'100vh'}>
            <Header/>
            <Flex justify={'center'} align={'center'} direction={'column'} marginTop={'25vh'}>
                <Heading textAlign={'center'}>Connecte toi !</Heading>
                <Form register={false}/>
            </Flex>
        </Box>

    )
}
