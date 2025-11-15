import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const url = 'https://crudcrud.com/api/b425d3ff78d9462b9f320370cdc1c563/products';
  async function fetchData(){

 async function AddProduct() {
  const new_producr={
    title: "new product",
    price : 656746,
    description: "hello"
  };
  try{
    const res= await axios.post(url,new_producr)
    console.log("product Added",res.data)
  }catch(error){
    console.log(error)
  }
  

  return (
    <>
  <button onClick={fetchData}>getdata</button>
    <button onClick={AddProduct}>postdata</button>

    
    </>
  )
}
}
export default App
