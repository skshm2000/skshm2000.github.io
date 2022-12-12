import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Project4() {
    return (
        <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        initial={{x:90}}
        whileInView={{x:0}}
        transition={
            {
                type:'spring',
                bounce:0.3,
                duration:2
            }
        }
        >
        <Stack p="5%" border="1px solid black" borderRadius="20px" spacing="20px" backgroundColor={'white'}>
            <Image src="https://i.imgur.com/REt1FqT.png" mb="19px"></Image>
            <Heading fontSize="22px">FiveMetric - Time Tracking WebApp</Heading>
            <Text>Simple time tracking app for Windows, Mac, Linux which helps you to control your time, increase productivity, and monitor your team performance.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center">REACT | EXPRESSJS | REDUX | JAVASCRIPT | CHAKRAUI | AXIOS | GITHUB</Text>
            <Flex alignSelf="center" w="50%">
                <Spacer></Spacer>
                <a href="https://five-metric.netlify.app/" target="_blank">
                    <Button variant='solid'>Deployed</Button>    
                </a>    
                <Spacer></Spacer>
                <a href="https://github.com/skshm2000/powerful-nut-6425" target="_blank">
                    <Button variant='solid'>Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </motion.div>
    )
}