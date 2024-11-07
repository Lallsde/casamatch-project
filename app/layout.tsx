import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CasaMatch',
  description: 'Trova la casa dei tuoi sogni',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
