"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-baseline gap-2 leading-none transition-opacity hover:opacity-90"
          aria-label="Moksh Venture"
        >
          <span className="text-xl md:text-2xl font-semibold tracking-wide text-foreground">
            Moksh
          </span>
          <span className="text-sm md:text-base font-medium uppercase tracking-[0.28em] text-primary/90">
            Venture
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href="tel:+919876543210">Call Now</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:+919876543210">Call Now</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
