import Image from 'next/image'
import styles from './page.module.css'
import M48bold from './components/fonts/fonts.js'
import customStyles from './styles/abstracts/_index.module.scss'

export default function Home() {
  return (
    <main >
 <div className={customStyles.section}>
 <div className={customStyles['grid-container']}>
  <div className={customStyles['grid-item']}>Column 1</div>
  <div className={customStyles['grid-item']}>Column 2</div>
  <div className={customStyles['grid-item']}>Column 3</div>
  <div className={customStyles['grid-item']}>Column 4</div>
  <div className={customStyles['grid-item']}>Column 5</div>
  <div className={customStyles['grid-item']}>Column 6</div>
  <div className={customStyles['grid-item']}>Column 7</div>
  <div className={customStyles['grid-item']}>Column 8</div>
  <div className={customStyles['grid-item']}>Column 9</div>
  <div className={customStyles['grid-item']}>Column 10</div>
  <div className={customStyles['grid-item']}>Column 11</div>
  <div className={customStyles['grid-item']}>Column 12</div>
</div>


</div>
    </main>
  )
}
