'use client'
import { useState } from 'react'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Implementa qui la logica di autenticazione reale
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true)
    } else {
      alert('Credenziali non valide')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-6">Accesso Admin</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Accedi
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Pannello di Amministrazione</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Gestione Immobili</h2>
          <p className="mb-4">Totale immobili: 150</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Aggiungi Nuovo Immobile
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Gestione Aste</h2>
          <p className="mb-4">Aste attive: 10</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Crea Nuova Asta
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Investimenti Frazionati</h2>
          <p className="mb-4">Progetti attivi: 5</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Nuovo Progetto Frazionato
          </button>
        </div>
      </div>
    </div>
  )
}
