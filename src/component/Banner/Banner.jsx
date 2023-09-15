import React from 'react'
import Header from '../Header/Header'
import banner from  '../../assets/Images/Poster.png'
 

 
const Banner = () => {
  return (
    <div style={{
      backgroundImage: `url(${banner})`, 
      backgroundPosition: "center", 
      backgroundSize: "cover",
      height: "500px",
      width: "100%",
    }}
      >
      <Header/>
      <div className='bannertext'>
        <h2>John Wick 3 :</h2>
        <h2>Parabellum</h2>
      </div>  

      <div>
       </div>

     <div>
        <h6>John Wick is on the run after killing a member <br/>
          a $14million price tag on his head, he is the target of his men and women everywhere.<br/>
          of the international assassin's guild, and with</h6> <br/> 
        <button><h5>watch Trailer</h5></button> 
     </div>   
      
    </div>
  )
}

export default Banner