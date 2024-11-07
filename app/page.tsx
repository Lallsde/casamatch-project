import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Benvenuto su CasaMatch</h1>
          <PropertySearch />
          <FeaturedProperties />
          <MarketStatistics />
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

function MainNav() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CasaMatch
        </Link>
        <div className="space-x-4">
          <Link href="/ricerca" className="hover:text-blue-200">
            Ricerca
          </Link>
          <Link href="/aste" className="hover:text-blue-200">
            Aste
          </Link>
          <Link href="/investimenti" className="hover:text-blue-200">
            Investimenti
          </Link>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            Accedi
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Registrati
          </button>
        </div>
      </div>
    </nav>
  )
}

function PropertySearch() {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Ricerca:', { location, propertyType, priceRange })
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Cerca la tua casa ideale</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Località
          </label>
          <input
            id="location"
            type="text"
            placeholder="Inserisci la località"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="propertyType" className="block text-gray-700 text-sm font-bold mb-2">
            Tipo di proprietà
          </label>
          <select
            id="propertyType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Seleziona il tipo di proprietà</option>
            <option value="apartment">Appartamento</option>
            <option value="house">Casa</option>
            <option value="villa">Villa</option>
          </select>
        </div>
        <div>
          <label htmlFor="priceRange" className="block text-gray-700 text-sm font-bold mb-2">
            Fascia di prezzo
          </label>
          <select
            id="priceRange"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Seleziona la fascia di prezzo</option>
            <option value="0-100000">€0 - €100,000</option>
            <option value="100000-250000">€100,000 - €250,000</option>
            <option value="250000-500000">€250,000 - €500,000</option>
            <option value="500000+">€500,000+</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Cerca
        </button>
      </form>
    </div>
  )
}

function FeaturedProperties() {
  const properties = [
    { id: 1, title: 'Villa Moderna', price: 500000, location: 'Milano', image: '/placeholder.svg?height=200&width=300' },
    { id: 2, title: 'Appartamento Centro', price: 300000, location: 'Roma', image: '/placeholder.svg?height=200&width=300' },
    { id: 3, title: 'Casa di Campagna', price: 400000, location: 'Toscana', image: '/placeholder.svg?height=200&width=300' },
  ]

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Proprietà in Evidenza</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="text-2xl font-bold text-blue-600">€{property.price.toLocaleString()}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Visualizza Dettagli
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketStatistics() {
  const [selectedCity, setSelectedCity] = useState('milano')

  const mockData = {
    milano: [
      { month: 'Gen', price: 3500, sales: 120 },
      { month: 'Feb', price: 3550, sales: 135 },
      { month: 'Mar', price: 3600, sales: 150 },
      { month: 'Apr', price: 3650, sales: 140 },
      { month: 'Mag', price: 3700, sales: 160 },
      { month: 'Giu', price: 3750, sales: 180 },
    ],
    roma: [
      { month: 'Gen', price: 3200, sales: 110 },
      { month: 'Feb', price: 3250, sales: 125 },
      { month: 'Mar', price: 3300, sales: 140 },
      { month: 'Apr', price: 3350, sales: 130 },
      { month: 'Mag', price: 3400, sales: 150 },
      { month: 'Giu', price: 3450, sales: 170 },
    ],
  }

  return (
    <div className="mt-12 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Statistiche di Mercato</h2>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
          Seleziona città
        </label>
        <select
          id="city"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="milano">Milano</option>
          <option value="roma">Roma</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Mese</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Prezzo Medio (€/m²)</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Numero di Vendite</th>
            </tr>
          </thead>
          <tbody>
            {mockData[selectedCity as keyof typeof mockData].map((data, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="py-4 px-6 border-b border-grey-light">{data.month}</td>
                <td className="py-4 px-6 border-b border-grey-light">{data.price}</td>
                <td className="py-4 px-6 border-b border-grey-light">{data.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CasaMatch</h3>
            <p className="text-gray-400">Trova la casa dei tuoi sogni con CasaMatch</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li><Link href="/ricerca" className="text-gray-400 hover:text-white">Ricerca Proprietà</Link></li>
              <li><Link href="/aste" className="text-gray-400 hover:text-white">Aste Immobiliari</Link></li>
              <li><Link href="/investimenti" className="text-gray-400 hover:text-white">Investimenti Frazionati</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Azienda</h4>
            <ul className="space-y-2">
              <li><Link href="/chi-siamo" className="text-gray-400 hover:text-white">Chi Siamo</Link></li>
              <li><Link href="/contatti" className="text-gray-400 hover:text-white">Contatti</Link></li>
              <li><Link href="/lavora-con-noi" className="text-gray-400 hover:text-white">Lavora con Noi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legale</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/termini" className="text-gray-400 hover:text-white">Termini e Condizioni</Link></li>
              <li><Link href="/cookie" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 CasaMatch. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(true)

  const handleAccept = () => {
    setShowConsent(false)
    // Qui potresti aggiungere la logica per salvare il consenso
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando a navigare, accetti la nostra politica sui cookie.
        </p>
        <button
          onClick={handleAccept}
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Accetta
        </button>
      </div>
    </div>
  )
}
