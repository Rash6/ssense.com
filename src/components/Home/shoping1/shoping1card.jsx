import './shoping1.css';
export const Shop1 = ({el})=>{
    return (
        <div className='catg1div'>
                     <img src={el.img} alt="" className='s1img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     <button onClick={()=>{
                         (el.id==1)?window.location.href="Menswear":window.location.href="Womenswear"
                     }}> {el.btn} </button>
                   
                 </div>
    )
};