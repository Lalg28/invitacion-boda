import Link from "next/link";

export default function Menu() {

  return (
  <>
  <ul className="navigation">
    <li><Link href="#presentacion">Presentación</Link></li>
    <li><Link href="#ceremonia">Ceremonia</Link></li>
    <li><Link href="#itinerario">Itinerario</Link></li>
    <li><Link href="#formulario">Formulario</Link></li>
    <li><Link href="#regalos">Regalos</Link></li>
  </ul>
  </>
  )
}
