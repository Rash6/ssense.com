import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './section1ii.css'
import {Card1ii} from './section1iicard';
function Section1ii() {
    const [catg1ii, setCatg1ii] = useState([])
    useEffect(()=>{
     getDataCatg1ii()
    },[])
    const getDataCatg1ii =async()=>{
        let val=await fetch(`https://backend-ssense.herokuapp.com/catg1ii`).then((d)=>
        d.json()
        )
        val=val.catg1ii
        console.log(val);
        setCatg1ii(val)
        
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