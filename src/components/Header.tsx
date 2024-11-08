import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">CasaMatch</Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Home</Link>
              <Link href="/ricerca" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Ricerca</Link>
              <Link href="/aste" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Aste</Link>
              <Link href="/investimenti-frazionati" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Investimenti Frazionati</Link>
              <Link href="/contatti" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Contatti</Link>
              <Link href="/admin" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
