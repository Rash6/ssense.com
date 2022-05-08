import { Link ,Route} from 'react-router-dom';
import { Menswear } from '../../Menswear';
import { Womenswear } from '../../Womenswear';
import './shoping2.css';
import { useNavigate } from 'react-router-dom';

export const Shop2 = ({el})=>{
    const Navigate = useNavigate();
    return (
        <div className='catg1div' >
                     <img src={el.img} alt="" className='s2img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     <button onClick={()=>{
                         (el.id==1)?window.location.href="Menswear":window.location.href="Womenswear"
                     }}> {el.btn} </button>
                     {/* <p className='c1p'>{el.des}</p> */}
                     {/* <button onClick={()=>find(el.id)}> {el.btn} </button> */}
                 </div>
    )
};