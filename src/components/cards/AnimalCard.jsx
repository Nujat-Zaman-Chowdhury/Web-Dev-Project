"use client"

import Image from 'next/image';
import React from 'react';

const AnimalCard = () => {
    return (
        <div>
            <div className="flex flex-col justify-center w-[165px]">
            <Image src="/images/Frame 99.png" alt="Animal" width={160} height={191} />
        <h3 className='text-[#FFFFFFCC] text-center mt-1'>Elephant</h3>
            </div>
        </div>
    );
};

export default AnimalCard;