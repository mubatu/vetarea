import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { site } from "@/data/site.tr";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : site.url;
  const socialImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Vet Area | Emek Veteriner Kliniği",
      template: "%s | Vet Area",
    },
    description: site.description,
    applicationName: site.name,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName: site.name,
      url: origin,
      title: "Vet Area | İyi bakılmak onların da hakkı",
      description: site.description,
      images: [{ url: socialImage, width: 1731, height: 909, alt: "Vet Area Emek Veteriner Kliniği" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vet Area | Emek Veteriner Kliniği",
      description: site.description,
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#08396a",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
