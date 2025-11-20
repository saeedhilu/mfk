"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.documentElement.style.scrollBehavior = open ? "auto" : "smooth";
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // close on Esc or outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // restore focus to button after closing
  useEffect(() => {
    if (!open) {
      buttonRef.current?.focus();
    } else {
      // focus first focusable element in panel for accessibility
      const first = panelRef.current?.querySelector<HTMLElement>("a, button, input");
      first?.focus();
    }
  }, [open]);

  return (
    <header className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div  >
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="MFK Home">
            {/* small SVG icon + brand text */}
            <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden focusable="false">
              <circle cx="12" cy="12" r="10" fill="rgb(var(--color-leaf))" />
              <path d="M7 13c1.6-2 4-3 6-3 0 3-3 5-6 6" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
            <span>MFK Exports</span>
          </Link>

          {/* desktop links + CTA */}
          <nav className={styles.nav + " " + styles.desktopOnly} aria-label="Desktop navigation">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" >
                {l.label}
              </a>
            ))}
            <a href="#contact" className={styles.cta}>Get Quote</a>
          </nav>

          {/* hamburger for mobile */}
          <div>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
            //   aria-expanded={open}
            //   aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
              className={styles.hamburger}
              ref={buttonRef}
              type="button"
            >
              {/* simple animated icon */}
              <motion.span
                initial={false}
                animate={open ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                style={{ display: "block", width: 18, height: 2, background: "rgb(var(--color-earth))", borderRadius: 2 }}
              />
              <span className={styles.sr}>{open ? "Close navigation" : "Open navigation"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile off-canvas */}
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />

            <motion.div
              className={styles.panel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                id="mobile-menu"
                className={styles.panelInner}
                ref={panelRef}
                initial={{ x: 280, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 280, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className={styles.panelHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden focusable="false">
                      <circle cx="12" cy="12" r="10" fill="rgb(var(--color-leaf))" />
                    </svg>
                    <strong>MFK Exports</strong>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className={styles.hamburger}
                    style={{ width: 40, height: 40 }}
                  >
                    ✕
                  </button>
                </div>

                <nav className={styles.mobileLinks} aria-label="Mobile navigation">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className={styles.mobileLink}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>

                <div style={{ marginTop: "auto" }}>
                  <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                    Get Quote
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
