import React from 'react'
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section id="testimonial">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's different about manage
          </h2>
          {/* testimonial container */}
          <div className="flex flex-col mt-24  md:flex-row md:space-x-15">
            {testimonials.map((item, index) =>(
              <div key={index} className="flex flex-col items-center p-6 mb-6 space-y-6 rounded-lg bg-gray-200 md:mx-1">
                <img src={item.image} alt="image" className="w-16 mt-10"/>
                <h5 className="text-lg font-bold">{item.user}</h5>
                <p className="text-sm text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
          {/* button */}
          <div class="my-16">
            <a href="#" class="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-900">
              Get Started
            </a>
          </div>
        </div>
    </section>
  )
}

export default Testimonials