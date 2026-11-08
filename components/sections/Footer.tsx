import type React from "react";

/* Footer — static markup; behaviour is attached by lib/motion.js */
export default function Footer() {
  return (
    <>
      <footer className="ft">
        <div className="wrap">
          <div className="ft-grid">
            <div className="ft-c">
              <a className="logo" href="#home">
                <img
                  className="logo-mark"
                  src="/images/meptor-mark.png"
                  alt=""
                />
                MEPTOR
              </a>
              <p className="ft-tag">HR SOLUTIONS THAT CARE</p>
              <p className="ft-desc">
                Trusted HR consulting, recruitment, compliance and people-system
                services for organisations in India and the GCC.
              </p>
            </div>
            <nav className="ft-c" aria-label="Quick links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#locations">Locations</a>
                </li>
                <li>
                  <a href="#insights">Insights</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <nav className="ft-c" aria-label="Services">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#services">Compliance &amp; Legal Services</a>
                </li>
                <li>
                  <a href="#services">Training &amp; Development</a>
                </li>
                <li>
                  <a href="#services">Strategic Management</a>
                </li>
                <li>
                  <a href="#services">Payroll Management</a>
                </li>
                <li>
                  <a href="#services">Talent Acquisition</a>
                </li>
                <li>
                  <a href="#services">Employee Onboarding</a>
                </li>
              </ul>
            </nav>
            <div className="ft-c">
              <h3>Get in Touch</h3>
              <p className="ft-co">Meptor Consultancy Pvt Ltd</p>
              <address>
                GK Tower Junction,
                <br />
                Chakkaraparambu
                <br />
                Thammanam, Kochi, Kerala 682032
              </address>
              <p className="ft-kv">
                <span>
                  Phone: <a href="tel:+917356025576">+91 73560 25576</a>
                </span>
                <span>
                  Email: <a href="mailto:info@meptor.com">info@meptor.com</a>
                </span>
              </p>
              <a className="tl" href="#contact">
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="ft-word" aria-hidden="true">
            <span style={{ "--i": "0" } as React.CSSProperties}>M</span>
            <span style={{ "--i": "1" } as React.CSSProperties}>E</span>
            <span style={{ "--i": "2" } as React.CSSProperties}>P</span>
            <span style={{ "--i": "3" } as React.CSSProperties}>T</span>
            <span style={{ "--i": "4" } as React.CSSProperties}>O</span>
            <span style={{ "--i": "5" } as React.CSSProperties}>R</span>
          </div>
        </div>
      </footer>
    </>
  );
}
