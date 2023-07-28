import React from "react";
import bannerLogo from '../Images/bannerlogo.gif';

const About = () => {
  return (
    <div>
      <img
        src={bannerLogo}
        width="700"
        height="200"
        alt="logo"
        className="banner"
      />
<br />
<br />
<br />
<br />
<iframe
title="my map"
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13824.49314528324!2d-95.1953564!3d29.975886699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1690591859264!5m2!1sen!2sus"
  width="500"
  height="350"
  frameborder="0"
  style={{ border: "0" }}
  allowfullscreen
></iframe>
    </div>
  );
};

export default About;

