import React from 'react';
import type { Metadata } from 'next';
import '../assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { inter } from '../assets/fonts';
import { ToastContainer } from 'react-toastify';
import { ProviderAuth } from '@/Hooks/useAuth';

export const metadata: Metadata = {
  title: 'Stock Wise Works',
  description:
    'Experimenta la comodidad de gestionar tu inventario y ventas con Stock Wise Works. Desde el seguimiento detallado de productos hasta la generación de cotizaciones y recibos de venta, nuestra aplicación simplifica las operaciones comerciales para empresas de acabados arquitectónicos.',
  keywords: ['inventario', 'gestion de inventarios', 'facil y rapido'],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className='h-full'>
      <ProviderAuth>
        <body className={`${inter.className} h-full overflow-y-auto bg-default`}>
          <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover theme="dark" />
          {children}
        </body>
      </ProviderAuth>
    </html>
  );
}
