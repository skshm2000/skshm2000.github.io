import { Stack, Flex, Image, Text, Heading, Spacer, HStack } from "@chakra-ui/react"

export default function ContactMe() {
    return (
        <>
        <Stack direction="column" w="80%" m="auto" pt="8%">
            <Heading textAlign="center">Contact Me</Heading>
            <Text textAlign="center" fontSize="20px">You can contact me at the places mentioned below. <br /> I will try to get back to you as fast as I can.</Text>
            <HStack w="fit-content">
                <Image w="6%" src="https://www.freepnglogos.com/uploads/logo-telepon-png/panduan-mengakses-layanan-konseling-kehamilan-tidak-27.png"></Image>
                <Image w="6%" src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-12.png"></Image>
                <Image w="6%" src="https://www.freepnglogos.com/uploads/linkedin-shiny-icon-logo-5.png"></Image>
            </HStack>
            <Text>😎Made by SAKSHAM</Text>
        </Stack>
        </>
    )
}