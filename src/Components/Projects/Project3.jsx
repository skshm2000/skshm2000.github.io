import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"

export default function Project3() {
    return (
        <>
        <Stack p="5%" border="1px solid black" borderRadius="20px" Spacer="20px" >
            <Image src="https://i.imgur.com/fmNQmGG.png"></Image>
            <Heading fontSize="22px">FITNESSBLENDER - CLONE</Heading>
            <Text>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center">HTML/CSS | JAVASCRIPT | GITHUB</Text>
            <Flex alignSelf="center" w="50%">
                <Spacer></Spacer>
                <a href="https://coruscating-churros-2b31ea.netlify.app/" target="_blank">
                    <Button variant='solid'>Deployed</Button>    
                </a>    
                <Spacer></Spacer>
                <a href="https://github.com/skshm2000/melted-group-7444" target="_blank">
                    <Button variant='solid'>Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </>
    )
}