import type React from "react";

/* Insights — static markup; behaviour is attached by lib/motion.js */
export default function Insights() {
  return (
    <>
      <section className="ins" id="insights">
        <div className="wrap">
          <div className="ins-head">
            <div>
              <p className="eb">OUR INSIGHTS</p>
              <h2 className="h-l wr">
                <span
                  className="w"
                  style={{ "--i": "0" } as React.CSSProperties}
                >
                  Stay
                </span>{" "}
                <span
                  className="w"
                  style={{ "--i": "1" } as React.CSSProperties}
                >
                  informed.
                </span>{" "}
                <span
                  className="w"
                  style={{ "--i": "2" } as React.CSSProperties}
                >
                  Stay
                </span>{" "}
                <span
                  className="w"
                  style={{ "--i": "3" } as React.CSSProperties}
                >
                  inspired.
                </span>
              </h2>
            </div>
            <a className="gb" href="#insights" data-magnetic="">
              <span>All insights</span>
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
          <div className="ins-grid">
            <article className="art art-lead">
              <a
                className="pimg rvc"
                href="#insights"
                aria-label="How to Reduce Recruitment Costs Without Compromising Hiring Quality"
              >
                <img
                  decoding="async"
                  src="https://images.unsplash.com/photo-1758518730264-9235a1e5416b?auto=format&fit=crop&w=1800&q=80"
                  alt="Recruiter reviewing a resume with a candidate"
                />
              </a>
              <p className="meta">
                <span>28 OCT 2026</span>
                <i />
                <span>7 MIN READ</span>
              </p>
              <h3>
                How to Reduce Recruitment Costs Without Compromising Hiring
                Quality
              </h3>
              <p>
                Recruitment is an important investment for every business.
                Finding the right employees helps organisations improve
                productivity, achieve...
              </p>
              <a className="tl" href="#insights">
                READ ARTICLE{" "}
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
            </article>
            <article className="art art-s1 rv">
              <a
                className="pimg"
                href="#insights"
                aria-label="HR Management for GCC Companies: How to Manage Employees in India and the Gulf"
              >
                <img
                  decoding="async"
                  src="/images/photos/remote-call.jpg"
                  alt="Professional smiling during a remote video call"
                />
              </a>
              <p className="meta">
                <span>20 OCT 2026</span>
                <i />
                <span>4 MIN READ</span>
              </p>
              <h3>
                HR Management for GCC Companies: How to Manage Employees in
                India and the Gulf
              </h3>
              <p>
                A practical overview of managing teams across India and GCC
                markets, with guidance on recruitment, onboarding, payroll
                coordination,...
              </p>
              <a className="tl" href="#insights">
                READ ARTICLE{" "}
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
            </article>
            <article className="art art-s2 rv">
              <a
                className="pimg"
                href="#insights"
                aria-label="Essential HR Policies Every Startup and Small Business in India Should Have"
              >
                <img
                  decoding="async"
                  src="https://images.unsplash.com/photo-1773332598413-a6d5279d1ae8?auto=format&fit=crop&w=1000&q=80"
                  alt="Laptop and policy documents on a wooden desk"
                />
              </a>
              <p className="meta">
                <span>15 OCT 2026</span>
                <i />
                <span>5 MIN READ</span>
              </p>
              <h3>
                Essential HR Policies Every Startup and Small Business in India
                Should Have
              </h3>
              <p>
                A practical overview of HR policies that help startups and small
                businesses set clear workplace expectations, support employees
                and organise H...
              </p>
              <a className="tl" href="#insights">
                READ ARTICLE{" "}
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
            </article>
          </div>
          <div className="ins-dots cpg" aria-hidden="true">
            <span className="cpg-n">
              <span className="cpg-roll">
                <b>01</b>
              </span>
              <span className="cpg-t">/03</span>
            </span>
            <span className="cpg-r">
              <span className="cpg-lbl">How to Reduce Recruitment Costs Without Compromising Hiring Quality</span>
              <span className="cpg-segs">
                {Array.from({ length: 3 }, (_, i) => (
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
