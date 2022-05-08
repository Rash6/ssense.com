import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section3.css'
import { Card3 } from './section3card';
function Section3() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 =async ()=>{
    let val=await fetch(`https://backend-ssense.herokuapp.com/catg3`).then((d)=>
    d.json()
    )
    val=val.catg3
    console.log(val);
    setCatg1(val)
   }
  return (
    <div className='mainsec3div'>
        {
            catg1.map((el)=>{
             return <Card3 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Section3;