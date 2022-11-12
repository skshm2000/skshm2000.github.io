import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"

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
            <Flex alignSelf="center" w="50%">
            <Spacer></Spacer>
                <a href="https://spectacular-syrniki-f45532.netlify.app/" target="_blank">
                    <Button variant='solid'>Deployed</Button>
                </a>
                <Spacer></Spacer>
                <a href="https://github.com/skshm2000/silly-ink-340" target="_blank">
                    <Button variant='solid'>Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </>
    )
}