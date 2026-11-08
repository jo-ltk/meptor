import type React from "react";

/* Ticker — static markup; behaviour is attached by lib/motion.js */
export default function Ticker() {
  return (
    <>
      <div className="tk">
        <p className="sr">
          People · Process · Performance · Compliance · Culture · Growth
        </p>
        <div className="tk-t" aria-hidden="true">
          <span>People</span>
          <i />
          <span>Process</span>
          <i />
          <span>Performance</span>
          <i />
          <span>Compliance</span>
          <i />
          <span>Culture</span>
          <i />
          <span>Growth</span>
          <i />
          <span>People</span>
          <i />
          <span>Process</span>
          <i />
          <span>Performance</span>
          <i />
          <span>Compliance</span>
          <i />
          <span>Culture</span>
          <i />
          <span>Growth</span>
          <i />
        </div>
      </div>
    </>
  );
}
