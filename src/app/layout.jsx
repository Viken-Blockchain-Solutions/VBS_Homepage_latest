import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import '@/styles/satoshi.css'

export const metadata = {
  title: {
    template: '%s - VBS',
    default: 'VBS - Scandinavia’s leading blockchain development company.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
