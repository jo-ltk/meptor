import type React from "react";

/* Cta — static markup; behaviour is attached by lib/motion.js */
export default function Cta() {
  return (
    <>
      <section className="cta" id="contact">
        <div className="cta-f">
          <img
            decoding="async"
            src="https://images.unsplash.com/photo-1774953037913-af0cf688491a?auto=format&fit=crop&w=2400&q=80"
            alt=""
            className="parf"
          />
          <div className="cta-in">
            <p className="eb">READY WHEN YOU ARE</p>
            <h2 className="wr">
              <span className="w" style={{ "--i": "0" } as React.CSSProperties}>
                Let's
              </span>{" "}
              <span className="w" style={{ "--i": "1" } as React.CSSProperties}>
                build
              </span>{" "}
              <span className="w" style={{ "--i": "2" } as React.CSSProperties}>
                your
              </span>
              <br />
              <span className="w" style={{ "--i": "3" } as React.CSSProperties}>
                people
              </span>{" "}
              <span className="w" style={{ "--i": "4" } as React.CSSProperties}>
                advantage
              </span>
            </h2>
            <p className="cta-d rv">
              Tell us where your HR hurts — hiring, compliance, payroll or
              culture — and we'll map the fastest route to fix it.
            </p>
            <div className="btns">
              <a className="gb pr" href="#contact" data-magnetic="">
                <span>Get a consultation</span>
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
              <a className="gb" href="#contact" data-magnetic="">
                <svg
                  viewBox="0 0 20 20"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 17l1.2-3.6A7 7 0 1 1 7 16z" />
                </svg>
                <span>WhatsApp us now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
