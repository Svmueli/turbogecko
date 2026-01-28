"use client";

import Link from "next/link";

export default function Navbar() {
  const brandColor = "#6DBE45";

  return (
    <>
      {/* Utility Bar */}
      <div style={{ backgroundColor: brandColor }} className="text-white py-2 small">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="fw-medium">Performance-Driven SEO & Web Development</span>
          <div className="d-flex gap-4">
            <a href="tel:+254700000000" className="text-white text-decoration-none opacity-hover">
              📞 +254 700 000 000
            </a>
            <a href="mailto:info@unlinkedseo.co.ke" className="text-white text-decoration-none opacity-hover">
              ✉ info@unlinkedseo.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
        <div className="container">

          {/* LOGO */}
          <Link href="/" className="navbar-brand text-decoration-none">
            <span className="d-inline-flex align-items-center gap-3">
              <span className="logo-box">U</span>
              <span className="logo-text">
                <strong className="text-dark">Unlinked</strong>
                <strong style={{ color: brandColor }}>SEO</strong>
              </span>
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon" />
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto gap-lg-4">

              {/* SERVICES */}
              <li className="nav-item dropdown mega-dropdown">
                <a className="nav-link fw-semibold dropdown-toggle custom-nav-link text-decoration-none" role="button">
                  Services
                </a>
                <div className="dropdown-menu mega-menu shadow-lg p-4">
                  <div className="row">
                    <div className="col-6">
                      <h6 className="mega-title" style={{ color: brandColor }}>SEO Services</h6>
                      <div className="d-flex flex-column gap-3">
                        <Link href="/services/on-page-seo" className="mega-item">
                          <i className="bi bi-pencil-square" /> On-Page SEO
                        </Link>
                        <Link href="/services/technical-seo" className="mega-item">
                          <i className="bi bi-gear" /> Technical SEO
                        </Link>
                        <Link href="/services/link-building" className="mega-item">
                          <i className="bi bi-link-45deg" /> Link Building
                        </Link>
                        <Link href="/services/seo-audit" className="mega-item">
                          <i className="bi bi-search" /> SEO Audits
                        </Link>
                      </div>
                    </div>
                    <div className="col-6 border-start">
                      <h6 className="mega-title" style={{ color: brandColor }}>Web & Growth</h6>
                      <div className="d-flex flex-column gap-3">
                        <Link href="/services/web-development" className="mega-item">
                          <i className="bi bi-code-slash" /> Web Development
                        </Link>
                        <Link href="/services/conversion-rate-optimization" className="mega-item">
                          <i className="bi bi-graph-up-arrow" /> CRO
                        </Link>
                        <Link href="/services/managed-hosting" className="mega-item">
                          <i className="bi bi-hdd-network" /> Managed Hosting
                        </Link>
                        <Link href="/services/ai-seo" className="mega-item">
                          <i className="bi bi-robot" /> AI SEO Strategy
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* WHO WE SERVE */}
              <li className="nav-item dropdown mega-dropdown">
                <a className="nav-link fw-semibold dropdown-toggle custom-nav-link text-decoration-none" role="button">
                  Who We Serve
                </a>
                <div className="dropdown-menu mega-menu shadow-lg p-4">
                  <div className="row">
                    <div className="col-6">
                      <h6 className="mega-title" style={{ color: brandColor }}>Industries</h6>
                      <div className="d-flex flex-column gap-3">
                        <Link href="/industries/saas" className="mega-item">
                          <i className="bi bi-cloud" /> SaaS Companies
                        </Link>
                        <Link href="/industries/ecommerce" className="mega-item">
                          <i className="bi bi-cart" /> E-commerce
                        </Link>
                        <Link href="/industries/ai" className="mega-item">
                          <i className="bi bi-cpu" /> AI & Tech
                        </Link>
                        <Link href="/industries/finance" className="mega-item">
                          <i className="bi bi-bank" /> Finance
                        </Link>
                      </div>
                    </div>
                    <div className="col-6 border-start">
                      <h6 className="mega-title" style={{ color: brandColor }}>Markets</h6>
                      <div className="d-flex flex-column gap-3">
                        <Link href="/markets/b2b" className="mega-item">
                          <i className="bi bi-building" /> B2B Strategy
                        </Link>
                        <Link href="/markets/enterprise" className="mega-item">
                          <i className="bi bi-diagram-3" /> Enterprise
                        </Link>
                        <Link href="/markets/local" className="mega-item">
                          <i className="bi bi-geo-alt" /> Local Business
                        </Link>
                        <Link href="/platforms/wordpress" className="mega-item">
                          <i className="bi bi-wordpress" /> Platforms
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold custom-nav-link text-decoration-none" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>

            {/* CTA - Sharp Rectangular Button */}
            <Link href="/get-a-quote" className="btn-rect">
              GET A QUOTE
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .logo-box {
          width: 45px;
          height: 45px;
          background: #6DBE45;
          color: #fff;
          font-weight: 900;
          font-size: 1.4rem;
          border-radius: 2px;
          display: grid;
          place-items: center;
        }

        .logo-text { font-size: 1.6rem; }

        /* Button Styling - Ensuring no blue link/underline */
        .btn-rect {
          display: inline-block;
          background-color: #6DBE45;
          color: white !important;
          font-weight: 700;
          padding: 12px 30px;
          border-radius: 0px; 
          text-decoration: none !important;
          letter-spacing: 1px;
          font-size: 0.85rem;
          border: 2px solid #6DBE45;
          transition: all 0.2s ease-in-out;
          text-align: center;
        }

        .btn-rect:hover {
          background-color: transparent;
          color: #6DBE45 !important;
        }

        .custom-nav-link {
          text-decoration: none !important;
          color: #333 !important;
        }

        .custom-nav-link:hover {
          color: #6DBE45 !important;
        }

        /* Mega Menu Layout */
        .mega-dropdown:hover .mega-menu { display: block; }
        .mega-menu {
          width: 580px;
          border-radius: 0;
          border: none;
          border-top: 4px solid #6DBE45;
          margin-top: 0;
        }

        .mega-title {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 15px;
          letter-spacing: 0.8px;
        }

        .mega-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          color: #444 !important;
          text-decoration: none !important;
          padding: 2px 0;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .mega-item i {
          color: #6DBE45;
          font-size: 1.1rem;
        }

        .mega-item:hover {
          color: #6DBE45 !important;
          transform: translateX(5px);
        }

        .opacity-hover:hover { opacity: 0.8; }

        @media (max-width: 991px) {
          .mega-menu { width: 100%; border-top: none; }
          .col-6 { width: 100%; border-start: none !important; margin-bottom: 25px; }
          .btn-rect { display: block; text-align: center; margin-top: 15px; }
        }
      `}</style>
    </>
  );
}