import React from "react";
import Testimonial from "./Testimonial";
import Valus from "./Valus";
import Reviews from "./Reviews";

const About = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center py-20 bg-slate-200	">About Us</h2>

      <div className="container mx-auto">
        <Testimonial></Testimonial>
        <Valus></Valus>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default About;
