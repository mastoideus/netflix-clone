import React, {useEffect, useState} from 'react'
import './Nav.css'


const Nav = props=>{
    const [handleNavScroll, setHandleNavScroll]= useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY>448){
                setHandleNavScroll(true)
            } else setHandleNavScroll(false)
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    },[])


    return (
        <div className={`nav ${handleNavScroll && 'nav__black'}`}>
           <img className='nav__logo' src='https://assets.brand.microsites.netflix.io/assets/1561c76e-b389-11e7-9274-06c476b5c346_cm_800w.png?v=50' alt='logo' />
           <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar' />
        </div>
    )
}


export default Nav