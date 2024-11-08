export default function Aste() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Aste Immobiliari</h1>
      <p className="text-xl mb-8">Scopri le migliori opportunità di investimento nelle nostre aste immobiliari.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Proprietà in Asta {i}</h3>
              <p className="text-gray-600 mb-4">Asta termina tra: 3 giorni</p>
              <p className="text-2xl font-bold text-blue-600 mb-2">Prezzo base: €150,000</p>
              <p className="text-lg text-green-600 mb-4">Offerta attuale: €162,500</p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Fai un'offerta
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Come funzionano le nostre aste?</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Registrati sulla nostra piattaforma</li>
          <li>Sfoglia le proprietà disponibili</li>
          <li>Fai la tua offerta entro la scadenza dell'asta</li>
          <li>Se vinci, verrai contattato per completare l'acquisto</li>
        </ol>
      </div>
    </div>
  )
}
