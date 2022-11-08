import { Stack, Image, Text, Heading, Button, Flex } from "@chakra-ui/react"

export default function Project1() {
    return (
        <>
        <Stack p="5%" border="1px solid black" borderRadius="20px" spacing="20px">
            <Image src="https://i.imgur.com/nQXeVPm.png"></Image>
            <Heading fontSize="22px">FARFETCH - CLONE</Heading>
            <Text>Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center" >REACT | HTML/CSS | JAVASCRIPT | CHAKRAUI | REACT ROUTER DOM | AXIOS | GITHUB</Text>
            <Flex alignSelf="center">
                <Button variant='solid'>Deployed</Button>
                <Button variant='solid'>Codebase</Button>
            </Flex>
        </Stack>
        </>
    )
}