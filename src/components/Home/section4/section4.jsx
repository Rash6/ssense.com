import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section4.css'
import { Card4 } from './section4card';
function Section4() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
       axios.get("http://localhost:8080/catg4").then((res)=>{
           console.log(res.data)
           setCatg1(res.data) 
       })
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