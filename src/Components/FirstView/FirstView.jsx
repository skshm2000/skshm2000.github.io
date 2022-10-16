import { Image, Button, Stack, Box, Heading, Text } from '@chakra-ui/react'
import "../CommonCSS.css"

export default function FirstView() {
    return (
        <>
        {/* <Text>src/Components/Saksham_Selwal/Welcome.jsx</Text> */}
        <Stack pl="5%" pr="5%" direction={{base:"column", sm:"column", md:"row", lg:"row"}} spacing="100px" w={{base:"85%", sm:"85%", md:"95%", lg:"85%"}} m="auto">
            <Stack className="mainText" mt={{base:"30px", sm:"80px", md:"100px", lg:"110px"}} alignSelf="center" direction="column" >
                <Text>Hello! Welcome!</Text>
                <Heading>This is {"<"} Saksham Selwal {"/>"}</Heading>
                <Text>He is an aspiring {"<"} Full Stack Web Developer {"/>"} from Masai School.</Text>
            </Stack>
            <Box borderRadius="20%" w={{base:"65%", sm:"60%", md:"50%", lg:"40%"}}>
                <Image w="100%" borderRadius="15%" src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif" h={["100%", "50%", '150%']}/>
            </Box>
        </Stack>
        
        </>
    )
}