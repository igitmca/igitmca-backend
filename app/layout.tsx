import type { Metadata } from 'next'
import './globals.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { roboto } from '@/lib/fonts';
import PrimeReactProviders from '@/context/PrimeReactProvider';

export const metadata: Metadata = {
  title: 'IGIT MCA',
  description: 'IGIT MCA BACKEND',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <PrimeReactProviders>
          {children}
        </PrimeReactProviders>
      </body>
    </html>
  )
}
