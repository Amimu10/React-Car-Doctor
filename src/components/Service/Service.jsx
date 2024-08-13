

import{ useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Service = () => {

         const [services, setServices] = useState([]);

       useEffect(() => {
             fetch("http://localhost:3000/services")
             .then(res => res.json())
             .then(data => {
                console.log(data);
                setServices(data);
             })
       }, [])

    return (
        <div id="service" className="container mx-auto">
            <div className="text-center mt-24 mb-14">
                <h5 className="text-[20px] text-[#FF3811]">Service</h5>
                <h3 className="lg:text-[45px] md:text-[32px] font-bold text-[#151515]">Our Service Area</h3>
                <p className="text-[16px] text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don't look even slightly believable. </p>
            </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    services.map(service => <ServiceCard 
                        key={service.title} 
                        service={service}>
                        </ServiceCard>)
                }
              </div>
        </div>
    );
};

export default Service;