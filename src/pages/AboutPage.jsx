import React from 'react';
import pic from "../assets/images/portfolio_selfie.jpg";

const AboutPage = () => {

  return (
    <div className="min-h-screen py-12 bg-linear-to-r from-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-6 py-12">About Me</h1>
        <div className="flex flex-col md:flex-row items-center mb-16 md:gap-60">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="bg-gray-700 border-2 border-amber-400 rounded-full w-64 h-64 md:w-96 md:h-96 flex items-center justify-center overflow-hidden">
                <span>
                    <img src={pic} alt="Ahmed Beston"/>
                </span>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">Ahmed Bestun</h2>
            <p className="text-gray-300 text-2xl mb-4">
              I'm a passionate junior full stack developer with experience in building modern web applications.
              My journey in tech started with a curiosity about how websites work, which led me to pursue a career in development.
            </p>
            <p className="text-gray-300 text-2xl mb-4">
              I have delivered several practical projects, including a gaming
              platform and automation tools, focusing on clean code, authentication, and user-friendly UI. My background in customer service and international communication has
              strengthened my problem-solving, teamwork, and adaptability, which I now apply in
              software development.
            </p>
            <p className="text-gray-300 text-2xl">
              I create tailored solutions using React, Java Spring Boot, PostgreSQL and more for startups and small businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;