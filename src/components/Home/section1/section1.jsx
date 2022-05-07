import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section1.css'
import {Card1} from './section1card';
function Section1() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
       axios.get("http://localhost:8080/catg1").then((res)=>{
           console.log(res.data)
           setCatg1(res.data) 
       })
   }
  return (
    <div className='mainsec1div'>
        {
            catg1.map((el)=>{
             return <Card1 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}




export default Section1;