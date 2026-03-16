import { Link } from "react-router-dom";
import { Shield, Building, Users, Award, AlertCircle, CheckCircle, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">About Sankalp Insurance Brokers</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            A dedicated, IRDAI-licensed insurance broker committed to transparent, unbiased, and customer-first insurance solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Story</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Sankalp Insurance Brokers Pvt. Ltd. was founded with a singular mission: to make insurance simple, transparent, and accessible to every Indian family and vehicle owner. We bridge the gap between insurers and customers, acting exclusively in your interest.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                As a registered insurance broker with IRDAI, we are legally and ethically obligated to act in the best interest of our clients — not the insurers. We provide unbiased comparisons, full commission disclosures, and end-to-end claim support.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[["10,000+", "Policies Issued"], ["50+", "Insurer Partners"], ["98%", "Customer Satisfaction"]].map(([val, label]) => (
                  <div key={label} className="text-center bg-muted rounded-xl p-4">
                    <p className="text-2xl font-bold text-navy">{val}</p>
                    <p className="text-xs text-muted-foreground mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <p className="font-bold text-navy">Our Mission</p>
                  <p className="text-sm text-muted-foreground">Protecting what matters most</p>
                </div>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                To empower every Indian with access to the right insurance at the right price, backed by honest advice, transparent processes, and unwavering support from quote to claim settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Broker Disclosure */}
      <section className="py-14 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-gold" />
              <h2 className="text-2xl font-bold">Broker Disclosure Section</h2>
            </div>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-6">Mandatory IRDAI Regulatory Disclosure</p>

            <div className="space-y-4">
              {[
                { label: "Entity Name", value: "Sankalp Insurance Brokers Private Limited" },
                { label: "Type of Entity", value: "Insurance Broker (Direct Broker – Life & General)" },
                { label: "IRDAI Broker License No.", value: "IRDA/DB-XXX/XX/XXXXX" },
                { label: "IRDAI Registration No.", value: "XXX" },
                { label: "License Valid Till", value: "DD/MM/YYYY" },
                { label: "CIN", value: "UXXXXXXXXXXXXXXXXXXXXX" },
                { label: "Registered Address", value: "123, Business Hub, Mumbai – 400001, Maharashtra" },
                { label: "Principal Officer", value: "Mr. [Name], Certified Insurance Professional" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-navy-light/50 pb-3">
                  <span className="text-primary-foreground/60 text-sm sm:w-52 flex-shrink-0">{item.label}:</span>
                  <span className="text-primary-foreground font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gold/10 border border-gold/30 rounded-xl p-6">
              <h3 className="text-gold font-semibold mb-3">What is an Insurance Broker?</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-3">
                An insurance broker is a person or entity licensed by IRDAI to solicit, negotiate, and procure insurance contracts on behalf of policyholders. Unlike an insurance agent who represents a single insurer, a broker represents the client and can work with multiple insurance companies.
              </p>
              <ul className="space-y-2">
                {[
                  "A broker acts in YOUR best interest, not the insurer's",
                  "A broker is paid brokerage by insurers — disclosed to you upfront",
                  "A broker cannot bind coverage without insurer approval",
                  "A broker must comply with IRDAI (Insurance Brokers) Regulations, 2018",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-primary-foreground/70">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-primary/30 rounded-xl p-4">
              <p className="text-xs text-primary-foreground/50 leading-relaxed">
                <strong className="text-primary-foreground/70">Commission Disclosure:</strong> Sankalp Insurance Brokers Pvt. Ltd. receives brokerage/commission from insurance companies on the policies procured. 
                The rate of brokerage varies from product to product and is within the limits prescribed by IRDAI. Full details of commission rates are available on request. 
                This brokerage does not affect the premium charged to the customer, which is fixed by the respective insurer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Our Leadership</h2>
          <p className="text-muted-foreground mb-10">Experienced professionals committed to your financial security</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Mr. Ramesh Sharma", role: "Principal Officer & CEO", exp: "20+ yrs in Insurance" },
              { name: "Ms. Priya Joshi", role: "Head – Life Insurance", exp: "15+ yrs in Life Insurance" },
              { name: "Mr. Anil Verma", role: "Head – Motor Insurance", exp: "12+ yrs in General Insurance" },
            ].map((person) => (
              <Card key={person.name} className="text-center p-6">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <p className="font-bold text-navy">{person.name}</p>
                <p className="text-sm text-muted-foreground">{person.role}</p>
                <p className="text-xs text-gold-dark mt-1">{person.exp}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
