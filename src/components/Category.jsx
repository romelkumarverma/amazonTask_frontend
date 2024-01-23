import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Category() {

  const [show, setShow] = useState([]);
  const [category1, setCategory1] = useState({
    categoryid: "",
    categoryname: ""
  });

  const handleSubmit = () => {
    axios.post('http://localhost:4000/api/category/post', category1)
      .then((res) => {
        setCategory1(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }

  const handleget = () => {
    axios.get(`http://localhost:4000/api/category/get`)
      .then((res) => {
        console.log(res)
        setShow(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    handleget()
  }, [])

  return (
    <>
      <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded border ' style={{width:"270px"}}>

          <h2>Category</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='categoryid'>CategoryId</label><br />
              <input type='text' name='categoryid' placeholder='Enter Categoryid'
                onChange={(e) => setCategory1({ ...category1, categoryid: e.target.value })} />
            </div>

            <div className='mb-3'>
              <label htmlFor='categoryname'>Category Name</label><br/>
              <input type='text' name='categoryname' placeholder='Enter Category Name'
                onChange={(e) => setCategory1({ ...category1, categoryname: e.target.value })} />
            </div>

            <button className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
          </form>
        </div>

        <div className='mt-3' style={{marginLeft:'50px'}}>
          <table className='table'>
            <thead>
              <tr>
                <th>Category Id</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                show.map((c) => 
                <tr>
                  <td>{c.categoryid}</td>
                  <td>{c.categoryname}</td>
                  <td>
                  <Link to={`/updatecategory/${c.categoryid}`}><button className='btn btn-info btn-sm me-2'>Edit </button></Link>

                  {/* <Link to={`/dashboard/updatecategory/${c.categoryid}`}><button className='btn btn-info btn-sm me-2'>Edit </button></Link>
                  <button className='btn btn-sm'>Delete</button> */}
                </td>
                </tr> 
                )   
            }
            </tbody>
        </table>
    </div >
    
    </div>
   </>       
  )
}

export default Category;