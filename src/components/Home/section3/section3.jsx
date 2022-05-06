import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section3.css'
import { Card3 } from './section3card';
function Section3() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
       axios.get("http://localhost:8080/catg3").then((res)=>{
           console.log(res.data)
           setCatg1(res.data) 
       })
   }
  return (
    <div className='mainsec1div'>
        {
            catg1.map((el)=>{
             return <Card3 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Section3;