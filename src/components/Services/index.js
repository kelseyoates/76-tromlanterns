import React from "react"; 
import Link from "gatsby-link";

import training from "../../images/training.svg";
import embedded from "../../images/embedded-consultancy.svg";
import reports from "../../images/reports.svg";


const Services = () => (

  <div id="services">
     <div className="flex flex-col px-1 pt-5 mt-5"> 
      <h2 className="text-center">Services</h2>

  </div>


<div className="flex flex-wrap items-top px-8 py-2"> 
  <div className="flex flex-wrap items-center lg:w-1/3 px-8 py-2"> 

    <div className=" sm:w-1/1 md:w-1/2 lg:w-1/1 text-center mx-auto px-8">
      <img src={training} />
    </div>
    <div className="sm:w-1/1 md:w-1/2 lg:w-1/1 px-8 mt-37">
      <div className="article-title secondary text-white">
        <h4>Team Training</h4>
      </div>
      <div className="article px-1">
        <p className="article ">Wish you could do more with the team you already have? Two Lanterns will teach your organization how to use the latest in political risk analysis. Our courses and simulations instill the best practices for navigating an uncertain global environment.</p>
        <p className="article ">Team trainings are flexible and can be conducted on-site from one half-day to three full days. Trainings are best conducted in groups of 25 or fewer. Multiple engagements are eligible for bulk discounts. </p>
      </div>
    </div>  
</div>

  <div className="flex flex-wrap items-center lg:w-1/3 px-8 py-2"> 

<div className=" sm:w-1/1 md:w-1/2 lg:w-1/1 text-center mx-auto px-8">
  <img src={embedded} />
</div>
<div className="sm:w-1/1 md:w-1/2 lg:w-1/1 px-8 mt-37">
  <div className="article-title secondary text-white">
    <h4>Embedded Consultants</h4>
  </div>
  <div className="article px-1">
  <p className="article ">Need political risk analysis, but don’t have time to staff up? Bring on a Two Lanterns consultant.</p>

<p className="article ">Our consultant comes to your organization with Two Lanterns’ cutting-edge political risk methodology and workflow. They work with your organization to identify the challenge, facilitate input from stakeholders, research the issues, and develop a solution. The process is collaborative and harnesses the capabilities of Two Lanterns and your organization.</p>
  </div>
</div>  

</div>


  <div className="flex flex-wrap items-center lg:w-1/3 px-8 py-2"> 

<div className=" sm:w-1/1 md:w-1/2 lg:w-1/1 text-center mx-auto px-8">
  <img src={reports} />
</div>
<div className="sm:w-1/1 md:w-1/2 lg:w-1/1 px-8 mt-37">
  <div className="article-title secondary text-white">
    <h4>Risk Reports</h4>
  </div>
  <div className="article px-1">      
  <p className="article ">Are you looking for some analysis but don't want changes in your workplace? Let Two Lanterns produce a risk report for you. Tell us what you need and we'll use our methodology to create a risk report that's right for you.</p>
    <p className="article ">Reports are designed to be both accurate and digestible. They employ data visualization, graphical elements, and concise writing to make a report you can actually read. </p>

  </div>
</div>  

</div>
</div>

  </div>
);

export default Services;
