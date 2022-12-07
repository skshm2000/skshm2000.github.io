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
                mt={{base:"270px", sm:"80px", md:"100px", lg:"110px"}} 
                direction="column"
            >
                <Text textAlign={
                    { 
                        base:'center',
                        sm: 'center',
                        md: 'left',
                        lg: 'left',
                        xl: 'left',
                        '2xl': 'left'}
                } 
                fontSize={'32px'}
                >
                    You have reached <span className='stylerFont1'>{"<"} Saksham Selwal {"/>"}</span>
                </Text>
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
                className='btn1'
                onClick={()=>{
                    window.open('https://drive.google.com/file/d/1kKVSOq67udDMZX88g1ujntdrjIjTTzYg/view?usp=sharing')
                }} 
                colorScheme="blackAlpha"
                w='45%'
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
                    base:'820px',
                    sm: '820px',
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