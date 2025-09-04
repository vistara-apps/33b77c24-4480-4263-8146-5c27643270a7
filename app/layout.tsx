import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'ProofStamp - Verify your ideas, monetize your originality',
  description: 'A Base MiniApp that lets creators timestamp and prove the origin of their content, enabling them to earn from remixes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
