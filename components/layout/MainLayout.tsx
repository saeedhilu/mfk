import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type Props = React.PropsWithChildren<{ title?: string }>;

export default function MainLayout({ children, title = "MFK Exports" }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "rgb(var(--bg))" }}>
        <header className="site-header">
          <div   style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 0" }}>
            <Navbar />
          </div>
        </header>

        <main style={{ flex: 1 }}>{children}</main>
        <footer style={{ padding: "48px 0", borderTop: "1px solid rgba(12,18,28,0.04)", background: "linear-gradient(180deg, rgba(var(--surface),1), rgba(var(--glass-100),1))" }}>
          <div   style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ minWidth: 220 }}>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>MFK Exports</div>
              <div style={{ color: "rgb(var(--muted))", marginTop: ".5rem" }}>Premium logistics for fresh produce.</div>
            </div>
            <div style={{ color: "rgb(var(--muted))" }}>© {new Date().getFullYear()} MFK Exports</div>
          </div>
        </footer>
      </div>
    </>
  );
}
