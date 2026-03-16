import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* IRDAI Compliance Banner */}
      <div className="bg-gold/10 border-t border-gold/30 py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold">
            ⚠️ REGULATORY DISCLOSURE: Sankalp Insurance Brokers Pvt. Ltd. is a licensed Insurance Broker registered with IRDAI.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-1">
            Broker License No.: IRDA/DB-XXX/XX/XXXXX &nbsp;|&nbsp; IRDAI Registration No.: XXX &nbsp;|&nbsp; Valid Till: DD/MM/YYYY
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Sankalp Insurance</p>
                <p className="text-gold text-[0.625rem] leading-tight">Brokers Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Your trusted partner for Life, Health, and Motor Insurance. We provide unbiased, expert guidance to help you make informed decisions.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>1800-000-0000 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>support@sankalpinsurance.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>123, Business Hub, Mumbai – 400001, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Our Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/life-insurance" className="hover:text-gold transition-colors">Term Life Insurance</Link></li>
              <li><Link to="/life-insurance" className="hover:text-gold transition-colors">Whole Life Insurance</Link></li>
              <li><Link to="/life-insurance" className="hover:text-gold transition-colors">ULIP Plans</Link></li>
              <li><Link to="/life-insurance" className="hover:text-gold transition-colors">Endowment Plans</Link></li>
              <li><Link to="/health-insurance" className="hover:text-gold transition-colors">Individual Health Insurance</Link></li>
              <li><Link to="/health-insurance" className="hover:text-gold transition-colors">Family Floater Plans</Link></li>
              <li><Link to="/health-insurance" className="hover:text-gold transition-colors">Critical Illness Cover</Link></li>
              <li><Link to="/motor-insurance" className="hover:text-gold transition-colors">Private Car Insurance</Link></li>
              <li><Link to="/motor-insurance" className="hover:text-gold transition-colors">Two Wheeler Insurance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/compare-plans" className="hover:text-gold transition-colors">Compare Plans</Link></li>
              <li><Link to="/claims" className="hover:text-gold transition-colors">Claims Assistance</Link></li>
              <li><Link to="/grievance" className="hover:text-gold transition-colors">Grievance Redressal</Link></li>
              <li>
                <a href="https://www.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                  IRDAI Website <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Legal & Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/faqs" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/grievance" className="hover:text-gold transition-colors">Grievance Officer</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-navy-light/50">
          <div className="bg-navy-light/50 rounded-lg p-4 mb-6 text-xs text-primary-foreground/50 leading-relaxed">
            <p className="font-semibold text-primary-foreground/70 mb-1">⚠️ Important Disclaimer</p>
            <p>
              Sankalp Insurance Brokers Pvt. Ltd. is a licensed insurance broker registered with the Insurance Regulatory and Development Authority of India (IRDAI) vide Broker License No.: IRDA/DB-XXX/XX/XXXXX. 
              Registration No.: XXX. The Company acts as an intermediary and does not underwrite insurance policies. 
              Insurance is the subject matter of solicitation. Visitors are requested to review all plan details carefully before purchase. 
              Premium amounts displayed are indicative and subject to change based on underwriting guidelines. 
              IRDAI or its officials do not involve in activities like selling insurance policies, announcing bonus, or investment of premiums. 
              Public receiving such phone calls are requested to lodge a police complaint.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
            <p>© 2024 Sankalp Insurance Brokers Pvt. Ltd. All rights reserved. CIN: UXXXXX</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
              <Link to="/faqs" className="hover:text-gold transition-colors">FAQs</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
