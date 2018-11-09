import React from "react";
import Link from "gatsby-link";

import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Why from "../components/Why";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const IndexPage = () => (
  <div>

<Hero />
<Services />
<Why />
<Blog />
<Contact />


  </div>
);

export default IndexPage;
