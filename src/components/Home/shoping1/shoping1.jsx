import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './shoping1.css'
import { Shop1 } from './shoping1card';
function Shoping1() {
   const [catg1, setCatg1] = useState([])
   useEffect(()=>{
    getDataCatg1()
   },[])
   const getDataCatg1 = ()=>{
    
       let data=axios.get("https://backend-ssense.herokuapp.com/shop1").then((res)=>
        res.json()
        )
        data=data.shop1
        console.log(data);
       }
   
  return (
    <div className='mainsec1div'>
        {
            catg1.map((el)=>{
             return <Shop1 el = {el} key={el.id}/>
                 
                 
                
            
            })
        }
    </div>
  )
}

export default Shoping1;