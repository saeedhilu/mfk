// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import Container from './ui/Container'
// import Section from './ui/Section'
// import styles from './Location.module.css'

// interface LocationData {
//   name: string
//   address: string
//   coordinates: {
//     lat: number
//     lng: number
//   }
//   mapUrl: string
// }

// const location: LocationData = {
//   name: "Chirayil Chungam, Kondotty",
//   address: "Chirayil, Kondotty, Malappuram, Kerala, India",
//   coordinates: {
//     lat: 11.1294071,
//     lng: 75.9730379,
//   },
//   mapUrl:
//     "https://www.google.com/maps/place/@11.1294495,75.9727543,19.3z/data=!4m6!1m5!3m4!2zMTHCsDA3JzQ1LjkiTiA3NcKwNTgnMjIuOSJF!8m2!3d11.1294071!4d75.9730379?entry=ttu",
// };



// export default function Location() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   // const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080665e0bb9959%3A0x19b75e6b4e671ef1!2sAngamaly%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`
//   const embedUrl =
//   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.808812049287!2d75.9704626760117!3d11.129407088405757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e3aee76aa3%3A0xdbfacea5b28bf3!2s11%C2%B007'45.9%22N%2075%C2%B058'22.9%22E!5e0!3m2!1sen!2sin!4v1731933392001!5m2!1sen!2sin";


//   return (
//     <Section id="location" ref={ref} background="secondary" className={styles.section}>
//       <Container>
//         <motion.div
//           className={styles.sectionHeader}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className={styles.sectionTitle}>Our Location</h2>
//           <p className={styles.sectionSubtitle}>Visit us or get in touch from anywhere in the world</p>
//         </motion.div>

//         <div className={styles.layout}>
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//             transition={{ duration: 0.6 }}
//             className={styles.locationCard}
//           >
//             {/* <div className={styles.locationIcon}>📍</div> */}
//             <h3 className={styles.sectionTitle}>{location.name}</h3>
//             <p className={styles.locationAddress}>{location.address}</p>

//             <div className={styles.detailsList}>
//               <div className={styles.detailItem}>
//                 <div className={styles.detailIcon}>🗺️</div>
//                 <div className={styles.detailContent}>
//                   <div className={styles.detailLabel}>Coordinates</div>
//                   <p className={styles.detailValue}>
//                     {location.coordinates.lat}, {location.coordinates.lng}
//                   </p>
//                 </div>
//               </div>

//               <div className={styles.detailItem}>
//                 <div className={styles.detailIcon}>🌍</div>
//                 <div className={styles.detailContent}>
//                   <div className={styles.detailLabel}>Time Zone</div>
//                   <p className={styles.detailValue}>IST (UTC+5:30)</p>
//                 </div>
//               </div>
//             </div>

//             <motion.a
//               href={location.mapUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-primary"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View on Google Maps
//             </motion.a>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//             transition={{ duration: 0.6 }}
//             className={styles.map}
//           >
//             <iframe
//               src={embedUrl}
//               width="100%"
//               height="100%"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="MFK Exports Location - Angamaly, Kerala"
//             />
//           </motion.div>
//         </div>
//       </Container>
//     </Section>
//   )
// }
// components/Location.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import Container from "./ui/Container";
import Section from "./ui/Section";
import styles from "./Location.module.css";

/** Location data (pure JSON-like) */
const LOCATION = {
  name: "Chirayil Chungam, Kondotty",
  address: "Chirayil, Kondotty, Malappuram, Kerala, India",
  mapUrl:
    "https://www.google.com/maps/place/@11.1294495,75.9727543,19.3z/data=!4m6!1m5!3m4!2zMTHCsDA3JzQ1LjkiTiA3NcKwNTgnMjIuOSJF!8m2!3d11.1294071!4d75.9730379?entry=ttu",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.808812049287!2d75.9704626760117!3d11.129407088405757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e3aee76aa3%3A0xdbfacea5b28bf3!2s11%C2%B007'45.9%22N%2075%C2%B058'22.9%22E!5e0!3m2!1sen!2sin!4v1731933392001!5m2!1sen!2sin",
};

export default function Location(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // framer controls + in-view
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  useEffect(() => {
    if (inView) {
      // animate using transform only to prevent opacity blending artifacts
      controls.start({ y: 0, scale: 1, transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] } });
      // start observing iframe loading only after section is visible
      lazyLoadIframe();
    }
  }, [inView, controls]);

  // load iframe only when section visible (no layout shift), then fade it in only after onload
  const lazyLoadIframe = () => {
    if (!iframeRef.current || iframeRef.current.src) return;
    const frame = iframeRef.current;

    // put a tiny delay to allow card transform animation to start (prevents simultaneous heavy raster)
    requestAnimationFrame(() => {
      frame.src = LOCATION.embedUrl;
      const onLoad = () => {
        // add loaded class to parent wrapper (CSS handles opacity transition)
        frame.parentElement?.classList.add(styles["map-loaded"]);
        frame.removeEventListener("load", onLoad);
      };
      frame.addEventListener("load", onLoad);
    });
  };

  return (
    <Section id="location" ref={sectionRef as any} background="secondary" className={styles.section}>
      <Container>
        <div className={styles.headerWrap}>
          <motion.h2
            className={styles.title}
            initial={{ y: 18, scale: 0.996 }}
            animate={inView ? { y: 0, scale: 1 } : {}}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Location
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ y: 18, scale: 0.996 }}
            animate={inView ? { y: 0, scale: 1 } : {}}
            transition={{ duration: 0.62, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            Visit us at our Kerala base — proudly serving global exporters.
          </motion.p>
        </div>

        <motion.div
          ref={cardRef as any}
          className={styles.card}
          initial={{ y: 40, scale: 0.998 }}
          animate={controls}
          // IMPORTANT: animate transform only (no opacity)
          style={{ willChange: "transform", isolation: "isolate" } as React.CSSProperties}
        >
          {/* left column */}
          <div className={styles.info}>
            <h3 className={styles.locationName}>{LOCATION.name}</h3>
            <p className={styles.locationAddress}>{LOCATION.address}</p>

            <a
              className={styles.mapButton} 
             {/* className="btn btn-primary" */}
              href={LOCATION.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
            >
              View on Google Maps
            </a>

            
          </div>

          {/* thin hairline divider */}
          <div className={styles.divider} aria-hidden />

          {/* map column: iframe is lazy-loaded and will fade-in via .map-loaded */}
          <div className={styles.mapWrap}>
            {/* initial src intentionally empty — loaded when in view */}
            <iframe
              ref={iframeRef}
              src=""
              title="MFK Exports — Kerala Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* accessible fallback link shown if iframe fails or disabled */}
            <noscript className={styles.noScriptFallback}>
              <a href={LOCATION.mapUrl} target="_blank" rel="noopener noreferrer">
                View map (JS disabled)
              </a>
            </noscript>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}


