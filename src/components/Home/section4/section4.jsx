import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section4.css'
import { Card4 } from './section4card';
function Section4() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 =async()=>{
    let val=await fetch(`https://backend-ssense.herokuapp.com/catg4`).then((d)=>
    d.json()
    )
    val=val.catg4
    console.log(val);
    setCatg1(val)
   }
  return (
    <div className='mainsec4div'>
        {
            catg1.map((el)=>{
             return <Card4 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Section4;