import './section1ii.css'


export const Card1ii = ({el})=>{
    return (
         

        <div className='catg1iidiv' onClick={()=>{
            (el.id%2==1)?window.location.href="Menswear":window.location.href="Womenswear"
        }}>
                     <img src={el.img} alt="" className='c1img'/>
                     <h2 className='c1h2'>{el.title}</h2>
                     <p className='c1p'>{el.des}</p>
        </div>

       

    )

}


// style={{width:"400px"}} 