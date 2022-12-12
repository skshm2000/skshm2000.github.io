import { Stack, Flex, Box, Text, Tooltip } from "@chakra-ui/react"
import "./CommonCSS.css"
import { AiFillPhone, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useToast } from '@chakra-ui/react'
import { motion } from "framer-motion";

export default function ContactMe() {
    const toast = useToast()
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
                <Tooltip label="+91 9467299188 (Click to copy)">
                    <Box onClick={()=>{
                        navigator.clipboard.writeText("+91 9467299188")
                        toast({
                            position: 'bottom-left',
                            render: () => (
                            <Box fontFamily={'heading2'} borderRadius={'15px'} color='white' p={3} bg='black'>
                                Phone number copied to clipboard
                            </Box>
                            ),
                        })
                    }}>
                        <motion.div
                        whileHover={{scale:1.4}}
                        whileTap={{scale:0.9}}
                        >

                    <AiFillPhone size='50px' />
                        </motion.div>
                    </Box>
                </Tooltip>
                <Tooltip label="sakshamselwal2000@gmail.com (Click to copy)">
                    <Box onClick={()=>{
                        navigator.clipboard.writeText("sakshamselwal2000@gmail.com")
                        toast({
                            position: 'bottom-left',
                            render: () => (
                            <Box fontFamily={'heading2'} borderRadius={'15px'} color='white' p={3} bg='black'>
                                Email copied to clipboard
                            </Box>
                            ),
                        })
                    }}>
                        <motion.div
                        whileHover={{scale:1.4}}
                        whileTap={{scale:0.9}}
                        >
                            <AiFillMail size='50px'/>
                        </motion.div>
                    </Box>
                </Tooltip>
                <Tooltip label="Saksham selwal (Click to visit)">
                    <Box onClick={()=>{
                        window.open('https://www.linkedin.com/in/saksham-selwal-a33708155/')
                    }}>
                        <motion.div
                        whileHover={{scale:1.4}}
                        whileTap={{scale:0.9}}
                        >
                            <AiFillLinkedin size='50px'/>
                        </motion.div>
                    </Box>
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