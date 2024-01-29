import React, { useState } from 'react';
import './Menu.css'

const Menu = () => {
    const [menu,setMenu] = useState(false)
    // const [active,setActive] = useState(false)
    return (
        <div className='header-menu'>
            <div className='headers-list'>
            <h1>React</h1>
            <div className='lines' onClick={()=> setMenu(!menu)} style={{margin: menu ? '0 auto' : '', border: menu ? 'none' : ''}}>
                <div className='one' style={{transform: menu ? 'rotate(45deg)': '', top: menu ? '10px' : '',left: menu ? '5px' : '', position: menu ? 'absolute' : ''}}></div>
                <div className='two' style={{transform: menu ? 'scale(0)' : 'scale(1)', display: menu ? 'none' : ''}}></div>
                <div className='three'style={{transform: menu ? 'rotate(-45deg)': '', top: menu ? '10px' : '',left: menu ? '5px' : '', position: menu ? 'absolute' : ''}} ></div>
            </div>
            </div>
            <div className='menu-list' style={{display: menu ? 'block' : 'none'}}>
               <h2>React</h2>
               <h2>Components</h2>
               <h2>Hooks</h2>
               <h2>Library</h2>
               <h2>Framework</h2>
            </div>
        </div>
    );
};

export default Menu;