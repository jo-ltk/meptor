import type React from "react";

/* About — static markup; behaviour is attached by lib/motion.js */
export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="wrap">
          <div className="ab-top">
            <p className="eb">WE ARE MEPTOR</p>
            <h2 className="h-xl wr">
              <span className="w" style={{ "--i": "0" } as React.CSSProperties}>
                Trusted
              </span>{" "}
              <span className="w" style={{ "--i": "1" } as React.CSSProperties}>
                HR
              </span>{" "}
              <span className="w" style={{ "--i": "2" } as React.CSSProperties}>
                expertise
              </span>
              <br />
              <span className="w" style={{ "--i": "3" } as React.CSSProperties}>
                that
              </span>{" "}
              <span className="w" style={{ "--i": "4" } as React.CSSProperties}>
                delivers
              </span>{" "}
              <span className="w" style={{ "--i": "5" } as React.CSSProperties}>
                value
              </span>
            </h2>
          </div>
          <div className="ab-row">
            <div className="ab-stat rv">
              <span className="num">10+</span>
              <span className="lbl">YEARS OF COMBINED HR EXPERIENCE</span>
            </div>
            <div className="ab-text">
              <p className="lead rv">
                Meptor partners with organisations to design practical HR
                systems, deliver reliable recruitment outcomes and ensure
                regulatory compliance. We blend advisory expertise with hands-on
                implementation to create measurable improvements in people
                performance.
              </p>
              <div className="vm rv">
                <div>
                  <h3>Our Vision</h3>
                  <p>
                    To be the trusted HR partner for growing organisations
                    across Kerala and the GCC — enabling sustainable growth
                    through better people systems and data-led decisions.
                  </p>
                </div>
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    To deliver practical, scalable HR solutions — from policies
                    and workforce planning to training and investigations — that
                    reduce risk, speed hiring and improve employee experience.
                  </p>
                </div>
              </div>
              <a className="gb" href="#about" data-magnetic="">
                <span>More about us</span>
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
            </div>
          </div>
          <div className="ab-media">
            <figure className="pimg ab-m1 rvc">
              <img
                decoding="async"
                src="/images/placeholders/about-1.svg"
                alt="Modern office interior with glass, light and plants"
              />
            </figure>
            <figure className="pimg ab-m2 rvc">
              <img
                decoding="async"
                src="/images/placeholders/about-2.svg"
                alt="Team collaborating at a desk or whiteboard"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
