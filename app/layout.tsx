import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Fingers - План розвитку дитини",
  description: "Практичні гри для розвитку малюка за 5 хвилин",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
