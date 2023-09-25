import React from 'react'
import style from "./Navbar.module.scss"
import { Nosifer } from 'next/font/google'

const inter = Nosifer({ 
    weight: '400',
    subsets: ['latin']
})

export default function Navbar() {
  return (
    <div className={style.navbar}>
        <h1 className={inter.className}>SCARY MAZE</h1>
    </div>
  )
}
