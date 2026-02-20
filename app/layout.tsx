import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'code2career_ai | Where boundaries break, breakthroughs happen .....',
  description: 'Enterprise AI Architect specializing in Snowflake, generative AI, and production-grade data platforms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
