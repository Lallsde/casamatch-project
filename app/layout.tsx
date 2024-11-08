import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export const metadata = {
  title: 'CasaMatch',
  description: 'Trova la tua casa ideale con CasaMatch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
