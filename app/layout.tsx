import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aasha Ki Ek Kiran - Empowering Lives Through Education & Compassion',
  description: 'Aasha Ki Ek Kiran is a nonprofit organization dedicated to educating underprivileged children, supporting elders, and empowering women through impactful community initiatives.',
  keywords: [
    'NGO India',
    'Nonprofit Education',
    'Donate to NGO',
    'Support Underprivileged Children',
    'Aasha Ki Ek Kiran',
    'Women Empowerment NGO',
    'Old Age Home Support',
    'Child Welfare',
    'Volunteer NGO',
  ],
  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'Aasha Ki Ek Kiran - Empowering Lives Through Education & Compassion',
    description:
      'Join Aasha Ki Ek Kiran in transforming lives through education, donations, and social impact events. Support today and be the change.',
    url: 'https://www.aashakiekkiran.org',
    siteName: 'Aasha Ki Ek Kiran',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aasha Ki Ek Kiran - Empowering Lives',
    description:
      'We support education, food relief, women empowerment, and social welfare. Help us build a better tomorrow.', // Update if needed
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Analytics />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}