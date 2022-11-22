import { Image, Button, Stack, Box, Heading, Text } from '@chakra-ui/react'
import "./CommonCSS.css"

export default function FirstView() {
    return (
        <>
        <Stack 
        className='topText'
        pl="5%" 
        pr="5%" 
        pt="8%"
        direction={{base:"column", sm:"column", md:"row", lg:"row"}} 
        spacing="100px" 
        w={{base:"85%", sm:"85%", md:"95%", lg:"85%"}}
        >
            <Stack 
                className="mainText" 
                mt={{base:"30px", sm:"80px", md:"100px", lg:"110px"}} 
                direction="column" 
            >
                <Text>Hello! Welcome to this component!</Text>
                <Heading>You have reached <span className='stylerFont'>saksham selwal</span></Heading>
                <Text>Aspiring Full Stack Web Developer.</Text>
                <a href="https://drive.google.com/file/d/1kKVSOq67udDMZX88g1ujntdrjIjTTzYg/view?usp=sharing"  target="_blank">
                    <Button colorScheme="blackAlpha">View Resume</Button>
                </a> 
            </Stack>
        </Stack>
        <Image 
        classname="bgImage"
            alignSelf="center"
            w="100%"
            h="600px"
            src="https://thumbs.gfycat.com/BitesizedDesertedBallpython-size_restricted.gif" 
        />
        </>
    )
}