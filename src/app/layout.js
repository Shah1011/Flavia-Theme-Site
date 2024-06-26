import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Flavia',
  description: 'Generated by next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href='/favicon/favicon.ico'/>
      </head>
      <body className={`${roboto.className} bg-slate-800 mx-auto`}>{children}</body>
    </html>
  )
}
