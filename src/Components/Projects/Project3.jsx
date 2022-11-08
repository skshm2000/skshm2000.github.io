import { Stack, Image, Text, Heading, Button, Flex } from "@chakra-ui/react"

export default function Project3() {
    return (
        <>
        <Stack p="5%" border="1px solid black" borderRadius="20px" spacing="20px" >
            <Image src="https://i.imgur.com/fmNQmGG.png"></Image>
            <Heading fontSize="22px">FITNESSBLENDER - CLONE</Heading>
            <Text>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center">HTML/CSS | JAVASCRIPT | GITHUB</Text>
            <Flex alignSelf="center">
                <Button variant='solid'>Deployed</Button>
                <Button variant='solid'>Codebase</Button>
            </Flex>
        </Stack>
        </>
    )
}