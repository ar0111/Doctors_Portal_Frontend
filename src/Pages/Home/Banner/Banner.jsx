import React from "react";
import bannerImage from "../../../assets/images/chair.png"
import landing from "../../../assets/images/landing-bg.png"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div style={
      {
        background: `url(${landing})`,
        backgroundSize: 'cover'
      }
    } className="hero py-28 container mx-auto">
      <div className="flex justify-between px-10 gap-20 items-center text-left">
        
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
          <p className="py-6">
          Medicare is a health theme and medical multipurpose WordPress theme built for an array of services with a number of healthcare and medical care services in mind. Our 12 demos include the following: clinic, cardiology, surgeon, dentist, optometrist, laboratory, general hospital, cosmetic surgery, pediatric clinic, veterinary, psychiatrist, physiatrist, plus 3 new RTL demos.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img
          src={bannerImage}
          className="rounded-lg lg:w-1/2 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
