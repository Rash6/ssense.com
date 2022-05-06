import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './shoping3.css'
import { Shop3 } from './shoping3card';
function Shoping3() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
       axios.get("http://localhost:8080/shop3").then((res)=>{
           console.log(res.data)
           setCatg1(res.data) 
       })
   }
  return (
    <div className='mainsec1div'>
        {
            catg1.map((el)=>{
             return <Shop3 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Shoping3;