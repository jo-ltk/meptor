"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["#home", "Home"],
  ["#about", "About"],
  ["#services", "Services"],
  ["#locations", "Locations"],
  ["#insights", "Insights"],
  ["#faqs", "FAQs"],
  ["#contact", "Contact"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-bg" aria-hidden="true" />
      <div className="nav-prog" aria-hidden="true" />
      <a className="logo" href="#home" aria-label="Meptor — home">
        <img className="logo-mark" src="/images/meptor-mark.png" alt="" />
        MEPTOR
      </a>
      <nav className="links" aria-label="Primary">
        {LINKS.map(([href, label], i) => (
          <a key={href} className={i === 0 ? "on" : undefined} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="gb pr nv" href="#contact" data-magnetic="">
        <span>Get a consultation</span>
      </a>
      <button
        className="menu gb"
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Menu"
      >
        <span className="mb" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      {open && (
        <div className="sheet" id="mobile-menu">
          {LINKS.map(([href, label]) => (
            <a key={href} className="s" href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="gb pr" href="#contact" onClick={close}>
            <span>Get a consultation</span>
          </a>
        </div>
      )}
    </header>
  );
}
