import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateProduct() {

  const {categoryid} = useParams();
  console.log(categoryid);
    
    const [update, setUpdate] = useState({
        productname:"",
        product_price:"",
        product_image:""     
    });
const [productname, setProductname] = useState()
const [product_price, setProduct_price] = useState()
const [product_image, setProduct_image] = useState()
   

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('category id: ',categoryid);
        const formData = new FormData()
        formData.append('productname', productname);
        formData.append('product_price', product_price);
        formData.append('product_image', product_image);
        axios.put(`http://localhost:4000/api/product/update/${categoryid}`, formData)
          .then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err);
          })
      }

  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>

        <h2> Update Product</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor='productname'>Product Name</label>
                    <input type='text'  placeholder='Enter Product Name' 
                    onChange={(e) => setProductname(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='productprice'>Product Price</label>
                    <input type='text' placeholder='Enter Product Price' 
                    onChange={(e) => setProduct_price(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='productImage'>Product Image</label>
                    <input type='file' name='productIamge' placeholder='Enter Product Image' 
                    onChange={(e) => setProduct_image(e.target.files[0])} />
                </div>

                <button onClick={handleSubmit} className='btn btn-success w-100 rounded-0 mb-2'>Update</button>
            </form>
      </div>

    </div>
  )
}

export default UpdateProduct
