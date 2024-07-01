import React from 'react'
import { features } from "../constants"

const Features = () => {
  return (
    <section id="features">
        <div className="container flex flex-col p-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* what's different */}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about Manage?
              </h2>
              <p className="max-w-sm text-center text-dark md:text-left">
                Manage provides all the functionality your team needs, without the complexity.
                Our software is tailor-made for modern digital product teams.
              </p>
            </div>
            <div class="flex flex-col space-y-8 md:w-1/2">
              {features.map((item, index)=>(
                <div key={index}>
                  <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div class="flex items-center space-x-2">
                      <div class="px-3 py-1 text-bold text-red-500 rounded-full outline">
                        {item.number}
                      </div>
                      <h3 className="text-base font-bold md:mb-4">
                        {item.title}
                      </h3>
                    </div>
                   </div>
                     <p className="text-gray">
                        {item.text}
                      </p>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Features