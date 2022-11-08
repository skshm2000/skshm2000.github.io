import { Stack, Image, Text, Heading, Button, Flex } from "@chakra-ui/react"

export default function Project2() {
    return (
        <>
        <Stack p="5%" border="1px solid black" borderRadius="20px" spacing="20px">
            <Image src="https://i.imgur.com/lzGH3kb.png" ></Image>
            <Heading fontSize="22px">SENDINBLUE - CLONE</Heading>
            <Text>Sendinblue is the smartest and most intuitive platform for growing businesses.Thrive digitally as we guide your business with the right marketing & sales tools.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center">HTML/CSS | JAVASCRIPT | GITHUB                                                                     
            </Text>
            <Flex alignSelf="center">
                <Button variant='solid'>Deployed</Button>
                <Button variant='solid'>Codebase</Button>
            </Flex>
        </Stack>
        </>
    )
}