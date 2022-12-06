import { Image, Flex, Heading, Stack, Text, Spacer, Box } from "@chakra-ui/react"
import { TypeAnimation } from 'react-type-animation';
import GitHubCalendar from 'react-github-calendar';
import './CommonCSS.css'

export default function About() {
    return (
        <>
        
        <Stack  w="80%" m='auto' mt="8%" spacing="5%">
            <Stack>
                <Text textAlign="center" className='heading1'>About Me</Text>
                <Flex pl="5%" pr="5%" >
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
                        A tech-savvy Web Developer with hands-on project experience on a website's front-end and back-end sides of the website. Saksham has a strong problem solving mindset which forces him to improve the performance, scalability, and reliability of any project thrown at him
                        </Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Image 
                    src="https://i.imgur.com/Pl7KcRd.jpg"
                    w='28%'
                    borderRadius="20%"
                    />
                </Flex>
            </Stack>
                <Stack spacing='20px'>
                    <Text className='heading1'>Github Stats</Text>
                    <Stack w="fit-content" alignSelf="center" spacing='20px'>
                        <Box alignSelf='center'>
                            <GitHubCalendar username="skshm2000" tooltips='true' responsive='true' />
                        </Box>
                        <Stack>
                        <Flex>
                            <Image
                                w={"100%"}
                                src="https://github-readme-streak-stats.herokuapp.com/?user=skshm2000&theme=dark"
                                alt="skshm2000"
                            />
                            <Image
                                w="100%"
                                src="https://github-readme-stats.vercel.app/api/top-langs?username=skshm2000&show_icons=true&locale=en&layout=compact&theme=dark"
                                alt="Saksham Selwal"
                            />
                        </Flex>
                        <Image
                            w="100%"
                            src="https://github-readme-stats.vercel.app/api?username=skshm2000&show_icons=true&locale=en&theme=dark"
                            alt="skshm2000"
                        />
                        </Stack>
                    </Stack>
                </Stack>
        </Stack>
        </>
    )
}