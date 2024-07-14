import React from 'react';

const AddAnimalModal = () => {
    const closeModal = () => {
        document.getElementById('add_animal').close();
    };
    return (
        <dialog id="add_animal" className="modal" onClick={(e) => {
            const dialog = document.getElementById('add_animal');
            if (e.target === dialog) {
                closeModal();
            }
        }}>
  <div className="modal-box bg-white border border-[#141414] rounded-3xl w-[352px]">
    <h3 className="font-bold text-lg text-black">Add Animal</h3>
    <form method="dialog" className="modal-backdrop mt-5 w-full">
  <input name='name' type="text" placeholder="Animal Name" className="input w-full max-w-xs bg-[#F2F2F2] text-black focus:outline-none placeholder-black" />
  <div className="input bg-[#F2F2F2] text-black flex items-center p-1  w-full max-w-xs rounded-md overflow-hidden mt-8 mx-auto">
      <div className="px-4 flex">
        <p className="text-black">Image</p>
      </div>
      <label htmlFor="uploadFile1"  className="bg-[#CCC] text-black text-sm px-3 py-2.5 outline-none rounded-[8px] cursor-pointer ml-auto w-max block">upload</label>
      <input type="file" id='uploadFile1' className="hidden" />
    </div>
  <input type="submit" value="Save" className="input w-full max-w-xs bg-black text-white mt-7"/>
  </form>
  </div>
</dialog>
    );
};

export default AddAnimalModal;