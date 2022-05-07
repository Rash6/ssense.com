import './section3.css'
export const Card3 = ({el})=>{
    return (
        <div className='catg3div'>
                     <img src={el.img} alt="" className='c3img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     <p className='c1p'>{el.des}</p>
                 </div>
    )
}