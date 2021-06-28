import React from 'react';

const AddExpenseForm = () => {
    return(
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input 
                        required='required' 
                        type='text' 
                        className='form control' 
                        id='name'
                    ></input>
                </div>
                <div className='col-sm'>
                    <lable for='cost'>Cost</lable>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                    ></input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;