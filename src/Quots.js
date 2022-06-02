import React, {useState, useEffect } from 'react'
import './quots.css'
import axios from 'axios';

const Quots = () => {
  const [data, setData] = useState([]);
  const getApi=async ()=>{
    const {data}=await axios("https://goquotes-api.herokuapp.com/api/v1/all/quotes")
    let sayi=Math.floor(Math.random() * 8260);
    setData(data.quotes[sayi])
  };

  useEffect(() => {
    getApi();
  }, [])
  return (
   
    <div className='temel'>
      <h5 className='yazi'>"{data.text}"</h5>
      <div className='block'>
      <p className='yazar'>Author: {data.author}</p>
      <p className='konu'>Tag: {data.tag}</p>
      <button className='buton' onClick={getApi}>Get Quots</button>
      </div>
      </div>
     
  )
}
export default Quots
//get axios 