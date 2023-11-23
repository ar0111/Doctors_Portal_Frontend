import { format } from "date-fns";
import React from "react";

const BookingModal = ({treatment, selectedDate}) => {
  const date = format(selectedDate, 'PP');
  const {name, slots} = treatment;

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-white">✕</label>
                <h3 className="text-lg font-bold text-left -mt-4">{name}</h3>
                <form className='grid grid-cols-1 gap-3 mt-10'>
                    <input type="text" value={date} disabled className="input w-full input-bordered " />
                    <select className="select select-bordered w-full">
                      {
                        slots.map((slot, index) => <option
                          value={slot}
                          key = {index}
                        >{slot}</option>)
                      }
                    </select>
                    <input name="name" type="text" placeholder="Full Name" className="input w-full input-bordered mt-3" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered mt-3" />
                    <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered mt-3" />
                    
                    <br />
                    <input className='btn btn-accent w-full -mt-3' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
  );
};

export default BookingModal;
