import { Stack, Flex, Image, Text, Heading } from "@chakra-ui/react"
import { Animator, Fade, ScrollContainer, ScrollPage } from "react-scroll-motion"
import "../CommonCSS.css"

export default function TechStack() {
    return(
        <>
        <Stack direction="column" w={{ 
            base:'100%',
            sm: '100%',
            md: '90%',
            lg: '85%',
            xl: '85%',
            '2xl': '80%'}} m="auto" pt="8%">
            <Text className='heading1' 
                fontSize={{ 
                base:'28px',
                sm: '28px',
                md: '35px',
                lg: '35px',
                xl: '40px',
                '2xl': '40px'}} 
                textAlign="center"
            >
            Here's what I can do
            </Text>
            <Stack>
                
                <Flex justify="space-around">
                    <Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}
                        >
                            <img className="Icon" src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-512.png"></img>
                            <Heading>HTML</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-512.png"></img>
                            <Heading>CSS</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-512.png"></img>
                            <Heading>JavaScript</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"></img>
                            <Heading>React</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png"></img>
                            <Heading>Redux</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/npm-512.png"></img>
                            <Heading>NPM</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-512.png"></img>
                            <Heading>NodeJS</Heading>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mongodb-512.png"></img>
                            <Heading>MongoDB</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/git-512.png"></img>
                            <Heading>GIT</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-heroku-512.png"></img>
                            <Heading>Heroku</Heading>
                        </Stack>
                        <Stack justify="left" align="center" direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}>
                            <img className="Icon" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png" alt="" />
                            <Heading>Netlify</Heading>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Stack>
        </>
    )
}