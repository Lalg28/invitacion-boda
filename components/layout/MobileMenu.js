'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  return (
    <>
    <ul className="navigation">
      <li onClick={handleMobileMenu}><Link href="#presentacion">Presentación</Link></li>
      <li onClick={handleMobileMenu}><Link href="#ceremonia">Ceremonia</Link></li>
      <li onClick={handleMobileMenu}><Link href="#itinerario">Itinerario</Link></li>
      <li onClick={handleMobileMenu}><Link href="#formulario">Formulario</Link></li>
      <li onClick={handleMobileMenu}><Link href="#regalos">Regalos</Link></li>
    </ul>
    </>
  )
}
