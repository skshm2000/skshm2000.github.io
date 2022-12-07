import { Image, Button, Stack, Box, Heading, Text } from '@chakra-ui/react'
import "./CommonCSS.css"

export default function FirstView() {
    return (
        <div className='mainDiver'>
        <Stack 
        className='topText'
        pl="5%" 
        pr="5%" 
        pt='14%'
        direction={{base:"column", sm:"column", md:"row", lg:"row"}} 
        spacing="100px" 
        w={{base:"85%", sm:"85%", md:"95%", lg:"85%"}}
        >
            <Stack 
                className="mainText" 
                mt={{base:"170px", sm:"80px", md:"100px", lg:"110px"}} 
                direction="column"
            >
                <Heading textAlign={
                    { 
                        base:'center',
                        sm: 'center',
                        md: 'left',
                        lg: 'left',
                        xl: 'left',
                        '2xl': 'left'}
                }>You have reached <span className='stylerFont'>{"<"}Saksham Selwal{"/>"}</span></Heading>
                <Text textAlign={
                    { 
                        base:'center',
                        sm: 'center',
                        md: 'left',
                        lg: 'left',
                        xl: 'left',
                        '2xl': 'left'}
                }>Aspiring Full Stack Web Developer.</Text>
                <Button onClick={()=>{
                    window.open('https://drive.google.com/file/d/1kKVSOq67udDMZX88g1ujntdrjIjTTzYg/view?usp=sharing')
                }} 
                colorScheme="blackAlpha"
                w='50%'
                >View Resume</Button>
            </Stack>
        </Stack>
        <Image 
            classname="bgImage"
            alignSelf="center"
            w="100%"
            h="640px"
            src="https://thumbs.gfycat.com/BitesizedDesertedBallpython-size_restricted.gif" 
        />
        </div>
    )
}