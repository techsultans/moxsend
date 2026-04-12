import './globals.css'

export const metadata = {
  metadataBase: new URL('https://moxsend.ai'),

  /* ── Core ── */
  title: {
    default: 'Moxsend — Cold email that actually converts',
    template: '%s | Moxsend',
  },
  description:
    'Stop spraying. Start converting. The AI-powered cold email platform built for founders and closers who refuse to lose deals in the inbox.',
  keywords: [
    'cold email',
    'AI email outreach',
    'email automation',
    'sales automation',
    'B2B lead generation',
    'cold outreach',
    'email campaigns',
    'personalised cold email',
    'pipeline analytics',
    'smart email sequencing',
  ],
  authors: [{ name: 'Moxsend', url: 'https://moxsend.ai' }],
  creator: 'Moxsend',
  publisher: 'Moxsend',

  /* ── Canonical ── */
  alternates: { canonical: 'https://moxsend.ai' },

  /* ── Open Graph ── */
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moxsend.ai',
    siteName: 'Moxsend',
    title: 'Moxsend — Cold email that actually converts',
    description:
      'Stop spraying. Start converting. The AI outreach platform for founders and closers.',
    images: [
      {
        url: '/images/moxsend_og_comingsoon_1200x630.svg',
        width: 1200,
        height: 630,
        alt: 'Moxsend — Cold email that actually converts · Coming soon',
        type: 'image/svg+xml',
      },
      {
        url: '/images/moxsend_og_1200x630.svg',
        width: 1200,
        height: 630,
        alt: 'Moxsend — Cold email that actually converts',
        type: 'image/svg+xml',
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: 'summary_large_image',
    title: 'Moxsend — Cold email that actually converts',
    description: 'Stop spraying. Start converting.',
    images: [
      {
        url: '/images/moxsend_og_twitter_1200x628.svg',
        width: 1200,
        height: 628,
        alt: 'Moxsend — Cold email that actually converts',
      },
    ],
    creator: '@moxsend',
    site: '@moxsend',
  },

  /* ── Icons / Favicon ── */
  icons: {
    icon: [
      { url: '/logos/moxsend_icon_dark_transparent.svg', type: 'image/svg+xml' },
      { url: '/logos/moxsend_icon_dark_2048x2048.png', type: 'image/png' },
    ],
    shortcut: '/logos/moxsend_icon_dark_transparent.svg',
    apple: [
      { url: '/logos/moxsend_icon_dark_2048x2048.png', sizes: '2048x2048', type: 'image/png' },
    ],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/*
          Flash-prevention: reads localStorage before first paint
          so the correct theme is applied without a flicker.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('moxsend-theme');
                  if (t === 'light' || t === 'dark') {
                    document.documentElement.setAttribute('data-theme', t);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
