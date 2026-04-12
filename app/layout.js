import './globals.css'

export const metadata = {
  title: 'Moxsend — Cold email that actually converts',
  description:
    'Stop spraying. Start converting. The AI outreach platform built for founders and closers who refuse to lose deals in the inbox.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
