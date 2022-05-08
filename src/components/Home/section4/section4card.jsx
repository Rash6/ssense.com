import './section4.css'
export const Card4 = ({el})=>{
    return (
        <div className='catg4div' onClick={()=>{
            (el.id%2==1)?window.location.href="Menswear":window.location.href="Womenswear"
        }}>
                     <img src={el.img} alt="" className='c4img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     <p className='c1p'>{el.des}</p>
                 </div>
    )
}