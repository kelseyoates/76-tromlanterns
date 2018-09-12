import React from "react"; 
import Link from "gatsby-link";

import training from "../../images/training.svg";
import embedded from "../../images/embedded-consultancy.svg";
import reports from "../../images/reports.svg";


const Services = () => (

  <div>
     <div className="flex flex-col px-1 pt-5 mt-5"> 
      <h2 className="text-center">Services</h2>

  </div>



<div className="flex flex-wrap ">



<div className="xsm:w-1/1 sm:w-2/3 lg:w-1/3 mx-auto px-8">
  <div className="article-image">
    <img src={training} />
  </div>
  <div className="article-title secondary text-white">
    <h4>Team Training</h4>
    </div>
    <div className="article">
    <p className="article">Wish you could do more with the team you already have? Two Lanterns will teach your organization how to use the latest in political risk analysis. Our courses and simulations instill the best practices for navigating the uncertain global environment.</p>

    <p className="article">Team trainings are flexible and can be conducted on-site from a half-day to three days. Trainings are best conducted in groups of 25 or fewer. Multiple engagements are eligible for bulk discounts. </p>
  </div>

</div>

<div className="xsm:w-1/1 sm:w-2/3 lg:w-1/3 mx-auto px-8">
  <div className="article-image">
    <img src={embedded} />
  </div>
  <div className="article-title secondary text-white">
    <h4>Embedded Consultants</h4>
    </div>
    <div className="article">
    <p className="article">Need a political risk, but don’t have time to staff up, you can bring on a Two Lanterns consultant.</p>

    <p className="article">Our consultant comes to your organization with Two Lanterns’ cutting-edge political risk methodology and workflow. They work with your organization to identify the challenge, facilitate input from stakeholders, research the issue where needed, and develop a solution. The process is collaborative and harnesses the capabilities of both Two Lanterns and your organization.</p>
  </div>

</div>



<div className="xsm:w-1/1 sm:w-2/3 lg:w-1/3 mx-auto px-8">
  <div className="article-image">
    <img src={reports} />
  </div>
  <div className="article-title secondary text-white">
    <h4>Risk Reports</h4>
    </div>
    <div className="article">
    <p className="article">Are you looking for some analysis but don't want changes in your workplace? Let Two Lanterns produce a risk report for you. You tell us what you need and we'll use our methodology to create a risk report that's right for you.</p>

    <p className="article">Reports are designed to be both accurate and digestible. Data visualization, graphical elements, and concise writing ensure that these reports can be easily understood and employed among your team. </p>
  </div>

</div>





</div>






  </div>
);

export default Services;
