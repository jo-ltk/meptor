import type React from "react";

/* WhyChooseUs — static markup; behaviour is attached by lib/motion.js */
export default function WhyChooseUs() {
  return (
    <>
      <section className="why" id="why">
        <div className="why-base" aria-hidden="true" />
        <div className="why-hid" aria-hidden="true">
          <div className="why-hid-in">
            <div className="wh-grid" />
            <div className="wh-rings" />
            <div className="wh-word">MEPTOR</div>
          </div>
        </div>
        <div className="wrap why-in">
          <div className="why-head">
            <p className="eb">WHY CHOOSE US</p>
            <h2 className="h-xl wr">
              <span className="w" style={{ "--i": "0" } as React.CSSProperties}>
                Partnering
              </span>{" "}
              <span className="w" style={{ "--i": "1" } as React.CSSProperties}>
                with
              </span>{" "}
              <span className="w" style={{ "--i": "2" } as React.CSSProperties}>
                organisations
              </span>
              <span className="d">
                <span
                  className="w"
                  style={{ "--i": "3" } as React.CSSProperties}
                >
                  for
                </span>{" "}
                <span
                  className="w"
                  style={{ "--i": "4" } as React.CSSProperties}
                >
                  people-driven
                </span>{" "}
                <span
                  className="w"
                  style={{ "--i": "5" } as React.CSSProperties}
                >
                  success
                </span>
              </span>
            </h2>
            <p className="rv">
              At Meptor, we combine strategic HR expertise with practical
              implementation to help organisations build stronger teams, reduce
              operational risks and improve overall workforce performance. Our
              approach is structured, data-backed and tailored to your unique
              business needs.
            </p>
          </div>
          <div className="why-pil">
            <article className="pil">
              <svg
                viewBox="0 0 40 40"
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="20" cy="13" r="6" />
                <path d="M8 34c2-7 7-11 12-11s10 4 12 11" />
              </svg>
              <span className="pi">01</span>
              <h3>Personalised HR</h3>
              <p>
                Custom-built HR policies, SOPs and workflows designed to fit
                your organisation's structure and goals.
              </p>
            </article>
            <article className="pil">
              <svg
                viewBox="0 0 40 40"
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="17" cy="17" r="10" />
                <path d="M24.5 24.5L34 34M13 17h8M17 13v8" />
              </svg>
              <span className="pi">02</span>
              <h3>Talent &amp; Recruitment</h3>
              <p>
                Targeted sourcing, structured screening and guided onboarding to
                help you hire the right talent faster.
              </p>
            </article>
            <article className="pil">
              <svg
                viewBox="0 0 40 40"
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 4l13 5v10c0 8-5.5 13.5-13 17-7.5-3.5-13-9-13-17V9z" />
                <path d="M14 20l4 4 8-9" />
              </svg>
              <span className="pi">03</span>
              <h3>Compliance &amp; Investigations</h3>
              <p>
                Clear documentation, audits and confidential workplace
                investigations that reduce organisational risk.
              </p>
            </article>
            <article className="pil">
              <svg
                viewBox="0 0 40 40"
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 16l16-8 16 8-16 8z" />
                <path d="M11 20v8c5 4.5 13 4.5 18 0v-8M36 16v9" />
              </svg>
              <span className="pi">04</span>
              <h3>Training &amp; Development</h3>
              <p>
                Skill-building and leadership training programs that strengthen
                capability and improve team performance.
              </p>
            </article>
          </div>
          <div className="why-dots" aria-hidden="true">
            <i />
          </div>
          <div className="why-st">
            <div className="ws">
              <span className="ws-n">280+</span>
              <span className="ws-l">HAPPY CLIENTS</span>
            </div>
            <div className="ws">
              <span className="ws-n">10+</span>
              <span className="ws-l">YEARS OF EXPERIENCE</span>
            </div>
            <div className="ws">
              <span className="ws-n">1,000+</span>
              <span className="ws-l">JOB OPENINGS</span>
            </div>
          </div>
        </div>
        <div className="why-torch" aria-hidden="true" />
      </section>
    </>
  );
}
