'use client'
import React from 'react'
import customStyles from '../../styles/abstracts/_index.module.scss'
import componentStyles from '../../styles/components/navigation/menu.module.scss'
import Image from 'next/image'
import astute_logo from '../../../../public/astute_logo.svg'
import menu_icon from '../../../../public/menu.svg'
import close from '../../../../public/close.svg'
import { useState } from 'react';
import Link from 'next/link'


const Menu = () => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleClicked = () => {
        setIsClicked(!isClicked);
      };

      const handleIconClick = (event) => {
        // Prevent the click event from propagating to the parent div
        event.stopPropagation();
        // Revert the state back to its original state
        setIsClicked(false);
      };

  return (

    <div className={
        
        componentStyles['menu-full-width']} >

        <div className={componentStyles['menu-container']} style={{ height: isClicked ? 'auto' : '68px' }}>
        <div>
        <span className={componentStyles['logo-container']}>
        <Link href="/">
  

  <Image
    src={astute_logo}
    alt="Astute Logo"
    width={64}
    height={64}
  />

</Link>
    </span>  
     

        
         
           
           </div>
{/* ... the menu - links ... */}

{/* ... the mobile menu ... */}

<div className={componentStyles['mobile-menu-column']}>
<div onClick={toggleClicked} className={componentStyles['mobile-menu']}>
        {isClicked ? (


<span className={componentStyles['mobile-icon-container']}>
<Image
          src={close} // Replace with the path to your close_icon image
          alt="Close Icon"
          width={28}
          height={28}
          onClick={handleIconClick}
        />
</span>
      
      ) : (

        <span className={componentStyles['mobile-icon-container']}>
 <Image
          src={menu_icon} // Replace with the path to your original image
          alt="Astute Logo"
          width={28}
          height={28}
        />
        </span>
       
      )}







        </div>

        {isClicked && (
        <div  >
          <ul className={componentStyles['ul-nonbullets']}>
            
          <li>
                <Link href="/"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']} ${componentStyles['menu-link:hover']}`}
                >Home</Link>
            </li>
            <li>
                <Link href="/pages/about_us"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}`}
                >About</Link>
            </li>
            <li>
                <Link href="/pages/learn"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}`}
                >Learn</Link>
            </li>
            <li>
                <Link href="/pages/roadmap"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}`}
                >Roadmap</Link>
            </li>
            <li>
                <Link href="/pages/contact_us"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}`}
                >Contact us</Link>
            </li>
            
          </ul>
          
       <span className={customStyles['space-16']}>

       </span>
        </div>
      )}

</div>
        


        </div>
 
    </div>
  
  
  )
}

export default Menu