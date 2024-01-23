//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Page from './Page';
// import Data from './Data.json';
// import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Category from './components/Category';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import UpdateCategory from './components/UpdateCategory';
import UpdateProduct from './components/UpdateProduct';



function App() {

//   const [currentPage, setCurrentPage] = useState(1)
//   const recordsPerPage = 3;
//   const lastIndex = currentPage * recordsPerPage;

//   const firstIndex = lastIndex - recordsPerPage;
//   const records = Data.slice(firstIndex, lastIndex);
//   const npage = Math.cell(Data.length / recordsPerPage)
//   const numbers = [...Array(npage + 1).keys()].slice(1)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
      <Route path='/category' element={<Category />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/updatecategory/:categoryid' element={<UpdateCategory />}></Route>
      <Route path='/updateproduct/:categoryid' element={<UpdateProduct />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>


//     <div>
//       <table className='table'>
//         <thead>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//         </thead>
//         <tbody>
//           {records.map ((d,i)=>(
//             <tr key={i}>
//               <td>{d.id}</td>
//               <td>{d.name}</td>
//               <td>{d.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <nav>
//         <ul className='page'>
//             <li className='page-item'>
//               <a href='#' className='page-link'
//               onClick={prePage}>Prev</a>
//             </li>
//             {
//               numbers.map((n, i)=>(
//                 <li className= key={i}>
//                   <a href='#' className='page-link'
//                   onClick={()=> changeCpage(n)} >{n}</a>
//                 </li>
//               ))
//             }
//              <li className='page-item'>
//               <a href='#' className='page-link'
//               onClick={nextPage}>Next</a>
//             </li>
//         </ul>
//       </nav>
//     </div>
//   )

// function prePage() {

// }

// function changeCpage(id) {

// }

// function nextPage(){

// }
  )
}

export default App;
