import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vehicle Hire Barnstaple | Cars, Vans, Minibuses & Trucks",
  description: "Vehicle hire in Barnstaple for cars, vans, minibuses and trucks. Practical self-drive options with flexible booking, local support and wide area coverage.",
  alternates: {
    canonical: "/",
  },
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
