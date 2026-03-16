import { useState } from "react";
import { AlertTriangle, Phone, Mail, ExternalLink, CheckCircle, Clock, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const escalationLevels = [
  {
    level: "Level 1",
    title: "Company Grievance Redressal Officer",
    timeline: "Resolve within 7 days",
    color: "border-blue-400 bg-blue-50",
    headerColor: "bg-blue-600",
    contact: [
      { label: "Officer Name", value: "Mr. Suresh Patel, GRO" },
      { label: "Designation", value: "Grievance Redressal Officer" },
      { label: "Phone", value: "1800-000-0001 (Toll Free)" },
      { label: "Email", value: "grievance@sankalpinsurance.in" },
      { label: "Address", value: "Sankalp Insurance Brokers Pvt. Ltd., 123 Business Hub, Mumbai – 400001" },
      { label: "Working Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM" },
    ],
    steps: [
      "Submit your grievance via the form below, email, or phone",
      "You will receive an acknowledgement within 3 working days",
      "GRO will investigate and respond within 7 working days",
      "If not resolved, escalate to Level 2",
    ],
  },
  {
    level: "Level 2",
    title: "IRDAI Grievance Cell / IGMS Portal",
    timeline: "Escalate after 15 days if unresolved",
    color: "border-orange-400 bg-orange-50",
    headerColor: "bg-orange-600",
    contact: [
      { label: "Portal", value: "IRDAI IGMS – https://igms.irda.gov.in" },
      { label: "IRDAI Helpline", value: "155255 / 1800 4254 732" },
      { label: "Email", value: "complaints@irdai.gov.in" },
      { label: "Address", value: "IRDAI, Sy. No. 115/1, Financial District, Nanakramguda, Hyderabad – 500032" },
    ],
    steps: [
      "If not resolved within 15 days by Level 1, register on IGMS Portal",
      "Provide your complaint number from Level 1 response",
      "IRDAI will intervene and instruct the broker/insurer",
      "If still unresolved after 30 days, escalate to Level 3",
    ],
  },
  {
    level: "Level 3",
    title: "Insurance Ombudsman",
    timeline: "Final escalation after 30 days",
    color: "border-red-400 bg-red-50",
    headerColor: "bg-red-600",
    contact: [
      { label: "Website", value: "https://www.cioins.co.in (Council for Insurance Ombudsmen)" },
      { label: "Applicable for", value: "Disputes up to ₹30 Lakhs in value" },
      { label: "Note", value: "Ombudsman service is free of charge to policyholders" },
    ],
    steps: [
      "Write to the Insurance Ombudsman of your region",
      "Submit all previous correspondence with broker and insurer",
      "Ombudsman will hear both parties and issue an award",
      "The award is binding on the insurer if accepted by the complainant",
    ],
  },
];

export default function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-gold mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Mandatory Compliance Page</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Grievance Redressal & Escalation</h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            Sankalp Insurance Brokers Pvt. Ltd. is committed to addressing all customer grievances promptly and transparently, in accordance with IRDAI (Insurance Brokers) Regulations 2018.
          </p>
        </div>
      </section>

      {/* Regulatory Note */}
      <div className="bg-gold/10 border-b border-gold/30 py-4">
        <div className="container mx-auto px-4 flex items-start gap-2">
          <FileText className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
          <p className="text-xs text-foreground/70">
            <strong>Regulatory Reference:</strong> This page is maintained as per IRDAI (Insurance Brokers) Regulations 2018, Regulation 27 – Grievance Redressal, and IRDAI (Protection of Policyholders' Interests) Regulations 2017.
          </p>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Escalation Matrix */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Grievance Escalation Matrix</h2>
            <p className="text-muted-foreground text-center mb-8">Follow this 3-level process to resolve your grievance</p>

            <div className="space-y-6 max-w-4xl mx-auto">
              {escalationLevels.map((level, idx) => (
                <div key={level.level} className={`rounded-2xl border-2 overflow-hidden ${level.color}`}>
                  <div className={`${level.headerColor} text-white px-6 py-3 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg">{level.level}</span>
                      <span className="font-semibold">{level.title}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{level.timeline}</span>
                    </div>
                  </div>

                  <div className="p-6 grid md:grid-cols-2 gap-6">
                    {/* Contact Details */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Contact Details</h4>
                      <div className="space-y-2">
                        {level.contact.map((c) => (
                          <div key={c.label} className="flex flex-col sm:flex-row sm:items-start gap-1">
                            <span className="text-xs text-muted-foreground sm:w-32 flex-shrink-0">{c.label}:</span>
                            <span className="text-sm text-foreground font-medium break-all">{c.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Steps */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Process Steps</h4>
                      <div className="space-y-2">
                        {level.steps.map((step, i) => (
                          <div key={step} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-foreground/10 text-foreground/70 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                              {i + 1}
                            </span>
                            <p className="text-sm text-foreground/70">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {idx < escalationLevels.length - 1 && (
                    <div className="flex justify-center pb-3">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <ArrowRight className="w-4 h-4" />
                        <span>If unresolved, proceed to Level {idx + 2}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Grievance Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Submit a Grievance</h2>
            <p className="text-muted-foreground text-center mb-8">Use this form to register your complaint with our Grievance Redressal Officer</p>

            {submitted ? (
              <div className="text-center bg-green-50 border-2 border-green-200 rounded-2xl p-10">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Grievance Registered Successfully</h3>
                <p className="text-green-700 mb-4">
                  Your grievance has been registered with our Grievance Redressal Officer. 
                  You will receive an acknowledgement within <strong>3 working days</strong> and a resolution within <strong>7 working days</strong>.
                </p>
                <p className="text-sm text-green-600">
                  Grievance Reference No: <strong>GR-{Date.now().toString().slice(-8)}</strong>
                </p>
              </div>
            ) : (
              <Card className="border-navy/10 shadow-navy">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="gName">Full Name *</Label>
                        <Input id="gName" placeholder="Your full name" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="gMobile">Mobile Number *</Label>
                        <Input id="gMobile" type="tel" placeholder="98XXXXXXXX" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="gEmail">Email Address *</Label>
                      <Input id="gEmail" type="email" placeholder="you@example.com" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="gPolicyNo">Policy Number (if applicable)</Label>
                      <Input id="gPolicyNo" placeholder="e.g. SIB-20241101" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="gType">Grievance Type *</Label>
                      <select id="gType" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select Type</option>
                        <option>Policy not received</option>
                        <option>Incorrect policy details</option>
                        <option>Claim rejection dispute</option>
                        <option>Premium refund issue</option>
                        <option>Mis-selling complaint</option>
                        <option>Delay in claim settlement</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="gDesc">Describe Your Grievance *</Label>
                      <Textarea
                        id="gDesc"
                        placeholder="Please provide a detailed description of your complaint, including dates and all relevant details…"
                        rows={5}
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-gold text-navy font-bold border-0">
                      Submit Grievance
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Your grievance will be forwarded to our GRO: Mr. Suresh Patel at grievance@sankalpinsurance.in
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
