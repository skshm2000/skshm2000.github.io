import './Components/CommonCSS.css'
import FirstView from './Components/FirstView';
import About from './Components/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import { Text, Box, Spacer} from "@chakra-ui/react"
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
      <Stack className={color ? "navbar1":"navbar"} pt="10px" pb="10px" alignContent="center" w="100%" direction={
        { 
          base:'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
          '2xl': 'row'}
      } alignItems='center'>
        <Box m='auto' w={{ 
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
        <Stack m='auto' direction='row' w={
        { 
          base:'90%',
          sm: '90%',
          md: '40%',
          lg: '40%',
          xl: '45%',
          '2xl': '45%'}
      } spacing={{base:"5px", sm:"5px", md:"20px", lg:"40px"}} justifyContent='center'>
            <Button variant='ghost' onClick={()=>handleScrollTo(firstView)}>Home</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(aboutSection)}>About</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(techStack)}>Tech Stack</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(projects)}>Projects</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(contactMe)}>Contact</Button>
        </Stack>
        <Spacer></Spacer>
      </Stack>
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