import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement, Link
} from "@chakra-ui/react"
import React, {useEffect, useRef, useState} from "react";



export default function Form({ register }){
    const [isShown, setShow] = useState(false);
    const [isRegistered, setRegistered] = useState({ message: {}, errors: {} });
    const form = useRef();
    const [bool, setBool] = useState(false);

    useEffect(() => {
        setBool(register);
    }, []);

    useEffect(() => {
        console.log(isRegistered);
    }, [isRegistered]);

    const styleForm = {
        display : 'flex',
        flexDirection : 'column'
    }

    function handleShow(){
        setShow(!isShown);
    }
    async function fetchingPost(options){
        try{
            const response = await fetch('/user', options);
            if (!response.ok) {
                console.log("Erreur lors du fetch,", response.status)
                if(response.status === 422){
                    const data = await response.json();
                    console.warn('Error 422 :', data.errors);
                    setRegistered({
                        message : {},
                        errors : data.errors
                    });
                } else {
                    console.log("err", response.status)}
            } else {
                const success = await response.json();
                console.log('Success :', success.message);
                setRegistered({
                    message: success.message ,
                    errors: {}
                });
                return true;
            }
        }catch(err){
            console.warn("Un probleme est survenu dans le fetch user (POST)", err);
        }
    }

    async function fetchingGet(formulaire){
        try{
            const email = formulaire.get('email');
            const password = formulaire.get('password');
            const response = await fetch(`/user/${email}/${password}`);
            if(!response.ok){
                if(response.status === 422){
                    const data = await response.json();
                    console.warn('Error 422 :', data.errors);
                    setRegistered({
                        message: {},
                        errors: data.errors
                    })
                } else {
                   console.log("err", response.status);
                }
                return false;
            } else {
                const success = await response.json();
                console.log('Success :', success.message);
                setRegistered({
                    message: success.message,
                    errors : {}
                })
                return true;
            }
        }catch (err){
            console.warn("Un probleme est survenu dans le fetch user (GET)", err);
        }
    }

    function handleForm(e){
        e.preventDefault()
        const formData = new FormData(form.current);

        const options = {
            method: 'POST',
            body: formData
        }
        if (bool){
            registered(options);
        } else {
            login(formData);
        }
    }
    async function registered(options) {
        const validate = await fetchingPost(options);
        if(validate){
            console.log('yes')
        }else{console.log('no validate')}
    }
    async function login(formulaire){
        const validate = await fetchingGet(formulaire);
        if(validate){
            console.log('yes')
        }else{console.log('no validate')}
    }

    return(
        <Container border={'1px'} borderColor={'green.400'} p={'3rem'} borderRadius={'15px 0 0 0'} >
            <form ref={form} method="post" onSubmit={ handleForm } style={styleForm}>
                {register &&<FormControl isRequired >
                    <FormLabel>Nom :</FormLabel>
                    <Input borderRadius={'15px 0 0 0'} focusBorderColor="green.400" type="text" name="username"></Input>
                    <FormHelperText color={'red.400'}>{isRegistered.errors.username && isRegistered.errors.username.length > 0 ? isRegistered.errors.username[0] : ''} </FormHelperText>
                </FormControl>}

                <FormControl isRequired>
                    <FormLabel>Email :</FormLabel>
                    <Input borderRadius={'15px 0 0 0'} focusBorderColor="green.400" type="email" name="email"></Input>
                    <FormHelperText
                        color={'red.400'}>{isRegistered.errors.email && isRegistered.errors.email.length > 0 ? isRegistered.errors.email[0] : ''}   </FormHelperText>
                </FormControl>

                <FormControl isRequired >
                    <FormLabel>Mot de passe :</FormLabel>
                    <InputGroup>
                        <Input borderRadius={'15px 0 0 0'} focusBorderColor="green.400" type={isShown ? "text" : "password"} name="password"></Input>
                        <InputRightElement>
                            <Button borderRadius={'0'} h={'auto'} p={'0.5rem'} mr={'0.5rem'} onClick={handleShow} variant={'ghost'} color={'green.400'}>{isShown ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormHelperText color={'red.400'}>{isRegistered.errors.password && isRegistered.errors.password.length > 0 ? isRegistered.errors.password[0] : ''}  </FormHelperText>
                    {
                        !register &&
                        <FormHelperText color={isRegistered.errors === true ? 'red.400' : 'green.400'}>
                            {isRegistered.errors === true  ? "Erreur de mot de passe ou d'adresse mail" : ''}
                        </FormHelperText>
                    }
                </FormControl>

                {register && <FormControl isRequired>
                    <Checkbox colorScheme='green' name="checkBot" value={true}>
                        Etes-vous Humain ?
                    </Checkbox>
                        <FormHelperText color={isRegistered.message ? 'green.400' : 'red.400'}>
                            {typeof isRegistered.message === 'string' ? 'User inscrit !' : ''}
                        </FormHelperText>
                </FormControl> }

                <Button w={'50%'} type="submit" bg={'green.400'} colorScheme="purple" color={'white'} borderRadius={'0 0 0 15px'} marginTop={'10px'}>Se connecter</Button>
                {!register && <Link href={'/register'} textAlign={'end'} color={'purple.500'} my={'1rem'}>Vous n'etes pas inscrit
                    ?</Link>}
            </form>

        </Container>
    )
}
