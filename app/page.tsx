import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Benvenuti su CasaMatch</h1>
      <p className="text-xl mb-8">Trova la tua casa ideale o investi nel mercato immobiliare con facilità.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/ricerca" className="bg-blue-600 text-white p-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Cerca Immobili</h2>
          <p>Trova la casa dei tuoi sogni tra le nostre numerose offerte.</p>
        </Link>
        <Link href="/aste" className="bg-green-600 text-white p-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Partecipa alle Aste</h2>
          <p>Scopri opportunità uniche nelle nostre aste immobiliari.</p>
        </Link>
        <Link href="/investimenti-frazionati" className="bg-purple-600 text-white p-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Investimenti Frazionati</h2>
          <p>Investi in quote di proprietà immobiliari di alto valore.</p>
        </Link>
        <Link href="/contatti" className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Contattaci</h2>
          <p>Hai domande? Il nostro team è qui per aiutarti.</p>
        </Link>
      </div>
    </div>
  )
}
