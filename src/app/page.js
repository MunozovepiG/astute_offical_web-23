import Image from 'next/image'
import styles from './page.module.css'
import customStyles from './styles/abstracts/_index.module.scss'

export default function Home() {
  return (
    <main >

<div className={customStyles['full-width']}>
      <div className={customStyles.section}>
    <div className={customStyles['grid-container']}>

        {/* ... other grid items ... */}

        {/* First div spanning 6 columns */}
        <div className={`${customStyles['grid-item']} ${customStyles['span-6']}`}>Hello full width</div>

        {/* Second div spanning 6 columns */}
        <div className={`${customStyles['grid-item']} ${customStyles['span-6']}`}>Muno</div>

    </div>


</div>
      </div>





    </main>
  )
}
