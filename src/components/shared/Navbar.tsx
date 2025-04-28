import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='sticky mx-auto top-5 w-[80%] z-50'>
      <div className="flex items-center justify-between p-4 rounded-[30px] border-1 border-gray-200 bg-white/60 backdrop-blur-sm">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Experiencia
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Proyectos
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <p>Linkedin</p>
          </li>
          <li>
            <p>Github</p>
          </li>
          <li>
            <p>Contacto</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}