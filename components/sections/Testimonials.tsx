import type React from "react";

/* Testimonials — static markup; behaviour is attached by lib/motion.js */
export default function Testimonials() {
  return (
    <>
      <section className="tm" id="feedback">
        <div className="wrap">
          <figure className="pimg tm-img rvc">
            <img
              decoding="async"
              src="/images/photos/testimonial-portrait.jpg"
              alt="Portrait of a confident smiling client"
            />
            <figcaption className="tm-chip">CLIENT FEEDBACK</figcaption>
          </figure>
          <div className="tm-c">
            <p className="eb">CLIENT FEEDBACK</p>
            <h2 className="h-l wr">
              <span className="w" style={{ "--i": "0" } as React.CSSProperties}>
                Why
              </span>
              <br />
              <span className="w" style={{ "--i": "1" } as React.CSSProperties}>
                organisations
              </span>
              <br />
              <span className="w" style={{ "--i": "2" } as React.CSSProperties}>
                trust
              </span>{" "}
              <span className="w" style={{ "--i": "3" } as React.CSSProperties}>
                Meptor
              </span>
            </h2>
            <p className="tm-d rv">
              Faster hiring, stronger people systems and confidential handling
              of sensitive matters — in our clients' own words.
            </p>
            <div
              className="tm-q rv"
              aria-roledescription="carousel"
              aria-label="Client feedback"
            >
              <svg
                viewBox="0 0 40 30"
                width="40"
                height="30"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 30V17C0 7 5 1 15 0v6c-5 1-8 5-8 10h8v14zm22 0V17c0-10 5-16 15-17v6c-5 1-8 5-8 10h8v14z" />
              </svg>
              <div className="tm-slides" aria-live="polite">
                <figure className="tm-s on">
                  <blockquote>
                    … exceeded our expectations. Their team's passion for
                    learning and development is evident in their engaging and
                    effective programs. We highly recommend their services!
                  </blockquote>
                  <figcaption>Krishnakumar</figcaption>
                </figure>
                <figure className="tm-s tm-ph">
                  <blockquote>
                    Meptor rebuilt our HR policies from scratch and got us
                    audit-ready in weeks. Their team was calm, clear and always
                    one step ahead.
                  </blockquote>
                  <figcaption>
                    HR Director · Manufacturing client
                    <span className="tm-sample">Sample</span>
                  </figcaption>
                </figure>
                <figure className="tm-s tm-ph">
                  <blockquote>
                    We filled critical roles across Kochi and Dubai far faster
                    than before. The screening was sharp, and every shortlist
                    felt hand-picked.
                  </blockquote>
                  <figcaption>
                    Founder · Technology startup
                    <span className="tm-sample">Sample</span>
                  </figcaption>
                </figure>
                <figure className="tm-s tm-ph">
                  <blockquote>
                    Payroll used to be our biggest headache. Since Meptor took
                    over, it simply runs — accurate, compliant and on time,
                    every month.
                  </blockquote>
                  <figcaption>
                    Operations Head · Healthcare group
                    <span className="tm-sample">Sample</span>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-nav">
                <button
                  className="tm-btn"
                  type="button"
                  data-dir="-1"
                  aria-label="Previous testimonial"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M13 8H3M7 4L3 8l4 4" />
                  </svg>
                </button>
                <button
                  className="tm-btn"
                  type="button"
                  data-dir="1"
                  aria-label="Next testimonial"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>
                <span className="tm-cnt" aria-hidden="true">
                  <b className="tm-cur">01</b> / 04
                </span>
                <span className="tm-prog" aria-hidden="true">
                  <i />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
