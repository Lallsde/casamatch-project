export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">CasaMatch</h1>
            </div>
            <div className="hidden sm:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Home</a>
                <a href="#" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Ricerca</a>
                <a href="#" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Contatti</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Benvenuto sul nostro sito
          </h2>
          <p className="text-xl text-gray-600">
            Trova la casa dei tuoi sogni con CasaMatch
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-6">Cerca la tua casa ideale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Località
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Inserisci la località"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prezzo massimo
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="€"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo di proprietà
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>Appartamento</option>
                <option>Villa</option>
                <option>Casa indipendente</option>
              </select>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Cerca ora
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Villa Moderna {i}</h3>
                <p className="text-gray-600 mb-4">Milano, Italia</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">€450,000</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Visualizza dettagli
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CasaMatch</h3>
              <p className="text-gray-400">
                La tua guida nel mondo immobiliare
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contatti</h3>
              <p className="text-gray-400">Email: info@casamatch.it</p>
              <p className="text-gray-400">Tel: +39 02 1234567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Link utili</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Chi siamo</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Termini e condizioni</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2024 CasaMatch. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
