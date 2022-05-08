import './section2.css'
import { useNavigate } from "react-router-dom";

export const Card2 = ({el})=>{
    const Navigate = useNavigate();
return(
        <div className='catg2div' onClick={()=>{
            (el.id%2==1)?window.location.href="Menswear":window.location.href="Womenswear"
        }}>
                     <img src={el.img} alt="" className='c2img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     
                     <p className='c1p'>{el.btn}</p>
                 </div>
    )
}