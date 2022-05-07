import './shoping2.css';
export const Shop2 = ({el})=>{
    return (
        <div className='catg1div'>
                     <img src={el.img} alt="" className='s2img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     <button> {el.btn} </button>
                     {/* <p className='c1p'>{el.des}</p> */}
                 </div>
    )
};