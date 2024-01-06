'use client'
import React from 'react'
import customStyles from '../../styles/abstracts/_index.module.scss'
import componentStyles from '../../styles/components/navigation/footer.module.scss'
import Image from 'next/image'
import logo_wArrow from '../../../../public/logo_wArrow.svg'
import google_play_button from '../../../../public/google_play_button.svg'
import Dropdown from '../selections/dropdown'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Footer = () => {

  const pathname = usePathname()


  // Log the current route to the console
  console.log('Current Route:', pathname);

  return (


<div className={componentStyles['footer-full-width']} >
<div className={componentStyles['footer-container']} >

<div className={customStyles['grid-container']}>

{/* ... other grid items ... */}

{/* First div spanning 6 columns */}
<div className={`${customStyles['grid-item']} ${customStyles['span-6']}`}>
<span className={customStyles['space-16']} ></span>
     {/* creating a column for the logo and the arrow*/}

     <div className={componentStyles['image-Row']}>
    
  
     <Link href="/">
  
    <Image
      src={logo_wArrow}
      alt="Astute Logo"
      width={38.76}
      height={107.32}
    />
 
</Link>

<div className={componentStyles['stack-items']}>


    <p className={customStyles['R16-semi_bold']}> You are currently on our:</p>
    
    <span className={customStyles['space-8']} ></span>

    <Dropdown/>
    <span className={customStyles['space-16']} ></span>

    <Image
    src={google_play_button}
    alt="Astute Logo"
    width={130}
    height={40}
    style={{
      
      marginBottom: '16px', marginLeft: '8px' }}
    />
    </div>


   
     </div>
   
</div>

{/* Second div spanning 6 columns */}
<div className={`${customStyles['grid-item']} ${customStyles['span-6']}`}>
<span className={customStyles['space-16']} ></span>
<Link href={'/pages/legals'}
className={`${customStyles['M24-bold']} ${pathname === '/pages/legals' ? customStyles['active'] : ''}`}
> Legals</Link>

<span className={customStyles['space-8']} ></span>

<ul >
  <li className={customStyles['R18-semi_bold']} style={{ marginBottom: '16px' }}>Terms of use</li>
  <li className={customStyles['R18-semi_bold']} style={{ marginBottom: '16px' }}>Privacy policy</li>
  <li className={customStyles['R18-semi_bold']} style={{ marginBottom: '16px' }}>Disclaimers</li>
</ul>

</div>

</div>
    </div>
</div>

    
   
  )
}


export default Footer