import React from 'react'
import { CONTACT } from '../constants'
import FlipText from '../animation/FlipText'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='border-b border-transparent pb-4 '>
      <motion.h1
       whileInView={{opacity: 1, y:0}}
       initial={{opacity: 0, y:-100}}
       transition={{duration: 0.5}}
       className='my-10 text-center text-4xl font-palanquin font-bold '>Get in Touch</motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x:200}}
         transition={{duration: 1.5}}
        className='my-4 '><span className='  font-bold transition duration-500 ease-in-out border rounded-lg border-transparent  hover:shadow-lg hover:bg-slate-300 hover:text-black hover:border hover:rounded-lg hover:shadow-purple-800 p-1 '>{CONTACT.address}</span></motion.p>
        <motion.div
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x:-100}}
         transition={{duration: 1.5}}
        className='my-4'><a   href={`https://wa.me/${CONTACT.phoneNo}`} className='  font-bold transition duration-500 ease-in-out border rounded-lg border-transparent  hover:shadow-lg hover:bg-slate-300 hover:text-black hover:border hover:rounded-lg hover:shadow-purple-800  p-1'>{CONTACT.phoneNo}</a> </motion.div>
       <motion.div
        whileInView={{opacity: 1, x:0}}
     initial={{opacity: 0, x:100}}
     transition={{duration: 1.5}}
       >  
        <a href={`mailto:${CONTACT.email}`}className='  font-bold transition duration-500 ease-in-out border rounded-lg border-transparent  hover:shadow-lg hover:bg-slate-300 hover:text-black hover:border hover:rounded-lg hover:shadow-purple-800 p-1'
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration: 1.5}}
       >{CONTACT.email} 
        </a> 
        </motion.div>
        {/* <a href='#' className='my-4 border-b'>{CONTACT.email}</a> */}


      </div>
    </div>
  )
}

export default Contact
