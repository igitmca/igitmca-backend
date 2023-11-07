'use client'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import '@/public/theme.css'
import { ReactNode } from 'react';

const PrimeReactProviders = ({ children }: { children: ReactNode }) => {
  return (
    <PrimeReactProvider>
      {children}
    </PrimeReactProvider>
  )
}

export default PrimeReactProviders