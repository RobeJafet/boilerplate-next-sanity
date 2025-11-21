import localFont from 'next/font/local'
import "./globals.css";

const SuisseIntl = localFont({
  src: '../fonts/SuisseIntl-Regular.woff2',
  variable: '--font-suisse-intl',
});

const FormaDJR = localFont({
  src: '../fonts/FormaDJR-Regular.woff2',
  variable: '--font-forma-djr',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SuisseIntl.variable} ${FormaDJR.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
