import React, { useState } from 'react'
import logo from "../assets/img/logo.svg"
import {navLinks} from "../constants"
import {Menu, X} from "lucide-react"

const Navbar = () => {
    const [toggleButton , setToggleButton]= useState(false)

    const toggleNav = () => {
        setToggleButton(!toggleButton)
    }
  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="logo" className="h-8  mr-2"/>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
                {navLinks.map((item, index)=>(
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex justify-center items-center space-x-12">
                <a href="#" className="py-2 px-3 border rounded-md">
                    Sign In
                </a>

                <a href="#" className="py-2 px-3 border rounded-md bg-red-600
                ">
                    Create an account
                </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNav}>
                    {toggleButton ? <X /> : <Menu />}
                </button>
            </div>
        </div>
        {toggleButton && (
            <div className="fixed right-0 z-20 mt-2 bg-neutral-100 w-full p-12 flex flex-col
               justify-center items-center lg:hidden">
                <ul>
                    {navLinks.map((item, index)=>(
                        <li key={index} className="py-4">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-6">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>

                    <a href="#" className="py-2 px-3 border rounded-md bg-red-600">
                        Create an account
                    </a>
                 </div>
            </div>
        )}
    </div>
   </nav>
  )
}

export default Navbar