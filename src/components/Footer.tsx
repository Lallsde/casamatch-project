import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CasaMatch</h3>
            <p className="text-sm">Trova la tua casa ideale o investi nel mercato immobiliare con facilità.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-blue-400">Home</Link></li>
              <li><Link href="/ricerca" className="text-sm hover:text-blue-400">Ricerca</Link></li>
              <li><Link href="/aste" className="text-sm hover:text-blue-400">Aste</Link></li>
              <li><Link href="/investimenti-frazionati" className="text-sm hover:text-blue-400">Investimenti Frazionati</Link></li>
              <li><Link href="/contatti" className="text-sm hover:text-blue-400">Contatti</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contattaci</h3>
            <p className="text-sm">Email: info@casamatch.com</p>
            <p className="text-sm">Telefono: +39 02 1234567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2023 CasaMatch. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
