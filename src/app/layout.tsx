import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const space_Grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shnexus.dev"),

  verification: {
    google: "s3xesMPTBFiRpfC8cJFTG9CjAalGTx6hincsH0nWg18",
  },

  title: {
    default: "sh Nexus",
    template: "%s | sh Nexus",
  },

  description:
    "Modern Digital Product Studio building fast, scalable websites and web applications.",

  keywords: [
    "Next.js",
    "React",
    "Web Development",
    "TypeScript",
    "Tailwind CSS",
    "MERN",
    "Node.js",
  ],

  openGraph: {
    title: "sh Nexus",
    description:
      "Modern Digital Product Studio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrains_Mono.variable} ${space_Grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}
