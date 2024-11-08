export default function InvestimentiFrazionati() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Investimenti Immobiliari Frazionati</h1>
      <p className="text-xl mb-8">Investi in quote di proprietà immobiliari di alto valore con un capitale ridotto.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Progetto Frazionato {i}</h3>
              <p className="text-gray-600 mb-4">Località: Milano, Centro</p>
              <p className="text-lg font-bold mb-2">Valore totale: €1,000,000</p>
              <p className="text-md mb-2">Quote disponibili: 100</p>
              <p className="text-xl text-blue-600 mb-4">Prezzo per quota: €10,000</p>
              <div className="mb-4 bg-gray-200 rounded-full">
                <div 
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" 
                  style={{width: "75%"}}
                >
                  75% Finanziato
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Investi Ora
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Vantaggi degli Investimenti Frazionati</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Accesso a proprietà di alto valore con un investimento minore</li>
          <li>Diversificazione del portafoglio immobiliare</li>
          <li>Gestione professionale degli immobili</li>
          <li>Potenziale di rendimento da affitti e apprezzamento del valore</li>
        </ul>
      </div>
    </div>
  )
}
