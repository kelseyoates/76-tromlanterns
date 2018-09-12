import React from "react"; 
import Link from "gatsby-link";

import training from "../../images/training.svg";
import embedded from "../../images/embedded-consultancy.svg";
import reports from "../../images/reports.svg";


const Intro = () => (

  <div>
    <div className="flex flex-col px-1 pt-5"> 
      <h2 className="text-center">About Us</h2>

  </div>
     <div className="flex flex-col px-1 sm:w-2/3 mx-auto "> 

      <p>
      Political risk used to be simple. There were just a few world powers and things moved slowly. We could make accurate assessments with fewer tools and less time.
      </p>
      <p>
      Fast-forward to the Arab Spring, Brexit, trade wars - the world is more diverse, more complicated, and the biggest events seem to come out of nowhere. So if the world has changed, shouldn’t our analysis change with it?
      </p>


      <p>We formed Two Lanterns to address this chasm - a more complicated world needed a deeper and more robust way of analyzing and forecasting political risk. We use our expertise and experience to deliver political risk analysis in a new and more accurate way. We draw from behavioral economics, international relations, intelligence studies, and continuous research in the practice of political risk.</p>

  </div>

  </div>
);

export default Intro;
