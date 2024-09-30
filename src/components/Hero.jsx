import React from 'react'
import { HERO_CONTENT } from '../constants'
import {motion} from 'framer-motion'
import profilePic from '../assets/kevinRushProfile.jpg'
import FlipText from '../animation/FlipText'
const container = (delay) =>({
  hidden :{x:-100 , opacity :0},
  visible : {x:0 , opacity :1 , transition:{duration:0.5 , delay:delay}}, 
}) 
function Hero() {
  return (
    <div className='border-b border-transparent pb-4 lg:mb-3.5'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-start'>
          <motion.h1  
          variants={container(0)}
          initial="hidden"
          animate="visible"
           className='pb-16 text-5xl  font-thin font-sacramento tracking-tighter lg:mt-16 '><FlipText>SalmanNazal</FlipText></motion.h1> 
          <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
          className='bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-palanquin font-bold'>Frontend Developer</motion.span>
          <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
          className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.p>
        </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center '>
          <motion.div
           initial={{ x: 100, opacity: 0 }}             // Initial state: 100px right and transparent
           animate={{ x: 0, opacity: 1 }}               // Animate to position and full opacity
           transition={{ duration: 1, delay: 1.2 }} >  
        <img 
        src={profilePic} alt='Salman'  className='rounded-2xl transition duration-300 ease-in-out hover:scale-[1.1]    transform   hover:shadow-lg  hover:shadow-purple-800' />
    </motion.div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
