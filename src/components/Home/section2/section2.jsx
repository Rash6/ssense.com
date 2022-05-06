import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section2.css'
import { Card2 } from './section2card';
function Section2() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
       axios.get(" http://localhost:8080/catg2").then((res)=>{
           console.log(res.data)
           setCatg1(res.data) 
       })
   }
  return (
    <div className='mainsec1div'>
        {
            catg1.map((el)=>{
             return <Card2 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Section2;