import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vehicle Hire Yeovil | Cars, Vans, Minibuses & Trucks",
  description: "Vehicle Hire Yeovil for cars, vans, minibuses and trucks. Practical self-drive rental with flexible options, UK coverage and support for local and longer journeys.",
  icons: {
    icon: "https://sdvh.co.uk/wp-content/uploads/2023/02/cropped-FavIcon-32x32.png",
    apple: "https://sdvh.co.uk/wp-content/uploads/2023/02/cropped-FavIcon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
