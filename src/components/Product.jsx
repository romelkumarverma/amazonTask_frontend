import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


function product() {

   
  //const [show, setShow] = useState(false);
  // const [categoryid2, setCategory2] = useState()
  // const [productprice2, setProductPrice2] = useState()
  // const [productname2, setProductName2] = useState()


  // const setValuse = (catId) =>{
  //   setCategory2(catId.categoryid)
  //   setProductPrice2(catId.product_price)
  //   setProductName2(catId.productname)
  //   handleShow()
  // }

  // const handleClose = () => setShow(false);
  // const handleShow = () => {
  //   setShow(true);
  // }

  const [data, setData] = useState({
    categoryid: "",
    productname: "",
    product_price: "",
    product_image: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('categoryid', data.categoryid);
    formData.append('productname', data.productname);
    formData.append('product_price', data.product_price);
    formData.append('product_image', data.product_image);
    axios.post('http://localhost:4000/api/product/post', formData)
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err);
      })
  }

  const [show1, setShow1] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/product/get')
      .then((res) => {
        console.log(res)
        setShow1(res.data)
      }).catch((err) => console.log(err));
  }, [])

  // const [update, setUpdate] = useState({
  //   categoryid:"",
  //   productname:"",
  //   product_price:""
  // })

  // const handleupdate = (categoryid2) =>{
  //   axios.put(`http://localhost:4000/api/product/update/${categoryid2}`,{categoryid2, productprice2, productname2 })
  //   .then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>console.log(err)
  //   )
  // }

  ////////////    filter category name    ////////////////

  // const [searchQuery,setSearchQuery] = useState('')

  // const filterItem = show1.filter((item)=>
  //   item.productname.toLowerCase().includes(searchQuery.toLowerCase())
  // )

  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>

        <h2>Product</h2>
        <form onSubmit={handleSubmit}>
          <div className=' col-12 mb-3'>
            <label htmlFor='categoryid'>CategoryId</label>
            <input type='text' name='categoryid' placeholder='Enter Categoryid'
              onChange={(e) => setData({ ...data, categoryid: e.target.value })} />
          </div>

          <div className='col-12 mb-3'>
            <label htmlFor='productname'>Product Name</label>
            <input type='text' name='productname' placeholder='Enter Product Name'
              onChange={(e) => setData({ ...data, productname: e.target.value })} />
          </div>

          <div className='col-12 mb-3'>
            <label htmlFor='product_price'>Product Price</label>
            <input type='text' name='product_price' placeholder='Enter Product Price'
              onChange={(e) => setData({ ...data, product_price: e.target.value })} />
          </div>

          <div className='col-12 mb-3'>
            <label htmlFor='product_image'>Product Image</label>
            <input type='file' name='form-controller-rounded'
              id='inputGroupFile01' placeholder='Enter Product Image'
              onChange={(e) => setData({ ...data, product_image: e.target.files[0] })} />
          </div>

          <button className=' col-12 btn btn-success w-100 rounded-0 mb-2'>Add Product</button>
        </form>
      </div>         

      <div className='' style={{marginLeft:"20px", width:"500px"}}>
         {/* <input type='search' placeholder='Search here' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />  */}
        <table className='table'>
          <thead>
            <tr>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              show1.map((item) =>
                <tr>
                  <td>{item.categoryid}</td>
                  <td>{item.productname}</td>
                  <td>{item.product_price}</td>
                  <td>{
                    <img src={item.product_image} alt='' style={{ width: "30px", height: "30px" }} />
                  }
                  </td>

                  {/* <td><Button variant="primary" onClick={e => setValuse(item)}>
                  Update
                </Button> 
                </td> */}
                <td>
                <Link to={`/updateproduct/${item.categoryid}`} ><button className='btn btn-primary w-100 rounded-0 mb-2'>Edit</button></Link>
                </td>
                
                </tr>
              )
            }
          </tbody>
        </table>
      </div>




      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
        <div className=' col-12 mb-3'>
            <label htmlFor='categoryid'>CategoryId</label>
            <input type='text' name='categoryid' placeholder='Enter Categoryid' 
            value={categoryid2}/>
          </div>

        <div className='col-12 mb-3'>
            <label htmlFor='productname'>Product Name</label>
            <input type='text' name='productname' placeholder='Enter Product Name'
            value={productname2}
              onChange={(e) => setProductName2(e.target.value )} />
          </div>

          <div className='col-12 mb-3'>
            <label htmlFor='product_price'>Product Price</label>
            <input type='text' name='product_price' placeholder='Enter Product Price'
            value={productprice2}
              onChange={(e) => setProductPrice2(e.target.value )} />
          </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  )
}

export default product
