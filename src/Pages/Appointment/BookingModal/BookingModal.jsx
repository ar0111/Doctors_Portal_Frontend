import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from 'react-hot-toast';

const BookingModal = ({treatment, selectedDate, setTreatment, refetch}) => {
  const date = format(selectedDate, 'PP');
  const {name:treatmentName, slots, price} = treatment;
  const {user} = useContext(AuthContext);

  const handleBooking = (event)=>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(name);
    
    const booking = {
      appointmentDate : date,
      treatment : treatmentName,
      patient : name,
      slot,
      email,
      phone, 
      price
    }

    // console.log(booking);

    fetch('https://final-server-rho.vercel.app/bookings', {
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        setTreatment(null);
        toast.success('Booking Confirmed');
        refetch();
      }
      else{
        // console.log(data.message);
        toast.error(data.message);
      }
    })
    
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-white">✕</label>
                <h3 className="text-lg font-bold text-left -mt-4">{treatmentName}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input type="text" value={date} disabled className="input w-full input-bordered " />
                    <select name='slot' className="select select-bordered w-full">
                      {
                        slots.map((slot, index) => <option
                          value={slot}
                          key = {index}
                        >{slot}</option>)
                      }
                    </select>
                    <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input w-full input-bordered mt-3" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered mt-3" />
                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered mt-3" />
                    
                    <br />
                    <input className='btn btn-accent w-full -mt-3' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
  );
};

export default BookingModal;
