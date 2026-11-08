import type React from "react";

/* Hero — static markup; behaviour is attached by lib/motion.js */
export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-f">
          <div
            className="hero-m"
            aria-roledescription="carousel"
            aria-label="Hero images"
          >
            <div className="hs-slide on">
              <img
                decoding="async"
                src="/images/placeholders/hero-1.svg"
                alt="Hero slide 1 — portrait of a woman HR professional in a bright modern office"
              />
            </div>
            <div className="hs-slide">
              <img
                decoding="async"
                src="/images/placeholders/hero-2.svg"
                alt="Hero slide 2 — small diverse team meeting in a glass office"
              />
            </div>
            <div className="hs-slide">
              <img
                decoding="async"
                src="/images/placeholders/hero-3.svg"
                alt="Hero slide 3 — handshake or interview moment between two professionals"
              />
            </div>
          </div>
          <div className="hero-sh" aria-hidden="true" />
          <div className="hero-txt">
            <div className="hero-card">
              <p className="hc-eb">HR CONSULTING · KERALA &amp; THE GCC</p>
              <p className="hc-d">
                Build stronger teams, reduce hiring time and run compliant,
                scalable HR systems.
              </p>
              <div className="hc-b">
                <a className="gb dk" href="#services" data-magnetic="">
                  <span>Explore our services</span>
                  <span className="ar">
                    <svg
                      viewBox="0 0 16 16"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </a>
                <a className="tl" href="#contact">
                  Talk to us
                </a>
              </div>
            </div>
            <ul className="hero-stats">
              <li>
                <span className="hs-n">280+</span>
                <span className="hs-l">HAPPY CLIENTS</span>
              </li>
              <li>
                <span className="hs-n">10+</span>
                <span className="hs-l">YEARS OF EXPERIENCE</span>
              </li>
              <li>
                <span className="hs-n">1,000+</span>
                <span className="hs-l">JOB OPENINGS</span>
              </li>
            </ul>
            <h1 className="hero-h">
              <span className="ln">
                <span>HR that cares.</span>
              </span>
              <span className="ln">
                <span>Systems that scale.</span>
              </span>
            </h1>
          </div>
          <div className="hero-bar">
            <span>HR SOLUTIONS THAT CARE</span>
            <div
              className="hs-dots"
              role="group"
              aria-label="Choose hero slide"
            >
              <button
                className="hs-dot on"
                type="button"
                data-hs="0"
                aria-label="Slide 1"
              >
                <b>01</b>
                <i />
              </button>
              <button
                className="hs-dot"
                type="button"
                data-hs="1"
                aria-label="Slide 2"
              >
                <b>02</b>
                <i />
              </button>
              <button
                className="hs-dot"
                type="button"
                data-hs="2"
                aria-label="Slide 3"
              >
                <b>03</b>
                <i />
              </button>
            </div>
            <span className="sp" />
            <span className="hide">280+ clients across India &amp; GCC</span>
            <span className="hide">Compliant &amp; audit-ready</span>
            <a href="#about" aria-label="Scroll to About">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 3v10M4 9l4 4 4-4" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
