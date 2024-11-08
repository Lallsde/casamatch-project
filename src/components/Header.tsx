'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              CasaMatch
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/" 
                className={`text-white px-3 py-2 rounded-md ${
                  pathname === '/' ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/ricerca" 
                className={`text-white px-3 py-2 rounded-md ${
                  pathname === '/ricerca' ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
              >
                Ricerca
              </Link>
              <Link 
                href="/aste" 
                className={`text-white px-3 py-2 rounded-md ${
                  pathname === '/aste' ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
              >
                Aste
              </Link>
              <Link 
                href="/investimenti-frazionati" 
                className={`text-white px-3 py-2 rounded-md ${
                  pathname === '/investimenti-frazionati' ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
              >
                Investimenti Frazionati
              </Link>
              <Link 
                href="/contatti" 
                className={`text-white px-3 py-2 rounded-md ${
                  pathname === '/contatti' ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
              >
                Contatti
              </Link>
              <Link 
                href="/admin" 
                className={`text-white px-3 py-2 rounded-md ${
                  pathname === '/admin' ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
