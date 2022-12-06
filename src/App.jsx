import './Components/CommonCSS.css'
import FirstView from './Components/FirstView';
import About from './Components/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import {Flex, Spacer, Text, Box} from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  let aboutSection = useRef(null)
  let firstView = useRef(null)
  let techStack = useRef(null)
  let contactMe = useRef(null)
  let projects = useRef(null)
  let [color, changeColor] = useState(false)

  const handleScrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScroll = ()=>{
    if(window.scrollY>180){
      changeColor(true)
    } else {
      changeColor(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <>
      <Flex className={color ? "navbar1":"navbar"} pt="20px" pb="20px" alignContent="center" w="100%">
          <Box w={{base:"30%",sm:"40%", md:"40%", lg:"45%"}}>
          <Heading fontSize={{base:"15px",sm:"20px", md:"25px", lg:"30px"}} textAlign="center"> <span className='stylerFont'>{"<"} Saksham Selwal {"/>"}</span></Heading>
          </Box>
          <Spacer></Spacer>
          <Stack direction="row" w={{base:"65%", sm:"60%", md:"40%", lg:"45%"}} spacing={{base:"10px", sm:"10px", md:"20px", lg:"40px"}}>
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