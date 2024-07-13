import React from 'react';

const AddCategoryModal = () => {
    const closeModal = () => {
        document.getElementById('add_category').close();
    };
    return (
        <dialog id="add_category" className="modal" onClick={(e) => {
            const dialog = document.getElementById('add_category');
            if (e.target === dialog) {
                closeModal();
            }
        }}>
  <div className="modal-box bg-white border border-[#141414] rounded-3xl w-[352px]">
    <h3 className="font-bold text-lg text-black">Add Category</h3>
    <form method="dialog" className="modal-backdrop mt-5 w-full">
  <input name='name' type="text" placeholder="Name" className="input w-full max-w-xs bg-[#F2F2F2] text-black focus:outline-none placeholder-black" />
  <input type="submit" value="Save" className="input w-full max-w-xs bg-black text-white mt-7"/>
  </form>
  </div>
</dialog>
    );
};

export default AddCategoryModal;