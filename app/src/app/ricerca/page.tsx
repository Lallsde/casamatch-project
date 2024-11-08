'use client'
import { useState } from 'react'

export default function Ricerca() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    // Qui dovresti implementare la logica di ricerca reale
    setResults([
      { id: 1, title: 'Appartamento in centro', price: '€200,000' },
      { id: 2, title: 'Villa con piscina', price: '€500,000' },
      { id: 3, title: 'Loft moderno', price: '€150,000' },
    ])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Ricerca Immobili</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cerca per città, tipo di immobile..."
            className="flex-grow p-2 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Cerca
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((result) => (
          <div key={result.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
              <p className="text-gray-600 mb-4">Prezzo: {result.price}</p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Visualizza Dettagli
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
