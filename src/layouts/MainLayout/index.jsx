import React from 'react'
import styles from './style.module.css'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
   return (
     
      <div className={styles.layout}>
         <nav className={styles.mainNav}>
            logo
            <ul>
               <li>a</li>
               <li>b</li>
               <li>c</li>
            </ul>
            avatar
         </nav>
         <Outlet/>
    </div>
  )
}
