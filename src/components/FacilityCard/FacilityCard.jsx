import React from 'react';

const FacilityCard = ({facility}) => {
    const {name, details} = facility;

    return (
        <div className="">
            <h3>{name}</h3>
            <p>{details}</p>
        </div>
    );
};

export default FacilityCard;