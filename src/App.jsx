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
import { motion } from 'framer-motion';
import { MdDarkMode } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Switch2Dark, Switch2Light } from './Redux/actions';

function App() {
  let aboutSection = useRef(null)
  let firstView = useRef(null)
  let techStack = useRef(null)
  let contactMe = useRef(null)
  let projects = useRef(null)
  let [color, changeColor] = useState(false)
  const { current } = useSelector(state=>state)
  const dispatch = useDispatch()
  
  const handleScroll = ()=>{
    if(window.scrollY>180){
      changeColor(true)
    } else {
      changeColor(false)
    }
  }

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"})
  };

  window.addEventListener('scroll', handleScroll)

  return (
    <Stack
    w='100%'
    bgColor={ current=='dark' ? 'black' : 'white'  }
    >
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={
        {
            type:'spring',
            bounce:0.5,
            duration:4
        }
    }
    >
      <Stack 
      bgColor={ color ? (current=='dark' ? 'black' : 'white') : 'transparent' } 
      color={ current=='dark' ? 'white' : 'black' }
      className={color ? "navbar1":"navbar"} 
      pt="10px" 
      pb="10px" 
      alignContent="center" 
      w="100%" 
      direction={
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
          <motion.div
          whileHover={{scale:1.18, rotate:-4}}
          whileTap={{scale:0.9}}
          >
        <Text fontSize={
          { 
            base:'25px',
            sm: '25px',
            md: '35px',
            lg: '42px',
            xl: '45px',
            '2xl': '45px'}
        } textAlign="center" fontWeight={'bold'} className='stylerFont'>{"<"} Saksham Selwal {"/>"}</Text>
          </motion.div>
        </Box>
        <Stack m='auto' direction='row' w={
        { 
          base:'90%',
          sm: '90%',
          md: '40%',
          lg: '40%',
          xl: '55%',
          '2xl': '55%'}
      } spacing={{base:"5px", sm:"5px", md:"20px", lg:"40px"}} justifyContent='center'>
            <Button variant='ghost' onClick={()=>handleScrollTo(firstView)}>Home</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(aboutSection)}>About</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(techStack)}>Tech Stack</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(projects)}>Projects</Button>
            <Button variant='ghost' onClick={()=>handleScrollTo(contactMe)}>Contact</Button>
            <Button variant='ghost' onClick={()=>window.open('https://drive.google.com/file/d/1kKVSOq67udDMZX88g1ujntdrjIjTTzYg/view?usp=sharing')}>Resume</Button>
            <Button variant='ghost'>
              { current=='dark' ? <BsLightbulb onClick={()=>{dispatch(Switch2Light())}} size='l' /> : <MdDarkMode onClick={()=>{dispatch(Switch2Dark())}} size='50px' />  }
            </Button>
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
    </motion.div>

    </Stack>
  );
}

export default App;