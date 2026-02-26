import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/images/picture_me.jpg';

const Hero = () => {
  return (
    <section className="py-16 bg-linear-to-r from-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center  md:gap-50">
        <div className="mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-100 mb-8">
            Hello, I'm <span className="text-amber-400">Ahmed Bestun</span>, Full Stack Developer
          </h1>
          <p className="text-gray-400 text-2xl mb-6">
            I build responsive, user-friendly web applications with modern technologies.
            Passionate about clean code and solving complex problems.
          </p>
          <div className="flex space-x-4">
            <Link to="projects" className="bg-gray-700 hover:bg-amber-900 text-white px-6 py-2 rounded-md transition-colors">
              View My Work
            </Link>
            <Link to="contact" className="border  text-amber-400 hover:bg-amber-900 px-6 py-2 rounded-md transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="px-12 align-middle">
          <div className="rounded-full w-64 h-64 md:w-100 md:h-100 flex items-center justify-center overflow-hidden border border-amber-400">
            <span>
              <img src={pic} alt="Ahmed Beston"/>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;