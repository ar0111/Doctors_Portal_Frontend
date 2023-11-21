import React, { useState } from 'react';
import bannerImage from "../../../assets/images/chair.png"
import landing from "../../../assets/images/landing-bg.png"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <div style={
            {
              background: `url(${landing})`,
              backgroundSize: 'cover'
            }
          } className="hero py-60 container mx-auto">
            <div className="flex justify-between px-10 gap-20 items-center text-left flex-col-reverse md:flex-row">
              
              <div>
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />

              </div>
              <img
                src={bannerImage}
                className="rounded-lg lg:w-1/2 shadow-2xl"
              />
            </div>
        </div>
    );
};

export default AppointmentBanner;