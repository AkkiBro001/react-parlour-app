import { useState } from 'react'
import Logo from '../assets/images/Logo.svg'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaShoppingCart, FaUserAlt} from 'react-icons/fa'
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    
    <>
    {toggleMenu && <div className='handburger fixed right-0 top-0 bg-white w-[230px] h-screen z-50 p-5 flex flex-col gap-10'>
      <button className='text-2xl self-end' onClick={()=>setToggleMenu(false)}><AiOutlineClose/></button>
      <ul className='font-bold text-center flex flex-col gap-10'>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Home</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Services</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Products</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>About Us</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Contact</a></li>
        </ul>
    </div>}
    <nav className='md:px-10 xs:px-5 flex justify-between fixed w-full items-center h-20 z-40 bg-white'>
        <a className="logo" href='/'><img src={Logo} alt="Logo" className="w-[180px]"/></a>
        <ul className='md:flex xs:hidden gap-6 font-bold'>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Home</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Services</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Products</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>About Us</a></li>
            <li><a href="/" className='text-neutral-800 hover:text-neutral-700'>Contact</a></li>
        </ul>
        <ul className='flex gap-6 font-bold md:ml-0 md:mr-0 xs:ml-auto xs:mr-5'>
          <li><a href="/" className='text-neutral-800 hover:text-neutral-700 text-xl'><FaShoppingCart/></a></li>
          <li><a href="/" className='text-neutral-800 hover:text-neutral-700 text-xl'><FaUserAlt/></a></li>
        </ul>
        <button className='md:hidden xs:block text-2xl' onClick={()=>setToggleMenu(true)}><HiOutlineMenuAlt3/></button>
    </nav>
    </>
  )
}

export default Navbar;