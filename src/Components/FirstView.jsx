import { Image, Button, Stack, Box, Heading, Text } from '@chakra-ui/react'
import "./CommonCSS.css"
import { motion } from 'framer-motion'
import useWindowSize from './useWindowSize'
import { useSelector } from 'react-redux'

export default function FirstView() {
    let size = useWindowSize()
    const { current } = useSelector(state=>state)

    return (
        <Box className='mainDiver' h={size.innerHeight}>
        <Stack
            // className='topText'
            position={'absolute'}
            top={ current=='dark' ? { 
                base:'5vh',
                sm: '35vh',
                md: '30vh',
                lg: '25vh',
                xl: '25vh',
                '2xl': '25vh'}:'25vh' }
            left={ current=='dark' ? { 
                base:'0vw',
                sm: '10vw',
                md: '20vw',
                lg: '25vw',
                xl: '30vw',
                '2xl': '28vw'}:'4vw' }
            // pl="5%" 
            // pr="5%" 
            // pt='14%'
            direction={{base:"column", sm:"column", md:"row", lg:"row"}} 
            // spacing="100px" 
            w={{base:"100%", sm:"85%", md:"95%", lg:"100%"}}
            color={ current=='dark' ? 'white' : 'dark'  }
        >
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={
                {
                    type:'spring',
                    bounce:0.5,
                    duration:4
                }
            }
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
                fontSize={'38px'}
                >
                    You have reached <motion.div whileHover={{scale:1.18, rotate:-4}}
          whileTap={{scale:0.9}} className='stylerFont1'>{"<"} Saksham Selwal {"/>"}</motion.div>
                </Text>
                <Text 
                fontSize={'20px'}
                textAlign={
                    { 
                        base:current=='dark' ? 'center' : 'left',
                        sm: current=='dark' ? 'center' : 'left',
                        md: current=='dark' ? 'center' : 'left',
                        lg: current=='dark' ? 'center' : 'left',
                        xl: current=='dark' ? 'center' : 'left',
                        '2xl': current=='dark' ? 'center' : 'left' }}>
                    Aspiring Full Stack Web Developer.
                </Text>
                <Button 
                alignSelf={
                    { 
                        base: current=='dark' ? 'center' : 'left',
                        sm: current=='dark' ? 'center' : 'left',
                        md: current=='dark' ? 'center' : 'left',
                        lg: current=='dark' ? 'center' : 'left',
                        xl: current=='dark' ? 'center' : 'left',
                        '2xl': current=='dark' ? 'center' : 'left' }}
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
            </motion.div>
        </Stack>
        <Image 
            classname="bgImage"
            alignSelf="center"
            w="100%"
            h='105vh'
            src={ current=='dark' ? 'https://media.tenor.com/Z6hvybZoIUoAAAAd/loop-animation.gif' : "https://thumbs.gfycat.com/BitesizedDesertedBallpython-size_restricted.gif"  }
        />
        </Box>
    )
}