import * as React from 'react';
import { useState, useEffect } from 'react';
import { IServiceOrder } from '../entities/serviceOrder';

interface ServiceOrderProps {
    serviceOrder?: IServiceOrder
}

const ServiceOrderPage : React.SFC<ServiceOrderProps> = ({serviceOrder}) => {

    useEffect(()=>{
        console.log(serviceOrder?.id);
    }, [])
    
    return (
        <div>
            <div className='info-container'>

            </div>
            <div className='so-container'>

            </div>
        </div>
    )
}

export default ServiceOrderPage