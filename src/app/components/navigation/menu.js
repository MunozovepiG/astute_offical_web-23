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
import { usePathname } from 'next/navigation'


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

      const pathname = usePathname()


  return (

    <div className={
        
        componentStyles['menu-full-width']} >

        <div className={ `${componentStyles['menu-container']} ${componentStyles['']}` } style={{ height: isClicked ? 'auto' : '68px' }}>
        <div>
        <span className={componentStyles['logo-container']}>
        <Link href="/">
  

  <Image
  className={componentStyles['astute-image']}
    src={astute_logo}
    alt="Astute Logo"
    width={64}
    height={64}
  />

</Link>



<span
className = {`${componentStyles['astute-logo-text']} ${customStyles['M32-bold']}`}
>astute</span>


    </span>  
     

        
         
           
           </div>
{/* ... the menu - links ... */}

<div className={componentStyles['main-menu-links-container']} > 

   <span>
    
   <Link href="/"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               
               ${pathname === '/' ? customStyles['main-links-active'] : ''}
               `
            }
                >Home</Link>
    </span> 

    <span>
    <Link href="/pages/about_us"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/about_us' ? customStyles['main-links-active'] : ''}
               `}
                >About</Link>

    </span>

    <span>
    <Link href="/pages/learn"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/learn' ? customStyles['main-links-active'] : ''}
               `}
                >Learn</Link>
    </span>
    

    <span>
    <Link href="/pages/roadmap"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/roadmap' ? customStyles['main-links-active'] : ''}
               `}
                >Roadmap</Link>

    </span>

    <span>
    <Link href="/pages/contact_us"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/contact_us' ? customStyles['main-links-active'] : ''}
               `}
                >Contact us</Link>
    </span>
   </div>

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
          alt="Menu"
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
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               
               ${pathname === '/' ? customStyles['main-links-active'] : ''}
               `
            }
                >Home</Link>
            </li>
            <li>
                <Link href="/pages/about_us"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/about_us' ? customStyles['main-links-active'] : ''}
               `}
                >About</Link>
            </li>
            <li>
                <Link href="/pages/learn"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/learn' ? customStyles['main-links-active'] : ''}
               `}
                >Learn</Link>
            </li>
            <li>
                <Link href="/pages/roadmap"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/roadmap' ? customStyles['main-links-active'] : ''}
               `}
                >Roadmap</Link>
            </li>
            <li>
                <Link href="/pages/contact_us"
               className={`${customStyles['M18-bold']} ${componentStyles['menu-link']}
               ${pathname === '/pages/contact_us' ? customStyles['main-links-active'] : ''}
               `}
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