import './section2.css'
export const Card2 = ({el})=>{
    return (
        <div className='catg1div'>
                     <img src={el.img} style={{width:"400px"}} alt="" className='c1img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     
                     <p className='c1p'>{el.btn}</p>
                 </div>
    )
}