import { Stack, Flex, Image, Text, Heading, Tooltip, Box } from "@chakra-ui/react"
import "./CommonCSS.css"

export default function ContactMe() {
    return (
        <>
        <Stack direction="column" w="80%" m="auto" pt="8%" spacing="30px">
            <Heading textAlign="center">Contact Me</Heading>
            <Text textAlign="center" fontSize="20px">You can contact me at the places mentioned below. <br /> I will try to get back to you as fast as I can.</Text>
            <Flex justifyContent="space-around" w="80%" alignSelf="center">
                <Tooltip label="+91 9467299188">
                    <Image w="6%" src="https://www.freepnglogos.com/uploads/logo-telepon-png/panduan-mengakses-layanan-konseling-kehamilan-tidak-27.png"></Image>
                </Tooltip>
                <Tooltip label="sakshamselwal2000@gmail.com">
                    <Image w="6%" src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-12.png"></Image>
                </Tooltip>
                <Tooltip label="Saksham selwal">
                    <Image w="6%" src="https://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png"></Image>
                </Tooltip>
            </Flex>
            <Stack>
                <Text textAlign="center">😎Made by <span className="stylerFont">saksham</span></Text>
                <Text textAlign="center">2022</Text>
            </Stack>
        </Stack>
        </>
    )
}