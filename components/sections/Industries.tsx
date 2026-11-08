import type React from "react";

/* phones get their own compact 2-column grid (the desktop deck is hidden ≤900px) */
/* same photos as the desktop deck, sized for the small mobile cards */
const MOBILE_IMG = [
  "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=600&h=700&q=70",
  "https://images.unsplash.com/photo-1753161617988-c5f43e441621?auto=format&fit=crop&w=600&h=700&q=70",
  "https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?auto=format&fit=crop&w=600&h=700&q=70",
  "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?auto=format&fit=crop&w=600&h=700&q=70",
  "https://images.unsplash.com/photo-1724230758718-406bab979e67?auto=format&fit=crop&w=600&h=700&q=70",
  "https://images.unsplash.com/photo-1787647559180-a26acde70c2e?auto=format&fit=crop&w=600&h=700&q=70",
  "https://images.unsplash.com/photo-1758270703928-6a8597669abc?auto=format&fit=crop&w=600&h=700&q=70",
  "https://images.unsplash.com/photo-1651467606797-e1c660cf3fda?auto=format&fit=crop&w=600&h=700&q=70",
];

const MOBILE: { t: string; ic: React.ReactNode }[] = [
  { t: "IT & Technology", ic: <><path d="M10 12L24 24L38 10M24 24L16 38M24 24L36 34" /><circle cx="10" cy="12" r="3" /><circle cx="38" cy="10" r="3" /><circle cx="24" cy="24" r="4" /><circle cx="16" cy="38" r="3" /><circle cx="36" cy="34" r="3" /></> },
  { t: "Retail & FMCG", ic: <><path d="M11 17h26l-2.5 23h-21z" /><path d="M18 17v-3a6 6 0 0 1 12 0v3" /></> },
  { t: "Healthcare", ic: <><circle cx="24" cy="24" r="17" /><path d="M24 15v18M15 24h18" /></> },
  { t: "Manufacturing", ic: <><circle cx="24" cy="24" r="7" /><circle cx="24" cy="24" r="14" /><path d="M24 4v6M24 38v6M4 24h6M38 24h6" /></> },
  { t: "Hospitality", ic: <path d="M7 35h34M11 35a13 13 0 0 1 26 0M24 22v-4M21 18h6" /> },
  { t: "Startups & SMEs", ic: <path d="M7 40h34M11 40v-9h6v9M21 40V23h6v17M31 40V13h6v27" /> },
  { t: "Education", ic: <><path d="M24 14c-5-3-11-3-16-1v24c5-2 11-2 16 1 5-3 11-3 16-1V13c-5-2-11-2-16 1z" /><path d="M24 14v24" /></> },
  { t: "GCC Companies", ic: <><circle cx="24" cy="18" r="7" /><path d="M5 34c6-5 12-5 19 0s13 5 19 0M5 41c6-4 12-4 19 0s13 4 19 0" /></> },
];

