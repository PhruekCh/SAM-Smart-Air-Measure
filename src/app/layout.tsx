import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAQ Project Draft",
  description: "Next.js and MySQL Website Structure Draft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main-wrapper">
          <header className="app-header glass-panel container" style={{ margin: '1rem auto', padding: '1rem 2rem', border: '1px solid var(--border)' }}>
            <div className="flex justify-between items-center">
              <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                <span className="text-gradient">DAQ</span>Project
              </div>
              <nav className="flex gap-4">
                <a href="#features" className="btn btn-secondary">Features</a>
                <a href="#dashboard" className="btn btn-primary">Dashboard</a>
              </nav>
            </div>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
