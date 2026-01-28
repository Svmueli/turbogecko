"use client";

import Link from "next/link";

export default function Footer() {
  const brandGreen = "#6DBE45";

  return (
    <footer className="pt-5 pb-4" style={{ backgroundColor: brandGreen }}>
      <div className="container">
        <div className="row gy-5 align-items-start">

          {/* Brand & Mission */}
          <div className="col-lg-5">
            {/* Removed underline and default blue from brand link */}
            <Link href="/" className="text-decoration-none border-0 p-0 shadow-none">
              <h4 className="fw-black text-white mb-3 m-0" style={{ textDecoration: 'none' }}>
                Unlinked<span style={{ color: "#212529" }}>SEO</span>
              </h4>
            </Link>

            <p className="text-white opacity-90 small mb-4 mt-3 col-lg-10 lh-lg">
              We engineer high-performance search systems. By combining technical SEO 
              excellence with AI-driven intelligence, we help brands bypass the 
              noise and own their market share.
            </p>

            {/* Socials - Boxed & Clean */}
            <div className="d-flex gap-3">
              {["twitter-x", "linkedin", "github", "instagram"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="social-icon-link"
                  aria-label={`UnlinkedSEO on ${icon}`}
                >
                  <i className={`bi bi-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="col-lg-7">
            <div className="row">
              {/* Expertise Column */}
              <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                <h6 className="footer-title">Expertise</h6>
                <ul className="list-unstyled p-0 m-0">
                  {["Technical SEO", "AI Strategy", "Link Building", "Web Development"].map((item) => (
                    <li key={item} className="mb-2">
                      <Link href="#" className="footer-link">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="col-md-6 col-lg-6">
                <h6 className="footer-title">Company</h6>
                <ul className="list-unstyled p-0 m-0">
                  {[
                    { name: "Our Process", href: "/#process" },
                    { name: "Industries", href: "/#who-we-serve" },
                    { name: "Blog", href: "/blog" },
                    { name: "Free SEO Audit", href: "/get-a-quote" }
                  ].map((link) => (
                    <li key={link.name} className="mb-2">
                      <Link href={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 border-0" style={{ backgroundColor: "rgba(255,255,255,0.2)", height: '1px' }} />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="small text-white opacity-75 mb-3 mb-md-0">
            © {new Date().getFullYear()} UnlinkedSEO. All rights reserved.
          </div>
          
          <div className="d-flex gap-4">
             <span className="small text-white fw-bold letter-spacing-1">
               BUILT FOR RANKINGS. ENGINEERED FOR GROWTH.
             </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        .letter-spacing-1 { letter-spacing: 1px; }

        .footer-title {
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.75rem;
          color: #212529; 
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
          text-decoration: none !important;
        }

        /* Essential Reset: No blue, No underline */
        .footer-link {
          color: white !important;
          text-decoration: none !important;
          font-size: 0.9rem;
          opacity: 0.85;
          transition: all 0.2s ease;
          display: inline-block;
          border: none;
          outline: none;
        }

        .footer-link:hover {
          opacity: 1;
          transform: translateX(5px);
          color: #212529 !important;
          text-decoration: none !important;
        }

        .social-icon-link {
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.1);
          color: white !important;
          display: grid;
          place-items: center;
          text-decoration: none !important;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-icon-link:hover {
          background: #212529;
          color: ${brandGreen} !important;
          border-color: #212529;
          transform: translateY(-3px);
          text-decoration: none !important;
        }

        @media (max-width: 991px) {
          .footer-title { margin-top: 1rem; }
        }
      `}</style>
    </footer>
  );
}