/* Industries — static markup; behaviour is attached by lib/motion.js */
export default function Industries() {
  return (
    <>
      <section className="ind" id="industries">
        <div className="wrap">
          <div className="ind-head">
            <p className="eb">INDUSTRIES WE SERVE</p>
            <h2 className="h-l wr">
              <span className="w" style={{ "--i": "0" } as React.CSSProperties}>
                HR
              </span>{" "}
              <span className="w" style={{ "--i": "1" } as React.CSSProperties}>
                expertise
              </span>{" "}
              <span className="w" style={{ "--i": "2" } as React.CSSProperties}>
                across
              </span>{" "}
              <span className="w" style={{ "--i": "3" } as React.CSSProperties}>
                every
              </span>{" "}
              <span className="w" style={{ "--i": "4" } as React.CSSProperties}>
                sector
              </span>
            </h2>
            <p className="rv">
              Each sector has unique people challenges — we bring the experience
              to solve them with precision.
            </p>
          </div>
          <div className="deck">
            <article className="dkc on" data-ind="0">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1600&q=80"
                alt="Developers working on code in a bright tech office"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                01
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 12L24 24L38 10M24 24L16 38M24 24L36 34" />
                  <circle cx="10" cy="12" r="3" />
                  <circle cx="38" cy="10" r="3" />
                  <circle cx="24" cy="24" r="4" />
                  <circle cx="16" cy="38" r="3" />
                  <circle cx="36" cy="34" r="3" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                IT &amp; Technology
              </span>
              <span className="dk-big" aria-hidden="true">
                01
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10 12L24 24L38 10M24 24L16 38M24 24L36 34" />
                    <circle cx="10" cy="12" r="3" />
                    <circle cx="38" cy="10" r="3" />
                    <circle cx="24" cy="24" r="4" />
                    <circle cx="16" cy="38" r="3" />
                    <circle cx="36" cy="34" r="3" />
                  </svg>
                </span>
                <h3>IT &amp; Technology</h3>
                <p>
                  Scalable HR processes and hiring frameworks for fast-growing
                  tech teams.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="true"
                aria-label={"IT & Technology"}
              />
            </article>
            <article className="dkc" data-ind="1">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1753161617988-c5f43e441621?auto=format&fit=crop&w=1600&q=80"
                alt="Retail associate helping a customer choose clothes"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                02
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 17h26l-2.5 23h-21z" />
                  <path d="M18 17v-3a6 6 0 0 1 12 0v3" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                Retail &amp; FMCG
              </span>
              <span className="dk-big" aria-hidden="true">
                02
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M11 17h26l-2.5 23h-21z" />
                    <path d="M18 17v-3a6 6 0 0 1 12 0v3" />
                  </svg>
                </span>
                <h3>Retail &amp; FMCG</h3>
                <p>
                  High-volume hiring, onboarding and HR systems for
                  multi-location operations.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="false"
                aria-label={"Retail & FMCG"}
              />
            </article>
            <article className="dkc" data-ind="2">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?auto=format&fit=crop&w=1600&q=80"
                alt="Doctor consulting a patient in a clinic"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                03
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="24" r="17" />
                  <path d="M24 15v18M15 24h18" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                Healthcare &amp; Clinics
              </span>
              <span className="dk-big" aria-hidden="true">
                03
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="24" r="17" />
                    <path d="M24 15v18M15 24h18" />
                  </svg>
                </span>
                <h3>Healthcare &amp; Clinics</h3>
                <p>
                  Compliance-first HR support, role structuring and specialised
                  recruitment.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="false"
                aria-label={"Healthcare & Clinics"}
              />
            </article>
            <article className="dkc" data-ind="3">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?auto=format&fit=crop&w=1400&q=60"
                alt="Factory team inspecting an automated production line"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                04
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="24" r="7" />
                  <circle cx="24" cy="24" r="14" />
                  <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                Manufacturing &amp; Industrial
              </span>
              <span className="dk-big" aria-hidden="true">
                04
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="24" r="7" />
                    <circle cx="24" cy="24" r="14" />
                    <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
                  </svg>
                </span>
                <h3>Manufacturing &amp; Industrial</h3>
                <p>
                  Workforce planning, documentation and grievance handling for
                  large teams.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="false"
                aria-label={"Manufacturing & Industrial"}
              />
            </article>
            <article className="dkc" data-ind="4">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1724230758718-406bab979e67?auto=format&fit=crop&w=1600&q=80"
                alt="Hospitality host at a restaurant front desk"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                05
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 35h34M11 35a13 13 0 0 1 26 0M24 22v-4M21 18h6" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                Hospitality &amp; Service
              </span>
              <span className="dk-big" aria-hidden="true">
                05
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 35h34M11 35a13 13 0 0 1 26 0M24 22v-4M21 18h6" />
                  </svg>
                </span>
                <h3>Hospitality &amp; Service</h3>
                <p>
                  End-to-end HR support for roles demanding consistent service
                  and high compliance.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="false"
                aria-label={"Hospitality & Service"}
              />
            </article>
            <article className="dkc" data-ind="5">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1787647559180-a26acde70c2e?auto=format&fit=crop&w=1600&q=80"
                alt="Startup team collaborating in a colourful modern office"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                06
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 40h34M11 40v-9h6v9M21 40V23h6v17M31 40V13h6v27" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                Startups &amp; SMEs
              </span>
              <span className="dk-big" aria-hidden="true">
                06
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 40h34M11 40v-9h6v9M21 40V23h6v17M31 40V13h6v27" />
                  </svg>
                </span>
                <h3>Startups &amp; SMEs</h3>
                <p>
                  Zero-to-one HR setup — policies, hiring, onboarding and
                  organisation design.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="false"
                aria-label={"Startups & SMEs"}
              />
            </article>
            <article className="dkc" data-ind="6">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1758270703928-6a8597669abc?auto=format&fit=crop&w=1600&q=80"
                alt="Teacher instructing students in a classroom"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                07
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M24 14c-5-3-11-3-16-1v24c5-2 11-2 16 1 5-3 11-3 16-1V13c-5-2-11-2-16 1z" />
                  <path d="M24 14v24" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                Education &amp; Training
              </span>
              <span className="dk-big" aria-hidden="true">
                07
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M24 14c-5-3-11-3-16-1v24c5-2 11-2 16 1 5-3 11-3 16-1V13c-5-2-11-2-16 1z" />
                    <path d="M24 14v24" />
                  </svg>
                </span>
                <h3>Education &amp; Training</h3>
                <p>
                  HR support for schools, academies and learning institutions.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="false"
                aria-label={"Education & Training"}
              />
            </article>
            <article className="dkc" data-ind="7">
              <img
                decoding="async"
                src="https://images.unsplash.com/photo-1651467606797-e1c660cf3fda?auto=format&fit=crop&w=1600&q=80"
                alt="Downtown Dubai skyline with the Burj Khalifa"
              />
              <span className="dk-bar" aria-hidden="true">
                <i />
              </span>
              <span className="dk-n" aria-hidden="true">
                08
              </span>
              <span className="dk-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="18" r="7" />
                  <path d="M5 34c6-5 12-5 19 0s13 5 19 0M5 41c6-4 12-4 19 0s13 4 19 0" />
                </svg>
              </span>
              <span className="dk-v" aria-hidden="true">
                GCC-Based Companies
              </span>
              <span className="dk-big" aria-hidden="true">
                08
              </span>
              <div className="dk-card">
                <span className="dk-i">
                  <svg
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="18" r="7" />
                    <path d="M5 34c6-5 12-5 19 0s13 5 19 0M5 41c6-4 12-4 19 0s13 4 19 0" />
                  </svg>
                </span>
                <h3>GCC-Based Companies</h3>
                <p>
                  Remote HR services, onboarding and compliance support for Gulf
                  operations.
                </p>
              </div>
              <button
                className="dk-hit"
                type="button"
                aria-pressed="false"
                aria-label="GCC-Based Companies"
              />
            </article>
          </div>
          <ul className="ind-m">
            {MOBILE.map(({ t, ic }, i) => (
              <li className="im-card" key={t}>
                <img className="im-img" src={MOBILE_IMG[i]} alt="" loading="lazy" decoding="async" />
                <span className="im-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="im-ic" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    {ic}
                  </svg>
                </span>
                <svg className="im-art" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ic}
                </svg>
                <h3 className="im-t">{t}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
