import './section4.css'
export const Card4 = ({el})=>{
    return (
        <div className='catg1div'>
                     <img src={el.img} style={{width:"400px"}} alt="" className='c1img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     <p className='c1p'>{el.des}</p>
                 </div>
    )
}