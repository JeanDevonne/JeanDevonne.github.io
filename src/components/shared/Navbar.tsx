import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id="#start" className='sticky top-5 mx-auto md:w-[80%] z-50'>
      <div className="flex items-center justify-between p-4 px-8 rounded-[30px] border-1 border-gray-200  dark:bg-black/50 bg-white/60 backdrop-blur-sm">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:underline">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:underline">
              Experiencia
            </Link>
          </li>
        </ul>
        <ul className="md:flex space-x-4 hidden">
          <li>
            <Link href="https://www.linkedin.com/in/jencarlos/" target="_blank" className="hover:underline">Linkedin</Link>
          </li>
          <li>
            <Link href="https://github.com/JeanDevonne" target="_blank" className="hover:underline">Github</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}