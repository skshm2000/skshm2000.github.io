import {Flex, Spacer, Text, Box} from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import "../CommonCSS.css"


export default function Navbar() {
    return (
        <>
        <Flex className="mainText" pt="25px" pb="25px" alignContent="center" w="100%">
            <Box w={{base:"30%",sm:"40%", md:"40%", lg:"45%"}}>
            <Heading fontSize={{base:"15px",sm:"20px", md:"25px", lg:"30px"}} textAlign="center">{"<"} Saksham Selwal {"/>"}</Heading>
            </Box>
            <Spacer></Spacer>
            <Stack direction="row" w={{base:"65%", sm:"60%", md:"40%", lg:"45%"}} spacing={{base:"10px", sm:"10px", md:"20px", lg:"40px"}}>
                <Button variant='ghost'>Home</Button>
                <Button variant='ghost'>Tech Stack</Button>
                <Button variant='ghost'>Projects</Button>
                <Button variant='ghost'>Contact</Button>
            </Stack>
            <Spacer></Spacer>
        </Flex>
        </>
    )
}