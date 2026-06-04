import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "IA Solidaire | IA responsable pour l'ESS et l'IAE",
    template: "%s | IA Solidaire"
  },
  description:
    "IA Solidaire accompagne les structures ESS et IAE dans l'adoption concrète, éthique et responsable de l'intelligence artificielle.",
  metadataBase: new URL("https://ia-solidaire.fr"),
  openGraph: {
    title: "IA Solidaire",
    description:
      "L'intelligence artificielle au service de l'impact social.",
    type: "website",
    locale: "fr_FR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
