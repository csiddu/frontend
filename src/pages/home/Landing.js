import React from 'react';

function Landing() {

  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Computer Society Of India <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">CSI DDU</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">We envision a dream where everyone is provided an opportunity to expand their horizons of knowledge. </p>
              <div className="p-10 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="p-5 rounded-3xl text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Meet Our Team</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={require('../../assets/img/4.jpg').default} width="768" height="432" alt="Hero" />
              </div>
              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Landing;