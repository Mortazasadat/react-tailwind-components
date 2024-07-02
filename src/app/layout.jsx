import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../utils/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://sayedmurtaza.com"),
  title: {
    default: ` React Tailwind Components`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sayed Murtaza Hussaini",
    "Sayed Murtaza",
    "Murtaza",
    "Front-end Developer",
    "Frontend Developer",
    "UI",
    "Tailwindcss",
    "react",
    "free components",
    "Component",
    "React Tailwind Components",
    "React Components",
    "Tailwind Components",
    "React Tailwind Components",
    "Tailwind UI",
  ],
  authors: [
    {
      name: "Sayed Murtaza",
      url: "https://sayedmurtaza.com",
    },
  ],
  creator: "Sayed Murtaza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Front-end Developer`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Front-end Developer`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/static/`],
    creator: "@sayedmurtaza",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
