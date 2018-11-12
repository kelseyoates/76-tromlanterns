import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

import logo from "../images/logo-image.png";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Two Lanterns"
      meta={[
        { name: 'description', content: 'Two Lanterns is a political risk advisory offering analytical trainings, embedded consultancies, and bespoke reports.' },
        { name: 'keywords', content: 'political risk, analytical training, political consultant, political consultancy' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
    ]}
    />
    <Header />
    <div className="flex flex-col flex-1 mx-auto w-full">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
