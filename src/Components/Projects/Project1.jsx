import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useWindowSize from "../useWindowSize"
import { useSelector } from "react-redux"

export default function Project1() {
    let size = useWindowSize()
    const { current } = useSelector(state=>state)

    return (
        <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        initial={{x:size.innerWidth>480?-90:0, opacity:size.innerWidth>480?1:0}}
        whileInView={{x:0, opacity:size.innerWidth>480?1:1}}
        transition={
            size.innerWidth>480?
            {
                type:'spring',
                bounce:0.5,
                duration:1.5
            }:
            {
                type:'easein',
                duration:0.8
            }
        }
        >
        <Stack
        bgColor={ current=='dark' ? 'black' : 'white'  }
        color={ current=='dark' ? 'white' : 'black'  }
         p="5%" border={ current=='dark' ? '3px solid white' : '1px solid black'  } borderRadius="20px" spacing="20px">
            <Image src="https://i.imgur.com/nQXeVPm.png"></Image>
            <Heading fontSize="22px">FARFETCH - Online Marketplace</Heading>
            <Text>Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center" >REACT | HTML/CSS | JAVASCRIPT | CHAKRAUI | REACT ROUTER DOM | AXIOS | GITHUB</Text>
            <Flex alignSelf="center" w="50%">
            <Spacer></Spacer>
                <a href="https://farfetch-lac.vercel.app/" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Deployed</Button>
                </a>
                <Spacer></Spacer>
                <a href="https://github.com/skshm2000/malicious-liquid-1505/tree/main/farfetch" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </motion.div>
    )
}