import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './shoping2.css'
import { Shop2 } from './shoping2card';
function Shoping2() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
       axios.get("http://localhost:8080/shop2").then((res)=>{
           console.log(res.data)
           setCatg1(res.data) 
       })
   }
  return (
    <div className='mainsec1div'>
        {
            catg1.map((el)=>{
             return <Shop2 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Shoping2;