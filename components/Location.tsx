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
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Container from "./ui/Container";
import Section from "./ui/Section";
import styles from "./Location.module.css";

const location = {
  name: "Chirayil Chungam, Kondotty",
  address: "Chirayil, Kondotty, Malappuram, Kerala, India",
  mapUrl:
    "https://www.google.com/maps/place/@11.1294495,75.9727543,19.3z/data=!4m6!1m5!3m4!2zMTHCsDA3JzQ1LjkiTiA3NcKwNTgnMjIuOSJF!8m2!3d11.1294071!4d75.9730379?entry=ttu",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.808812049287!2d75.9704626760117!3d11.129407088405757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e3aee76aa3%3A0xdbfacea5b28bf3!2s11%C2%B007'45.9%22N%2075%C2%B058'22.9%22E!5e0!3m2!1sen!2sin!4v1731933392001!5m2!1sen!2sin"
};

export default function Location() {
  const ref = useRef(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  // Fade in iframe when fully loaded
  useEffect(() => {
    if (!iframeRef.current) return;
    const frame = iframeRef.current;

    frame.onload = () => {
      frame.parentElement?.classList.add(styles.loaded);
    };
  }, []);

  return (
    <Section id="location" ref={ref} background="secondary" className={styles.section}>
      <Container>
        {/* SECTION HEADER */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.sectionTitle}>Our Location</h2>
          <p className={styles.sectionSubtitle}>
            Visit us at our Kerala base — proudly serving global exporters.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ADDRESS */}
          <div className={styles.info}>
            <h3 className={styles.locationName}>{location.name}</h3>
            <p className={styles.locationAddress}>{location.address}</p>

            <motion.a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              View on Google Maps
            </motion.a>
          </div>

          {/* DIVIDER */}
          <div className={styles.divider} />

          {/* MAP */}
          <div className={styles.mapWrapper}>
            <iframe
              ref={iframeRef}
              src={location.embedUrl}
              loading="lazy"
              allowFullScreen
              title="Location Map"
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
