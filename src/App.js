import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'

function App() {

const [product, setproduct] = useState([])

const fetchurl=() =>{
  fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((data) => setproduct(data))
}

useEffect(() => {
 fetchurl()
}, [])




  return (
    <div className='product-card'>
      {
        product.map((item) =>{
          return <div>
            <img src={item.image} alt='' />
            <p>{item.title}</p>
          </div>
        })
      }
    </div>
  )
}

export default App

