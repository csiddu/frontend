import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF, faAmazon, faApple, faMicrosoft  } from '@fortawesome/free-brands-svg-icons'

function Quote() {
  return (
    <section className="relative">

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Continuing the legecy</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                blandit libero cursus mattis.</p>
          </div>

          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <FontAwesomeIcon icon={faGoogle} size="3x" color="gray" />
            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <FontAwesomeIcon icon={faFacebookF} size="3x" color="gray" />
            </div>

            
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <FontAwesomeIcon icon={faAmazon} size="3x" color="gray" />
            </div>

            
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <FontAwesomeIcon icon={faMicrosoft} size="3x" color="gray" />
            </div>

            
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              <FontAwesomeIcon icon={faApple} size="3x" color="gray" />
            </div>

          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 bg-yellow-100 border-gray-200 rounded">
              
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img className="relative rounded-full" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f469ea85cc82fc8d6083f05%2FAmazon-Founder-and-CEO-Jeff-Bezos%2F960x0.jpg%3Ffit%3Dscale" width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis.Arcu cursus vitae congue mauris. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Lorem Ipsum</cite>
                <div className="text-gray-600">
                  <span>Sr. SWE</span> <a className="text-blue-600 hover:underline" href="#0">@Facebook</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Quote;