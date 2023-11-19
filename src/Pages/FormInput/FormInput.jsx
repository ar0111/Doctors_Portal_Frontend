import React from 'react';

const FormInput = ({name, type, placeholder, size}) => {
    return (
        <div className="">
            <input type={type} name={name} placeholder={placeholder} className="my-2 p-2 rounded-lg w-96"/>
        </div>
    );
};

export default FormInput;