import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, ChevronDown, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Health Insurance", href: "/health-insurance" },
  { label: "Motor Insurance", href: "/motor-insurance" },
  { label: "Compare Plans", href: "/compare-plans" },
  { label: "Claims Assistance", href: "/claims" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-navy border-b border-navy-light">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center shadow-gold">
            <Shield className="w-5 h-5 text-navy" />
          </div>
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-bold text-base leading-tight">Sankalp Insurance</p>
            <p className="text-gold text-[0.625rem] leading-tight tracking-wide">Brokers Pvt. Ltd.</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.href
                ? "text-gold bg-navy-light"
                : "text-primary-foreground/80 hover:text-gold hover:bg-navy-light"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918000000000" className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-gold text-sm transition-colors">
            <Phone className="w-4 h-4" />
            <span>1800-000-0000</span>
          </a>
          <Link to="/login">
            <Button variant="outline" size="sm" className="border-gold/50 text-gold hover:bg-gold hover:text-navy bg-transparent">
              <User className="w-4 h-4 mr-1" />
              Login
            </Button>
          </Link>
          <Link to="/get-quote">
            <Button size="sm" className="gradient-gold text-navy font-semibold hover:opacity-90 border-0">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-light border-t border-navy-light/50 py-3 px-4 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-primary-foreground/80 hover:text-gold hover:bg-navy"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-navy/50">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <Button variant="outline" size="sm" className="w-full border-gold/50 text-gold hover:bg-gold hover:text-navy bg-transparent">
                Login / My Account
              </Button>
            </Link>
            <Link to="/get-quote" onClick={() => setMenuOpen(false)}>
              <Button size="sm" className="w-full gradient-gold text-navy font-semibold border-0">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
