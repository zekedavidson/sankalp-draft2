import { Phone, Mail, FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const steps = [
  { step: "01", title: "Register Your Claim", desc: "Notify us or the insurer immediately after the incident. Keep all documents ready." },
  { step: "02", title: "Document Submission", desc: "Submit required documents (FIR, hospital bills, etc.) to the insurer or our team." },
  { step: "03", title: "Survey / Assessment", desc: "Insurer appoints a surveyor for motor claims or medical team for life claims." },
  { step: "04", title: "Claim Processing", desc: "Insurer reviews your documents and processes the claim within IRDAI-mandated TAT." },
  { step: "05", title: "Settlement", desc: "Approved amount is transferred to your bank account or hospital directly (cashless)." },
];

export default function ClaimsPage() {
  return (
    <Layout>
      <section className="gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Claims Assistance</h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            We guide you through every step of your claim. Our dedicated claims team ensures a smooth, stress-free experience.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="tel:18000000000">
              <Button className="gradient-gold text-navy font-bold border-0">
                <Phone className="w-4 h-4 mr-2" />
                Call Claims Helpline
              </Button>
            </a>
            <Link to="/grievance">
              <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold hover:text-navy bg-transparent">
                Grievance Redressal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">How the Claims Process Works</h2>
          <p className="text-muted-foreground text-center mb-10">A simple 5-step process guided by our team</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm flex-shrink-0">
                  {s.step}
                </div>
                <div className="bg-muted rounded-xl p-4 flex-1">
                  <p className="font-semibold text-navy">{s.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Phone, label: "Claims Helpline", value: "1800-000-0000", sub: "Mon–Sat, 9am–6pm" },
              { icon: Mail, label: "Email Claims", value: "claims@sankalpinsurance.in", sub: "Response within 24 hours" },
              { icon: AlertTriangle, label: "Grievance Officer", value: "Mr. [Name]", sub: "grievance@sankalpinsurance.in" },
            ].map((item) => (
              <Card key={item.label} className="text-center p-6">
                <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">{item.label}</p>
                <p className="text-sm font-medium text-foreground mt-1">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
