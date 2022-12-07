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
        w={{base:"100%", sm:"85%", md:"95%", lg:"100%"}}
        >
            <Stack 
                className="mainText" 
                // m={{ 
                //     base:'auto',
                //     sm: 'auto',
                //     md: '0',
                //     lg: '0',
                //     xl: '0',
                //     '2xl': '0'}}
                mt={{base:"270px", sm:"80px", md:"100px", lg:"110px"}} 
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
                }>
                    You have reached <span className='stylerFont'>{"<"} Saksham Selwal {"/>"}</span>
                </Heading>
                <Text textAlign={
                    { 
                        base:'center',
                        sm: 'center',
                        md: 'left',
                        lg: 'left',
                        xl: 'left',
                        '2xl': 'left'}
                }>
                    Aspiring Full Stack Web Developer.
                </Text>
                <Button 
                onClick={()=>{
                    window.open('https://drive.google.com/file/d/1kKVSOq67udDMZX88g1ujntdrjIjTTzYg/view?usp=sharing')
                }} 
                colorScheme="blackAlpha"
                w='45%'
                alignSelf={{ 
                    base:'center',
                    sm: 'center',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                    '2xl': 'left'}}
                >
                    View Resume
                </Button>
            </Stack>
        </Stack>
        <Image 
            classname="bgImage"
            alignSelf="center"
            w="100%"
            h={
                { 
                    base:'850px',
                    sm: '850px',
                    md: '640px',
                    lg: '640px',
                    xl: '640px',
                    '2xl': '640px'}
            }
            src="https://thumbs.gfycat.com/BitesizedDesertedBallpython-size_restricted.gif" 
        />
        </div>
    )
}