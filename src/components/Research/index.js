import React from "react"; 
import Link from "gatsby-link";

import more from "../../images/more.svg";

const Research = () => (

  <div>

        <div className="flex flex-col md:flex-row items-center bg-map px-8 pt-5"> 
            <div className="md:w-2/3 sm:w-3/3 text-center">
                <img src={more} className="app"/>
            </div>
            <div className="md:w-2/3 sm:w-3/3">
                <h1 className="inline-block">
                Medication Administration Program
                </h1>
                <p>
                A concept project to explore a digital solution for the MAP protocol.
                </p>
            </div>
        </div>
<div className="flex flex-wrap">

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center primary">
   
      <h3>What is political risk</h3>
      <p>intro  </p>
      <Link to="/map" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center primary">
     
      <h3>Embedded Consultants</h3>
      <p>We send a political risk analyst to your office for a set amount of time or project.</p>
      <Link to="/bso" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center primary">
     
      <h3>Risk Reports</h3>
      <p>We’ll produce a political risk report for you using on our cutting-edge methodology.</p>
      <Link to="/bso" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>


</div>


  </div>
);

export default Research;
