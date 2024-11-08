export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">CasaMatch</h1>
          <p className="mt-2 text-blue-100">Trova la casa dei tuoi sogni</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Cerca la tua casa ideale</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Località
                </label>
                <input
                  type="text"
                  id="location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Inserisci città o zona"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Tipo di proprietà
                </label>
                <select
                  id="type"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>Qualsiasi tipo</option>
                  <option>Appartamento</option>
                  <option>Villa</option>
                  <option>Casa indipendente</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Cerca ora
              </button>
            </form>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Proprietà in evidenza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Placeholder per l'immagine */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Villa Moderna {i}</h3>
                  <p className="text-gray-600">Milano, Italia</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">€450,000</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    Visualizza dettagli
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CasaMatch</h3>
              <p className="text-gray-400">La tua guida nel mondo immobiliare</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contatti</h3>
              <p className="text-gray-400">Email: info@casamatch.it</p>
              <p className="text-gray-400">Tel: +39 02 1234567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Seguici</h3>
              <div className="space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">Facebook</button>
                <button className="text-gray-400 hover:text-white transition-colors">Instagram</button>
                <button className="text-gray-400 hover:text-white transition-colors">LinkedIn</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 CasaMatch. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
