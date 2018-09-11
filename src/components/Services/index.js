import React from "react"; 
import Link from "gatsby-link";

import training from "../../images/training.svg";
import embedded from "../../images/embedded-consultancy.svg";
import reports from "../../images/reports.svg";


const Services = () => (

  <div>
     <div className="flex flex-col px-1 pt-10"> 
      <h2 className="text-center">What we offer.</h2>

  </div>

<div className="flex flex-wrap">

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="card text-center ">
      <img src={training} />
      <h3>Training</h3>
      <p>We train your staff so you’ll have your own political risk team. </p>
      <Link to="/map" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink services text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="card text-center ">
      <img src={embedded} />
      <h3>Embedded Consultants</h3>
      <p>We send a political risk analyst to your office for a set amount of time or project.</p>
      <Link to="/bso" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink services text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="card text-center ">
      <img src={reports} />
      <h3>Risk Reports</h3>
      <p>We’ll produce a political risk report for you using on our cutting-edge methodology.</p>
      <Link to="/bso" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink services rectangle text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>


</div>


  </div>
);

export default Services;
