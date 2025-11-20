'use client'
import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nodes = el.querySelectorAll<HTMLDivElement>(".pre-enter");
          if (entry.isIntersecting) {
            nodes.forEach((n, i) => setTimeout(() => n.classList.add("enter"), i * 80));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={ref} className={styles.hero} aria-labelledby="home-title">
      <div className={styles["hero__inner"]}>
        <div>
          <div className={`pre-enter ${styles.badge}`}>Trusted by global supply chains</div>

          <h1 id="home-title" className={`pre-enter ${styles.title}`} style={{ marginTop: "var(--s-3)" }}>
            Export fresh produce — <span style={{ color: "rgb(var(--accent-500))" }}>faster & smarter</span>
          </h1>

          <p className={`pre-enter ${styles.lead}`} style={{ marginTop: "var(--s-3)" }}>
            Integrated telemetry, cleared documentation and priority lift across 120+ lanes. We run a control tower for per-SKU freshness.
          </p>

          <div className={`pre-enter ctaRow`} style={{ marginTop: "var(--s-4)" }}>
            <a href="#contact" className="btn btn--primary">Start Exporting</a>
            <a href="#services" className="btn btn--ghost">View Services</a>
          </div>
        </div>

        <div style={{ justifySelf: "center", alignSelf: "center" }}>
          <div className={styles.visual} aria-hidden>
            <div style={{ width: 320, maxWidth: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700 }}>Live Port ETA</div>
                <div className="plane" aria-hidden>✈️</div>
              </div>

              <div style={{ display: "grid", gap: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgb(var(--muted))" }}>
                  <span>Next Port</span><strong>Dubai</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgb(var(--muted))" }}>
                  <span>Avg Temp</span><strong>2.5°C</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgb(var(--muted))" }}>
                  <span>Containers</span><strong>12</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
