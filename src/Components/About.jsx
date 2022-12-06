import { Image, Flex, Heading, Stack, Text, Spacer, Box } from "@chakra-ui/react"
import { TypeAnimation } from 'react-type-animation';
import GitHubCalendar from 'react-github-calendar';
import './CommonCSS.css'

// { 
// base:'',
// sm: '',
// md: '',
// lg: '',
// xl: '',
// '2xl': ''}

export default function About() {
    return (
        <>
        
        <Stack  w={{ 
        base:'100%',
        sm: '100%',
        md: '95%',
        lg: '95%',
        xl: '85%',
        '2xl': '80%'}} m='auto' mt="8%" spacing="5%">
            <Stack>
                <Text textAlign="center" className='heading1'fontSize={{ 
                base:'35px',
                sm: '35px',
                md: '40px',
                lg: '40px',
                xl: '40px',
                '2xl': '40px'}}>About Me</Text>
                <Stack pl={{ 
                    base:'0%',
                    sm: '0%',
                    md: '1%',
                    lg: '2%',
                    xl: '3%',
                    '2xl': '5%'}} 
                    pr={{ 
                    base:'0%',
                    sm: '0%',
                    md: '1%',
                    lg: '2%',
                    xl: '3%',
                    '2xl': '5%'}} 
                    direction={{ 
                    base:'column-reverse',
                    sm: 'column-reverse',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                    '2xl': 'row'}}
                    spacing='20px'
                    alignContent={'center'}
                >
                    <Stack direction="column" w={{ 
                        base:'80%',
                        sm: '80%',
                        md: '60%',
                        lg: '60%',
                        xl: '60%',
                        '2xl': '60%'}}  
                        justifyContent="center" 
                        alignSelf={'center'}
                    >
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
                        <Text alignItems="center" fontSize={{ 
                            base:'14px',
                            sm: '16px',
                            md: '16px',
                            lg: '18px',
                            xl: '20px',
                            '2xl': '20px'}}
                            alignSelf={'center'}
                        >
                        A tech-savvy Web Developer with hands-on project experience on a website's front-end and back-end sides of the website. Saksham has a strong problem solving mindset which forces him to improve the performance, scalability, and reliability of any project thrown at him
                        </Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Image 
                    src="https://i.imgur.com/Pl7KcRd.jpg"
                    w={
                        { 
                            base:'50%',
                            sm: '50%',
                            md: '28%',
                            lg: '28%',
                            xl: '28%',
                            '2xl': '28%'}
                    }
                    borderRadius="20%"
                    alignSelf={'center'}
                    />
                </Stack>
            </Stack>
                <Stack spacing='20px'>
                    <Text className='heading1'>Github Stats</Text>
                    <Stack w="fit-content" alignSelf="center" spacing='20px'>
                        <Box alignSelf='center'>
                            <GitHubCalendar username="skshm2000" tooltips='true' responsive='true' />
                        </Box>
                        <Stack>
                        <Stack direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}
                        >
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
                        </Stack>
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