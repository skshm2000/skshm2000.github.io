import {Flex,Image, Heading, Stack, SimpleGrid, Text} from "@chakra-ui/react"
import Project1 from "./Projects/Project1"
import Project2 from "./Projects/Project2"
import Project3 from "./Projects/Project3"
import Project4 from "./Projects/Project4"

export default function Projects() {
    return (
        <>
        <Stack direction="column" w="80%" m="auto" pt="8%">
            <Heading textAlign="center">Projects</Heading>
            <SimpleGrid columns="2" spacing="10px">
                <Project1 />
                <Project4 />
                <Project2 />
                <Project3 />
            </SimpleGrid>
        </Stack>
        </>
    )
}