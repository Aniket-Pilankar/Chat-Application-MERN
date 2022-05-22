import { Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState();

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }
    const postDetails = (pics) => {

    }

    const submitHandler = () => {

    }

    return (
        <VStack spacing="5px">
            <FormControl id='first-name' isRequired>
                <FormLabel htmlFor='email'>Name</FormLabel>
                <Input type='text' placeholder='Enter Your Name' onChange={(e) => {
                    setName(e.target.value)
                }} />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Input type='email' placeholder='Enter Your email' onChange={(e) => {
                    setEmail(e.target.value)
                }} />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel >Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel >Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>
            <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}

            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default SignUp