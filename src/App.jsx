import './Components/CommonCSS.css'
import FirstView from './Components/FirstView';
import About from './Components/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import {Flex, Spacer, Text, Box} from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react"
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  let aboutSection = useRef(null)
  let firstView = useRef(null)
  let techStack = useRef(null)
  let contactMe = useRef(null)
  let projects = useRef(null)
  let [color, changeColor] = useState(false)
  let [hidden, changeHidden] = useState(false)
  
  const handleScroll = ()=>{
    if(window.scrollY>180){
      changeColor(true)
    } else {
      changeColor(false)
    }
  }

  const handleScrollTo = (ref) => {
    console.log(ref)
    ref.current.scrollIntoView({behavior: "smooth"})
  };

  window.addEventListener('scroll', handleScroll)

  return (
    <>
      <Flex className={color ? "navbar1":"navbar"} pt="20px" pb="20px" alignContent="center" w="100%">
        <Box w={{ 
          base:'65%',
          sm: '65%',
          md: '50%',
          lg: '45%',
          xl: '45%',
          '2xl': '45%'}}
        >
        <Text fontSize={
          { 
            base:'25px',
            sm: '25px',
            md: '35px',
            lg: '40px',
            xl: '40px',
            '2xl': '40px'}
        } textAlign="center" fontWeight={'bold'} className='stylerFont'>{"<"} Saksham Selwal {"/>"}</Text>
        </Box>
        <Spacer></Spacer>
        <Stack className='mainButtons' direction={['column', 'column', 'row', 'row', 'row', 'row']} w={{base:"0%", sm:"60%", md:"40%", lg:"45%"}} spacing={{base:"10px", sm:"10px", md:"20px", lg:"40px"}}>
            <Button variant='ghost' onClick={()=>handleScrollTo(firstView)}>Home</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(aboutSection)}>About</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(techStack)}>Tech Stack</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(projects)}>Projects</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(contactMe)}>Contact</Button>
        </Stack>
        <Spacer></Spacer>
      </Flex>
      <Box ref={firstView}>
        <FirstView/>
      </Box>
      <Box ref={aboutSection}>
        <About />
      </Box>
      <Box ref={techStack}>
        <TechStack />
      </Box>
      <Box ref={projects}>
        <Projects />
      </Box>
      <Box ref={contactMe}>
        <ContactMe />
      </Box>
    </>
  );
}

export default App;