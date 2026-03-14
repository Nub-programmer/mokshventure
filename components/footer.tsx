import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Moksh Venture</h3>
            <p className="text-card/70 leading-relaxed mb-6">
              Experience authentic Indian cuisine in the beautiful city of Dehradun. 
              Where tradition meets taste.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card/10 rounded-full hover:bg-card/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card/10 rounded-full hover:bg-card/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card/10 rounded-full hover:bg-card/20 transition-colors"
                aria-label="Follow us on X"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-card/70 hover:text-card transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-card/70 hover:text-card transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-card/70 hover:text-card transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-card/70 hover:text-card transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-card/70">
              <li>
                <a href="tel:+919876543210" className="hover:text-card transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@mokshventure.com" className="hover:text-card transition-colors">
                  hello@mokshventure.com
                </a>
              </li>
              <li>
                Rajpur Road, Near Clock Tower<br />
                Dehradun, Uttarakhand 248001
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 text-center text-card/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Moksh Venture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
