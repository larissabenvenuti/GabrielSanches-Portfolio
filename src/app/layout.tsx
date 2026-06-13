import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Gabriel Sanches | 3D Artist",
  description:
    "3D Vehicle Artist & Game Dev specializing in AAA-quality vehicle modeling, Texture Baking, and PBR assets. Explore my portfolio of low/midpoly models.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
