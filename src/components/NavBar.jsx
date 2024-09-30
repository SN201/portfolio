import React from 'react'
//import logo from'../assets/projects/kevinRushLogo.png'
import logo from'../assets/logo.svg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


function NavBar() {
  return (
    <nav className='mb-20 flex  items-center justify-between py6'>
        <div>
            <img className='mx-2 w-12 font-bold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-purple-800  border rounded-lg border-transparent ' src={logo} alt='logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>   
           <a href='https://www.linkedin.com/in/salman-nazal-810564306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover-cursor-outline'>
            < FaLinkedin className=" font-bold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-cyan-500 border rounded-lg border-transparent  hover:border hover:rounded-lg hover-cursor-outline" />
            </a> 
            <a href='https://www.instagram.com/salmannazal?igsh=MTVsODRmNnRkYTNodw==' className='hover-cursor-outline'>
            <FaInstagram className="  font-bold transition duration-300 ease-in-out border rounded-lg border-transparent     hover:shadow-instagram-bottom-glow hover:border hover:rounded-lg" />
            </a>
            <a href='https://github.com/SN201' className=''>
            <FaGithub className="  font-bold transition duration-300 ease-in-out   hover:shadow-lg hover:shadow-slate-50 border rounded-lg border-transparent "/> 
            </a>
        </div>
      
    </nav>
  )
}

export default NavBar
