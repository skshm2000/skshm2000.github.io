import { Stack, Flex, Image, Text, Heading, Tooltip, Box } from "@chakra-ui/react"
import "./CommonCSS.css"
import { AiFillPhone, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function ContactMe() {
    return (
        <>
        <Stack direction="column" w={
            { 
                base:'95%',
                sm: '95%',
                md: '90%',
                lg: '90%',
                xl: '80%',
                '2xl': '80%'}
        } m="auto" pt="8%" spacing="30px">
            <Text textAlign="center" className='heading1'fontSize={{ 
                base:'35px',
                sm: '35px',
                md: '40px',
                lg: '40px',
                xl: '40px',
                '2xl': '40px'}}>Contact Me</Text>
            <Text textAlign="center" fontSize={
                { 
                    base:'18px',
                    sm: '18px',
                    md: '18px',
                    lg: '20px',
                    xl: '20px',
                    '2xl': '20px'}
            }>You can contact me at the places below. <br /> I will try to get back to you as fast as I can.</Text>
            <Flex justifyContent="space-around" w={{ 
                base:'100%',
                sm: '100%',
                md: '90%',
                lg: '80%',
                xl: '80%',
                '2xl': '80%'}} 
                alignSelf="center"
            >
                <Tooltip label="+91 9467299188">
                    <div>
                    <AiFillPhone size='50px' />
                    </div>
                </Tooltip>
                <Tooltip label="sakshamselwal2000@gmail.com">
                    <div>
                    <AiFillMail size='50px'/>
                    </div>
                </Tooltip>
                <Tooltip label="Saksham selwal">
                    <div>
                    <AiFillLinkedin size='50px'/>
                    </div>
                </Tooltip>
            </Flex>
            <Stack>
                <Text textAlign="center">Made by <span className="stylerFont1">Saksham</span></Text>
                <Text textAlign="center">2022</Text>
            </Stack>
        </Stack>
        </>
    )
}