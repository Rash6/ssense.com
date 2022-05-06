import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './shoping1.css'
import { Shop1 } from './shoping1card';
function Shoping1() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
       axios.get("http://localhost:8080/shop1").then((res)=>{
           console.log(res.data)
           setCatg1(res.data) 
       })
   }
  return (
    <div className='mainsec1div'>
        {
            catg1.map((el)=>{
             return <Shop1 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Shoping1;