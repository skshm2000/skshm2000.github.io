import { Image, Flex, Heading, Stack, Text, Spacer, Box } from "@chakra-ui/react"
import { TypeAnimation } from 'react-type-animation';
import GitHubCalendar from 'react-github-calendar';

export default function About() {
    return (
        <>
        
        <Stack  w="80%" m='auto' mt="8%" spacing="5%">
            <Stack>
                <Heading textAlign="center">About Me</Heading>
                <Flex
                pl="5%" 
                pr="5%" >
                    <Image 
                    src="https://i.imgur.com/Pl7KcRd.jpg"
                    w='28%'
                    borderRadius="20%"
                    />
                    <Spacer></Spacer>
                    <Stack direction="column" w="60%"  justifyContent="center">
                    <TypeAnimation
                        sequence={[
                            'Front-end development', // Types 'One'
                            1000, // Waits 1s
                            'React compatible', // Types 'Three' without deleting 'Two'
                            1000, // Waits 2s
                            'Redux compatible',
                            1000,
                            'Back-end development',
                            1000,
                            'MongoDB compatible',
                            1000,
                            'RestAPI compatible',
                            1000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em' }}
                    />
                    <Text alignItems="center" fontSize="20px">
                    A tech-savvy Web Developer with hands-on project experience on a website's
    front-end and back-end sides of the website. Saksham has a strong problem solving mindset which forces him to improve the performance, scalability, and
    reliability of any project thrown at him
                    </Text>
                    </Stack>
                    </Flex>
            </Stack>
                <Stack>
                    <Box w="fit-content" alignSelf="center">
                    <Heading>My GitHub Calender</Heading>
                        <GitHubCalendar username="skshm2000" />
                    </Box>
                </Stack>
        </Stack>
        </>
    )
}