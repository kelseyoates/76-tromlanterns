import React from "react"; 
import Link from "gatsby-link";

import training from "../../images/training.svg";
import embedded from "../../images/embedded-consultancy.svg";
import reports from "../../images/reports.svg";


const Blog = () => (


  <div id="blog">
     <div className="flex flex-col px-1 pt-5 mt-5 "> 
      <h2 className="text-center">Research and Insights</h2>
    </div>

  

    <div className="flex flex-col md:flex-row px-9 pt-5"> 
        <div className="mx-auto md:w-1/2 sm:w-2/3 xsm:w-1/1 px-9 ">
          <div className="article-title secondary text-white">
          <h5>2018: Recapping the year in political risk</h5>
          </div>
          <div className="article px-1">
            <p className="article ">Around this time of year, you start to see lists of the top political risks for the next 12 months. </p>
  <p className="article ">But we rarely see lists evaluating how our previous predictions performed. Yet even if it is not as topical, assessing past predictions is the only sure path towards a collective improvement and evolution of political risk as a practice. </p>
  <p className="article ">So before I write my own top risks for 2019, here’s an overview of what the political risk world got right, got wrong, and completely missed in 2018.</p>
            <p className="article-link">
            <a href="https://medium.com/@twolanterns/2018-recapping-the-year-in-political-risk-a1313428efed"
              className="px-4 xsm:block sm:inline-block hover:bg-secondary highlight mt-02 font-italic no-underline text-grey-darker">
        Keep Reading →
            </a></p>
            
          </div>
        </div>
  
  
        <div className="mx-auto md:w-1/2 sm:w-2/3 xsm:w-1/1 px-9 ">
          <div className="article-title secondary text-white">
          <h5>Massachusetts network theory and unconventional political data</h5>
          </div>
          <div className="article px-1">
            <p className="article ">CommonWealth magazine yesterday ran my article about using network theory to understand how cosponsorships in legislation indicate a social structure underlying the state government. Basically, we can take the web of legislators who have cosponsored bills with each other, treat that like a social network, and use some sociological methods to tease out some insights about what that social structure means.</p>
            <p className="article-link">
            <a href="https://medium.com/@twolanterns/massachusetts-network-theory-and-unconventional-political-data-b764ad3a9f30"
              className="px-4 xsm:block sm:inline-block hover:bg-secondary highlight mt-02 font-italic no-underline text-grey-darker">
        Keep Reading →
            </a></p>
          </div>
        </div>

</div>


  </div>
);

export default Blog;
