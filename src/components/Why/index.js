import React from "react"; 
import Link from "gatsby-link";

import why from "../../images/why.svg";

const Why = () => (

<div>
<div className="flex flex-col md:flex-row px-8 pt-10 "> 
<div className="md:w-1/3 sm:w-3/3 mx-auto">
      <img src={why}/>
  </div>
  </div>
  <div className="flex flex-col md:flex-row px-8 pt-5 "> 
<div className="md:w-2/3 sm:w-3/3 mx-auto">
      <h2 className="text-center">
      Why Two Lanterns.
      </h2>
      <p>
      Political risk used to be simple. There were just a few world powers and things moved slowly. We could make accurate assessments with fewer tools and less time.
      </p>
      <p>
      Fast-forward to the Arab Spring, Brexit, trade wars - the world is more diverse, more complicated, and the biggest events seem to come out of nowhere. So if the world has changed, shouldn’t our analysis change with it?
      </p>
      <p>We formed Two Lanterns to address this chasm - a more complicated world needed a deeper and more robust way of analyzing and forecasting political risk. We use our expertise and experience to deliver political risk analysis in a new and more accurate way. We draw from behavioral economics, international relations, intelligence studies, and continuous research in the practice of political risk.</p>
      <p>We also wanted to change how we work with clients. In addition to offering multiple services, we want you to come away from our work knowing more about the world and feeling more confident about your investment or next action. Our goal is to be there for you and to be there with you, from beginning to end. Get in touch with us today and we can talk about how Two Lanterns can help you.</p>
      </div>
</div>

</div>

);

export default Why;
