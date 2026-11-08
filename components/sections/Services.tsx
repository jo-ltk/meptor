import type React from "react";

/* Services — static markup; behaviour is attached by lib/motion.js */
export default function Services() {
  return (
    <>
      <section className="svc" id="services">
        <div className="wrap svc-head">
          <div>
            <p className="eb">OUR SERVICES</p>
            <h2 className="h-l wr">
              <span className="w" style={{ "--i": "0" } as React.CSSProperties}>
                Your
              </span>{" "}
              <span className="w" style={{ "--i": "1" } as React.CSSProperties}>
                trusted
              </span>{" "}
              <span className="w" style={{ "--i": "2" } as React.CSSProperties}>
                partner
              </span>
              <br />
              <span className="w" style={{ "--i": "3" } as React.CSSProperties}>
                for
              </span>{" "}
              <span className="w" style={{ "--i": "4" } as React.CSSProperties}>
                end-to-end
              </span>{" "}
              <span className="w" style={{ "--i": "5" } as React.CSSProperties}>
                HR
              </span>
            </h2>
          </div>
          <p className="rv">
            Six tightly-run practices covering the full employee lifecycle —
            from the first job description to audit-ready payroll.
          </p>
        </div>
        <div className="svc-pw">
          <div className="svc-vp">
            <div className="svc-track">
              <article className="card">
                <img
                  decoding="async"
                  src="https://images.unsplash.com/photo-1792488954259-3f886ed03cab?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional signing a contract at a glass desk"
                />
                <div className="c-top">
                  <span className="c-n">01</span>
                  <h3 className="c-t">Compliance &amp; Legal Services</h3>
                  <span className="c-sig" aria-hidden="true">
                    <i />
                    <i className="off" />
                    <i className="off" />
                    <i className="off" />
                    <i className="off" />
                    <i className="off" />
                  </span>
                </div>
                <p className="c-d">
                  Stay compliant with MEPTOR's HR compliance and legal services.
                  Get expert support for labor laws, HR regulations,
                  documentation and workplace compliance.
                </p>
                <div className="c-more">
                  <ul>
                    <li>Automated policy acknowledgements</li>
                    <li>Real-time compliance tracking</li>
                    <li>Audit-ready documentation</li>
                  </ul>
                  <a className="tl" href="#services">
                    EXPLORE SERVICE{" "}
                    <svg
                      viewBox="0 0 16 16"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="card">
                <img
                  decoding="async"
                  src="https://images.unsplash.com/photo-1776039230119-6e69e241512d?auto=format&fit=crop&w=1000&q=80"
                  alt="Trainer presenting a workshop to an audience"
                />
                <div className="c-top">
                  <span className="c-n">02</span>
                  <h3 className="c-t">Training &amp; Development</h3>
                  <span className="c-sig" aria-hidden="true">
                    <i />
                    <i />
                    <i className="off" />
                    <i className="off" />
                    <i className="off" />
                    <i className="off" />
                  </span>
                </div>
                <p className="c-d">
                  Build skills faster with structured, role-based learning
                  programs.
                </p>
                <div className="c-more">
                  <ul>
                    <li>Role-specific training paths</li>
                    <li>Progress and skill tracking</li>
                    <li>Certifications and assessments</li>
                  </ul>
                  <a className="tl" href="#services">
                    EXPLORE SERVICE{" "}
                    <svg
                      viewBox="0 0 16 16"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="card">
                <img
                  decoding="async"
                  src="https://images.unsplash.com/photo-1758518730162-09a142505bfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Manager holding a one-on-one review with an employee"
                />
                <div className="c-top">
                  <span className="c-n">03</span>
                  <h3 className="c-t">Strategic Management</h3>
                  <span className="c-sig" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i className="off" />
                    <i className="off" />
                    <i className="off" />
                  </span>
                </div>
                <p className="c-d">
                  Empower managers with tools to lead, evaluate and align teams.
                </p>
                <div className="c-more">
                  <ul>
                    <li>Performance reviews and feedback</li>
                    <li>Goal and OKR alignment</li>
                    <li>Actionable people insights</li>
                  </ul>
                  <a className="tl" href="#services">
                    EXPLORE SERVICE{" "}
                    <svg
                      viewBox="0 0 16 16"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="card">
                <img
                  decoding="async"
                  src="https://images.unsplash.com/photo-1772588627354-ca3617853217?auto=format&fit=crop&w=1000&q=80"
                  alt="Payroll forms with a calculator and pen on a desk"
                />
                <div className="c-top">
                  <span className="c-n">04</span>
                  <h3 className="c-t">Payroll Management</h3>
                  <span className="c-sig" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i className="off" />
                    <i className="off" />
                  </span>
                </div>
                <p className="c-d">
                  Run accurate, compliant payroll without manual complexity.
                </p>
                <div className="c-more">
                  <ul>
                    <li>Automated payroll processing</li>
                    <li>Statutory compliance handling</li>
                    <li>Employee self-service access</li>
                  </ul>
                  <a className="tl" href="#services">
                    EXPLORE SERVICE{" "}
                    <svg
                      viewBox="0 0 16 16"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="card">
                <img
                  decoding="async"
                  src="https://images.unsplash.com/photo-1758520144437-f068ecaf0d83?auto=format&fit=crop&w=1000&q=80"
                  alt="Recruiter interviewing a candidate at an office desk"
                />
                <div className="c-top">
                  <span className="c-n">05</span>
                  <h3 className="c-t">Talent Acquisition</h3>
                  <span className="c-sig" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i className="off" />
                  </span>
                </div>
                <p className="c-d">
                  Support faster, smarter hiring with expert-led recruitment
                  solutions.
                </p>
                <div className="c-more">
                  <ul>
                    <li>End-to-end hiring support</li>
                    <li>Candidate screening and shortlisting</li>
                    <li>Employer-focused hiring strategies</li>
                  </ul>
                  <a className="tl" href="#services">
                    EXPLORE SERVICE{" "}
                    <svg
                      viewBox="0 0 16 16"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="card">
                <img
                  decoding="async"
                  src="/images/photos/onboarding-lounge.jpg"
                  alt="New colleagues chatting in a bright modern office lounge"
                />
                <div className="c-top">
                  <span className="c-n">06</span>
                  <h3 className="c-t">Employee Onboarding</h3>
                  <span className="c-sig" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <p className="c-d">
                  Deliver a smooth onboarding experience from day one.
                </p>
                <div className="c-more">
                  <ul>
                    <li>Automated onboarding workflows</li>
                    <li>Task and document checklists</li>
                    <li>Faster employee ramp-up</li>
                  </ul>
                  <a className="tl" href="#services">
                    EXPLORE SERVICE{" "}
                    <svg
                      viewBox="0 0 16 16"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
          <div className="svc-dots cpg" aria-hidden="true">
            <span className="cpg-n">
              <span className="cpg-roll">
                <b>01</b>
              </span>
              <span className="cpg-t">/06</span>
            </span>
            <span className="cpg-r">
              <span className="cpg-lbl">Compliance &amp; Legal Services</span>
              <span className="cpg-segs">
                {Array.from({ length: 6 }, (_, i) => (
                  <i key={i}>
                    <b />
                  </i>
                ))}
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
