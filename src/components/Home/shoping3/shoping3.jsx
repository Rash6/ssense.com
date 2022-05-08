import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './shoping3.css'
import { Shop3 } from './shoping3card';
function Shoping3() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 =async()=>{
    let val=await fetch(`https://backend-ssense.herokuapp.com/shop3`).then((d)=>
    d.json()
    )
    val=val.shop3
    // console.log(val);
    setCatg1(val)
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