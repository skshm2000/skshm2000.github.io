import { Stack, Flex, Image, Text, Heading } from "@chakra-ui/react"
import {motion} from 'framer-motion'
import "../CommonCSS.css"
import { useState, useEffect } from "react";
import useWindowSize from "../useWindowSize";

export default function TechStack() {
    const windowSize = useWindowSize()

    return(
        <>
        <Stack direction="column" 
        w={{ 
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
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968566.png"></img>
                                <Heading>TypeScript</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src="https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-512.png"></img>
                                <Heading>Next JS</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/element_thunder_energy_electric_lightning_flash-512.png"></img>
                                <Heading>Chakra UI</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src="https://i.imgur.com/Kj3WpxX.png"></img>
                                <Heading>Material UI</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/python-512.png"></img>
                                <Heading>Python</Heading>
                            </Stack>
                        </motion.div>
                    </Stack>


                    {/* BACKEND */}


                    <Stack>
                    <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"></img>
                                <Heading>ExpressJS</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
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
                        </motion.div>
                    </Stack>
                </Flex>
            </Stack>
        </Stack>
        </>
    )
}