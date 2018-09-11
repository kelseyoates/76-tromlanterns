import React from "react";
import Link from "gatsby-link";
import computer from "../../images/computer.svg";

const Hero = () => (

  <div className="bg-hero">

          <div className="flex flex-col md:flex-row items-center px-8 pt-5"> 
          <div className="md:w-2/3 sm:w-3/3">
                <h1 className="white">
                Because political risk shouldn't be a gamble.
                </h1>
                <p className="white">
                The world is more complicated than ever. The old methods leave you exposed to risk and carry high costs. Two Lanterns is here to fix that. We harness information and expertise to deliver you the most advanced political risk analysis on the market today. Get in touch and we can start working together.
                </p>
                <Link to="/contact" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Get started</button>
      </Link>
            </div>
            <div className="md:w-2/3 sm:w-3/3 text-center">
                <img src={computer} className="app"/>
            </div>
    
        </div>

  </div>

);

export default Hero;
