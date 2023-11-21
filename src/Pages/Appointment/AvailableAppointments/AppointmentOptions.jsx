import React from 'react';

const AppointmentOptions = ({option}) => {
    const { name, slots } = option;

    return (
        <div>
            <div className="card shadow-xl bg-base-100">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                    <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"}</p>
                    <button
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase"
                        onClick={() => document.getElementById("booking-modal").showModal()}
                    >
                        open modal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;