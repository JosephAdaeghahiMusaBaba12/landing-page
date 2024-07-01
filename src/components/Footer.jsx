import React from 'react'
import footerImage from "../assets/img/logo-white.svg"
import facebook from "../assets/img/icon-facebook.svg"
import instagram from "../assets/img/icon-instagram.svg"
import pinterest from "../assets/img/icon-pinterest.svg"
import youtube from "../assets/img/icon-youtube.svg"

const Footer = () => {
  return (
    <section id="footer" className="bg-neutral-700">
     <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div class="mx-auto my-6 text-center text-white md:hidden">

        </div>
        {/* logo */}
        <div>
            <img src={footerImage} alt="image" className="h-8"/>
        </div>
        {/* social links */}
       
        <div className="flex items-left space-x-4">
          <a href="#"><img src={facebook} className="h-8" /></a>
          <a href="#"><img src={instagram} alt=""className="h-8" /></a>
          <a href="#"><img src={pinterest} className="h-8" /></a>
          <a href="#"><img src={youtube} className="h-8" /></a>
        </div>
        </div>
        {/* list container */}
        <div className="flex justify-center space-x-32">
          <div className="flex flex-col text-white space-y-3">
            <a href="#" className="hover:text-red-500">Home</a>
            <a href="#" className="hover:text-red-500">Pricing</a>
            <a href="#" className="hover:text-red-500">Products</a>
            <a href="#" className="hover:text-red-500">About</a>
          </div>

          <div className="flex flex-col text-white space-y-3">
            <a href="#" className="hover:text-red-500">Careers</a>
            <a href="#" className="hover:text-red-500">Community</a>
            <a href="#" className="hover:text-red-500">Privacy Policy</a>
          </div>
        </div>
        {/* input container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input 
                type="text"
                placeholder="Update in your inbox"
                className="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-300 focus:outline-line">
                Go
              </button>
            </div>
          </form>
        </div>
     </div>
    </section>
  )
}

export default Footer