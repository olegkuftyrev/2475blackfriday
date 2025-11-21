import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Black Friday',
  description: 'Black Friday project built with Next.js and shadcn/ui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

