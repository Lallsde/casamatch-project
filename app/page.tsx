'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Benvenuto su CasaMatch</h1>
          
          <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Cerca la tua casa ideale</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                  Località
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Inserisci la località"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="propertyType" className="block text-gray-700 text-sm font-bold mb-2">
                  Tipo di proprietà
                </label>
                <select
                  id="propertyType"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Seleziona il tipo di proprietà</option>
                  <option value="apartment">Appartamento</option>
                  <option value="house">Casa</option>
                  <option value="villa">Villa</option>
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

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Proprietà in Evidenza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((id) => (
                <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Proprietà"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Villa Moderna {id}</h3>
                    <p className="text-gray-600 mb-2">Milano</p>
                    <p className="text-2xl font-bold text-blue-600">€500,000</p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Visualizza Dettagli
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

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
                <li><Link href="/investimenti" className="text-gray-400 hover:text-white">Investimenti 
