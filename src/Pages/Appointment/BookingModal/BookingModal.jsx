import React from "react";

const BookingModal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="booking-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-accent text-white">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookingModal;
