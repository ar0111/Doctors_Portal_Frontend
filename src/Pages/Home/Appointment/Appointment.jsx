import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/bg-blue.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Appointment = () => {
  return (
    <section className="mt-32 py-10 md:py-0" style={{backgroundImage: `url(${appointment})`}}>
      <div className="hero">
        <div className="hero container mx-auto">
          <div className="flex justify-between px-10 gap-20 items-center text-left">
            <img src={doctor} className="rounded-lg lg:w-1/2 -mt-28 hidden md:block" />
            <div>
                <h5 className="text-secondary">Appointment</h5>
                <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                <p className="py-6 text-white">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
