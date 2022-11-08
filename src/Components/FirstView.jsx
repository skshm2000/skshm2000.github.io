import { Image, Button, Stack, Box, Heading, Text } from '@chakra-ui/react'
import "./CommonCSS.css"

export default function FirstView() {
    return (
        <>
        {/* <Text>src/Components/Saksham_Selwal/Welcome.jsx</Text> */}
        <Stack 
        pl="5%" 
        pr="5%" 
        pt="8%"
        direction={{base:"column", sm:"column", md:"row", lg:"row"}} 
        spacing="100px" 
        w={{base:"85%", sm:"85%", md:"95%", lg:"85%"}}
        m="auto"
        >
            <Stack 
                className="mainText" 
                mt={{base:"30px", sm:"80px", md:"100px", lg:"110px"}} 
                direction="column" 
            >
                <Text>Hello! Welcome to this component!</Text>
                <Heading>This is {"<"} Saksham Selwal {"/>"}</Heading>
                <Text>Aspiring {"<"} Full Stack Web Developer {"/>"} from Masai School.</Text>
                <Button variant="outline">Know more features!</Button>   
            </Stack>
            <Image 
                alignSelf="center"
                w="40%" 
                borderRadius="15%" 
                src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif" 
            />
        </Stack>
        </>
    )
}