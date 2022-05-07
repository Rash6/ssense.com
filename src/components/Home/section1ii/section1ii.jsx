import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section1ii.css'
import {Card1ii} from './section1iicard';
function Section1ii() {
    const [catg1ii, setCatg1ii] = useState([])
    useEffect(()=>{
     getDataCatg1ii()
    },[])
    const getDataCatg1ii = ()=>{
        axios.get("http://localhost:8080/catg1ii").then((res)=>{
            console.log(res.data)
            setCatg1ii(res.data) 
        })
    }
   return (
     <div className='mainsec1iidiv'>
         {
             catg1ii.map((el)=>{
              return <Card1ii el = {el} key={el.id}/>
                  
                  
                 
             
             })
         }
     </div>
   )
 }

export default Section1ii;