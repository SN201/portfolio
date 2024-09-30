import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { animate, motion } from 'framer-motion'

const IconVariant = (duration) => ({
  initial : {y: -10} , 
  animate : {
    y:[10,-10] , 
    transition:{ duration: duration , 
    ease : "linear",
    repeat : Infinity , 
    repeatType:"reverse",
  }
  },
});

function Technologies() {
  return (
    <div className=' border-b border-transparent pb-24'>
     <motion.h1
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration: 1.5}}
     className='my-20 text-center text-4xl font-palanquin font-bold'>Technologies</motion.h1> 
     <motion.div
     whileInView={{opacity: 1, x:0}}
     initial={{opacity: 0, x:-100}}
     transition={{duration: 1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        {/* 1 */}
        <motion.div
        variants={IconVariant(2.5)}
        initial = "initial"
        animate = "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 font-bold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-cyan-500'>
            <RiReactjsLine className='text-7xl text-cyan-600 '/>
        </motion.div>
         {/* 2 */}
         <motion.div
          variants={IconVariant(3)}
          initial = "initial"
          animate = "animate"
         className='rounded-2xl border-4 border-neutral-800 p-4 font-bold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-red-500'>
            <FaHtml5 className='text-7xl text-red-500'/>
        </motion.div>
        {/* 3 */}
        <motion.div 
         variants={IconVariant(3.5)}
         initial = "initial"
         animate = "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 font-bold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-cyan-500'>
            <FaCss3 className='text-7xl text-cyan-600'/>
        </motion.div>    
          {/* 4 */}
        <motion.div
         variants={IconVariant(4)}
         initial = "initial"
         animate = "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 font-bold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-yellow-300 '>
            <FaJs className='text-7xl text-yellow-300'/>
        </motion.div>        
         {/* 5 */}
         <motion.div
          variants={IconVariant(4.5)}
          initial = "initial"
          animate = "animate"
         className='rounded-2xl border-4 border-neutral-800 p-4 font-bold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-cyan-500'>
            <FaDocker className='text-7xl text-cyan-600'/>
        </motion.div>              
     </motion.div>
    </div>
  )
}

export default Technologies
