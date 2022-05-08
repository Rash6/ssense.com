import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section2.css'
import { Card2 } from './section2card';
function Section2() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = async()=>{
    let val=await fetch(`https://backend-ssense.herokuapp.com/catg2`).then((d)=>
    d.json()
    )
    val=val.catg2
    console.log(val);
    setCatg1(val)
   }
  return (
    <div className='mainsec2div'>
        {
            catg1.map((el)=>{
             return <Card2 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Section2;