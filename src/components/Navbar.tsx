"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Utility Top Bar */}
      <div className="bg-success text-white py-2 small">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="fw-medium">
            Performance-Driven SEO & Web Development
          </span>
          <div className="d-flex gap-4">
            <a href="tel:+254700000000" className="text-white text-decoration-none">
              📞 +254 700 000 000
            </a>
            <a
              href="mailto:hello@turbogecko.co.ke"
              className="text-white text-decoration-none"
            >
              ✉ hello@turbogecko.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          {/* Brand */}
          <Link href="/" className="navbar-brand fw-bold text-success fs-3">
            TurboGecko
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            {/* Center Menu */}
            <ul className="navbar-nav mx-auto gap-lg-4 align-items-lg-center">
              
              {/* Services */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><Link className="dropdown-item" href="#">SEO Services</Link></li>
                  <li><Link className="dropdown-item" href="#">Web Development</Link></li>
                  <li><Link className="dropdown-item" href="#">Technical SEO</Link></li>
                  <li><Link className="dropdown-item" href="#">Conversion Optimization</Link></li>
                </ul>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link className="nav-link fw-semibold" href="#about">
                  About
                </Link>
              </li>

              {/* Who We Serve */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Who We Serve
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><Link className="dropdown-item" href="#">Startups</Link></li>
                  <li><Link className="dropdown-item" href="#">Small Businesses</Link></li>
                  <li><Link className="dropdown-item" href="#">E-commerce</Link></li>
                  <li><Link className="dropdown-item" href="#">Local Businesses</Link></li>
                  <li><Link className="dropdown-item" href="#">Enterprises</Link></li>
                </ul>
              </li>

              {/* Blog */}
              <li className="nav-item">
                <Link className="nav-link fw-semibold" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <div>
              <Link
                href="#contact"
                className="btn btn-success fw-bold px-4 py-2"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
