import Image from "next/image";
import Link from "next/link";
import { YouTubeIcon, LinkedInIcon } from "../../icons";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="bg-surface-2">
      <div className="mx-4 md:container md:mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Company Info Section */}
          <section className="space-y-4 max-w-sm">
            <Image
              src="/logo.svg"
              alt="Company logo"
              width={80}
              height={30}
              priority
            />
            <p className="text-md text-white/60">
              We build AWS Agentic AI Products that help make the complex
              simple.
            </p>
          </section>

          {/* Navigation Menu */}
          <nav
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
            aria-label="Footer navigation"
          >
            <div className="space-y-2">
              <h4 className="font-semibold ">Products</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/finops-center" className="footer__menu--link">
                    FinOps Center
                  </Link>
                </li>
                <li>
                  <Link href="/agent-bills" className="footer__menu--link">
                    Agent Bills
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold ">Services</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/ai-product-framework"
                    className="footer__menu--link"
                  >
                    AI Product Framework
                  </Link>
                </li>
                <li>
                  <Link
                    href="/finops-quickstart"
                    className="footer__menu--link"
                  >
                    FinOps Center QuickStart
                  </Link>
                </li>
                <li>
                  <Link href="/program-advisory" className="footer__menu--link">
                    Program Advisory
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold ">Resources</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/ai-product-framework"
                    className="footer__menu--link"
                  >
                    Product Documentation Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold ">About Us</h4>
            </div>
          </nav>

          {/* Social Media Links */}
          <section aria-label="Social media links">
            <div className="flex gap-4">
              <Link
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu--social-icon"
                aria-label="Visit our YouTube channel"
              >
                <YouTubeIcon />
              </Link>
              <Link
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__menu--social-icon"
                aria-label="Visit our LinkedIn page"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
