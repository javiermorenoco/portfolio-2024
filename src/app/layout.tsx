import { type Metadata } from 'next'

import avatarImage from '@/images/avatar.png'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://javiermoreno.co'

export const metadata: Metadata = {
  // Sin metadataBase, Next resuelve las URL relativas contra localhost:3000
  // y las previsualizaciones al compartir el sitio quedan rotas.
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Javier Moreno',
    default: 'Javier Moreno - Desarrollador Frontend',
  },
  description:
    'Soy Javier, un desarrollador frontend cuyo objetivo es transformar ideas en aplicaciones web dinámicas y efectivas. Disfruto el proceso de convertir conceptos complejos en soluciones simples y elegantes. Además de mi pasión por la programación, corro y ando en bicicleta, actividades que me enseñan a mantenerme enérgico y resiliente frente a cualquier desafío.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: avatarImage.src,
        width: avatarImage.width,
        height: avatarImage.height,
        alt: 'Javier Moreno',
      },
    ],
  },
  // El avatar es casi cuadrado, así que 'summary' lo muestra sin recortes;
  // 'summary_large_image' espera una imagen apaisada.
  twitter: {
    card: 'summary',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
