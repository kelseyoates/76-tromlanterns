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
          <h5>Midterms 2018: Lessons for political risk</h5>
          </div>
          <div className="article px-1">
            <p className="article ">The US midterm elections yesterday are the biggest story of the week. Here are some quick thoughts about what they can teach us for political risk and its practice.</p>
            <a href="https://medium.com/@twolanterns/midterms-2018-lessons-for-political-risk-ae5b9569991b"
              className=" px-4 xsm:block sm:inline-block mt-02 no-underline text-white"
            >
            <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Keep Reading</button>
            </a>
          </div>
        </div>

        <div className="mx-auto md:w-1/2 sm:w-2/3 xsm:w-1/1 px-9 ">
          <div className="article-title secondary text-white">
          <h5>How can we measure political risk when we can’t measure political risk?</h5>
          </div>
          <div className="article px-1">
            <p className="article ">A Martin Wolf column in the Financial Times earlier this month discusses how political risk, and political developments more generally, are impacting global markets. It’s a good article, but one odd item jumped out at me.</p>
            <a href="https://medium.com/@twolanterns/how-can-we-measure-political-risk-when-we-cant-measure-political-risk-3232f7ce5fa8"
              className=" px-4 xsm:block sm:inline-block mt-02 no-underline text-white"
            >
            <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Keep Reading</button>
            </a>
          </div>
        </div>

</div>


  </div>
);

export default Blog;
