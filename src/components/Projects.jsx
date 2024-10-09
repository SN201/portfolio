import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'; // Removed duplicate Navigation
import { Swiper, SwiperSlide } from 'swiper/react';

function Projects() {
  return (
    <div className='border-b border-transparent pb-4'>
      <motion.h1
       whileInView={{opacity: 1, y:0}}
       initial={{opacity: 0, y:-100}}
       transition={{duration: 1}}
      className='my-20 text-center text-4xl font-palanquin font-bold'>Projects</motion.h1>
      <div>
        {PROJECTS.map((project,index)=>(
            <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x:-100}}
            transition={{duration: 1}}
            key={index} className=' flex flex-wrap mb-8 lg:justify-center'>
                <div  className='w-full lg:w-1/4  mt-3  mb-3 '>
                {/* <img src={project.image} alt={project.title}  className='mb-6  rounded hover:scale-[2.7] transition duration-50 ease-in-out   transform' width={150} height={150}/> */}
                {project.image && (
   <Swiper
   slidesPerView={1}
   pagination={{ type: 'progressbar' }}
   effect="fade"
   modules={[EffectFade, Autoplay, Pagination, Navigation]} // Make sure Navigation is included
   autoplay={{ delay: 1000, disableOnInteraction: false }}
   navigation // Enable navigation buttons
   className='lg:-translate-x-12 cursor-none'
 >
    {project.image.map((img, imgIndex) => (
                <SwiperSlide key={imgIndex} >
                  <div
                    className='relative w-full  h-[200px] overflow-hidden '
                    style={{ background: `url(${img}) center, no-repeat`, backgroundSize: "cover" }}
                  ></div>
                </SwiperSlide>
    ))}
  </Swiper>
)}
                </div>

            <motion.div
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x:200}}
             transition={{duration: 1}}
            className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400 font-light tracking-tight'>{project.description}</p>
            {project.link && (
            <a  className=', text-neutral-200  relative group ' href="https://rent-house-react-tan.vercel.app/">
              Click here to show
              <span className="mt-10 absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full group-hover:h-0.9 group-hover:delay-100"></span>
              </a>)}
            <br/>
            <br/>
            {project.technologies.map((tech,index)=>(
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900  hover:shadow-purple-800  border  border-transparent hover:shadow-md transition-all duration-500 '>{tech}</span>
            ))}
            </motion.div>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
