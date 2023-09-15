import React from 'react'
// import menu from '../images/Menu.jpg'

const Header = () => {
  return (
    <div className='container1'>
      <div className='contan'>
       <h1 className='movie'>MovieBox</h1>
       <input placeholder='What do you want to watch?' className='place'/>
       <h6 className='sign'>sign in</h6>
      </div>
      {/* <img src={menu} alt="logo"> */}
        
    </div>
  )
}

export default Header;