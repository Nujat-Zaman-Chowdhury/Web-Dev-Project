"use client"
import React from 'react';
import Button from '../shared/Button';
import AddCategoryModal from '../modals/AddCategoryModal';
import AddAnimalModal from '../modals/AddAnimalModal';

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-6'>
            <Button text="Land Animal" textColor='#EF0D0D' borderColor='#EF0D0D'/>
            <Button text="Bird" textColor='#EF0D0D' borderColor='#EF0D0D'/>
            </div>
           <div className="flex items-center gap-6">
            <div><Button text="Add Animal" textColor='#fff' borderColor='#fff' onClick={()=>document.getElementById('add_animal').showModal()}/>
            <AddAnimalModal/>
            </div>
            <div><Button text="Add Category" textColor='#fff' borderColor='#fff' onClick={()=>document.getElementById('add_category').showModal()}/>
            <AddCategoryModal/>
          </div>


           </div>
             
        </div>
    );
};

export default Header;