import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateCategory() {

   
    const [update, setUpdate] = useState({
      categoryname:""
    });
    

    const { categoryid } = useParams()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(categoryid)
        axios.put('http://localhost:4000/api/category/update/'+categoryid, update)
            .then(result => {
                console.log(result);
                navigate('/category')
            }).catch(err => console.log(err))
    }

  return (

    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>

        <h2> Update Category</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='categoryname'>Category Name</label>
                    <input type='text' name='categoryname' placeholder='Enter Category Name' 
                    onChange={(e) => setUpdate({categoryname: e.target.value})} />
                </div>

                <button className='btn btn-success w-100 rounded-0 mb-2'>Update</button>
            </form>
      </div>

    </div>
  )
}

export default UpdateCategory
