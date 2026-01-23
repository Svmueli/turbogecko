import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">

        <div className="row gy-4 align-items-start">

          {/* Brand */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              Unlinked<span className="text-success">SEO</span>
            </h5>

            <p className="text-secondary small mb-3 col-lg-11">
              An SEO & AI SEO growth agency helping ambitious brands dominate
              search through technical excellence, automation, and
              high-performance websites.
            </p>

            {/* Socials */}
            <div className="d-flex gap-3 mt-2">
              <a
                href="#"
                aria-label="UnlinkedSEO on X"
                className="text-secondary fs-5 hover-success"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="UnlinkedSEO on LinkedIn"
                className="text-secondary fs-5 hover-success"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="UnlinkedSEO on GitHub"
                className="text-secondary fs-5 hover-success"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-4">
            <h6 className="fw-semibold text-uppercase small mb-3 text-white">
              Services
            </h6>

            <ul className="list-unstyled small">
              <li className="mb-2 text-secondary">Technical SEO</li>
              <li className="mb-2 text-secondary">AI SEO & Automation</li>
              <li className="mb-2 text-secondary">SEO Strategy</li>
              <li className="mb-2 text-secondary">Web Development</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-4">
            <h6 className="fw-semibold text-uppercase small mb-3 text-white">
              Company
            </h6>

            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#services" className="text-secondary text-decoration-none hover-success">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#process" className="text-secondary text-decoration-none hover-success">
                  Our Process
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-secondary text-decoration-none hover-success">
                  Free SEO Audit
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary opacity-25 my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
          <p className="mb-2 mb-md-0">
            © {new Date().getFullYear()} UnlinkedSEO. All rights reserved.
          </p>
          <p className="mb-0">
            Built for rankings. Engineered for growth.
          </p>
        </div>

      </div>
    </footer>
  );
}
