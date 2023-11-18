import React from 'react';

const Service = ({service}) => {
    const { name, description, img } = service;

    return (
        <div>
            <div className="card shadow-xl bg-base-100">
                <figure>
                    <img
                        src={img}
                        alt={name}
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;