import "../styles/globals.css";

export const metadata = {
  title: "Agentic App",
  description: "Deployed to Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1>Agentic</h1>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">? {new Date().getFullYear()} Agentic</div>
        </footer>
      </body>
    </html>
  );
}
