import React from 'react';


const AddCategoryModal = () => {
    const closeModal = () => {
        document.getElementById('add_category').close();
    };

    // add category
    const addCategory = async (categoryName) => {
        const response = await fetch('/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryName),
        });

        const data = await response.json();
        console.log(data)
        return data;
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();
        const categoryName = e.target.category.value;

        const result = await addCategory(categoryName);
        console.log(result);
        
        if (result.status === 200) {
            e.target.reset();
            closeModal();
        } else {
          
            console.error(result.message);
        }
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
    <form method="dialog" className="modal-backdrop mt-5 w-full" onSubmit={handleAddCategory}>
  <input name='category' type="text" placeholder="Name" className="input w-full max-w-xs bg-[#F2F2F2] text-black focus:outline-none placeholder-black" />
  <input type="submit" value="Save" className="input w-full max-w-xs bg-black text-white mt-7 cursor-pointer"/>
  </form>
  </div>
</dialog>
    );
};

export default AddCategoryModal;