import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";

const steps = ["Get Quote", "Your Details", "Select Plan", "Payment", "Confirmation"];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8 overflow-x-auto">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              i < current ? "bg-gold text-navy" : i === current ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {i < current ? "✓" : i + 1}
            </div>
            <span className={`text-xs mt-1 hidden sm:block whitespace-nowrap ${i === current ? "text-navy font-semibold" : "text-muted-foreground"}`}>
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-0.5 w-8 sm:w-16 mx-1 transition-all ${i < current ? "bg-gold" : "bg-muted"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function CustomerDetailsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type") || "life";

  const [consents, setConsents] = useState({ marketing: false, terms: false, data: false });

  const canSubmit = consents.terms && consents.data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    navigate(`/${type}-insurance?verified=true`);
  };

  return (
    <Layout>
      <section className="gradient-hero py-10 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-1">Your Personal Details</h1>
          <p className="text-primary-foreground/60 text-sm">Accurate details ensure correct premium calculation</p>
        </div>
      </section>

      <div className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <StepIndicator current={1} />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <Card className="border-navy/10 shadow-navy">
              <CardHeader>
                <CardTitle className="text-navy text-lg">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Ramesh" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Sharma" required className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input id="dob" type="date" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <select id="gender" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input id="mobile" type="tel" placeholder="98XXXXXXXX" maxLength={10} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* KYC */}
            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy text-lg">KYC Details</CardTitle>
                <p className="text-xs text-muted-foreground">Required as per IRDAI / PMLA guidelines</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pan">PAN Number *</Label>
                    <Input id="pan" placeholder="ABCDE1234F" maxLength={10} required className="mt-1 uppercase" />
                  </div>
                  <div>
                    <Label htmlFor="aadhaar">Aadhaar Number *</Label>
                    <Input id="aadhaar" placeholder="XXXX XXXX XXXX" maxLength={14} required className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Info className="w-3 h-3" /> Aadhaar number is masked and stored securely
                    </p>
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Correspondence Address *</Label>
                  <Input id="address" placeholder="House/Flat No., Street, Area" required className="mt-1" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" placeholder="Mumbai" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" placeholder="Maharashtra" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="pin">PIN Code *</Label>
                    <Input id="pin" placeholder="400001" maxLength={6} required className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nominee (Life only) */}
            {type === "life" && (
              <Card className="border-navy/10">
                <CardHeader>
                  <CardTitle className="text-navy text-lg">Nominee Details</CardTitle>
                  <p className="text-xs text-muted-foreground">Mandatory for life insurance policies</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nomineeName">Nominee Name *</Label>
                      <Input id="nomineeName" placeholder="Full name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="nomineeRelation">Relationship *</Label>
                      <select id="nomineeRelation" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        <option>Spouse</option><option>Son</option><option>Daughter</option>
                        <option>Father</option><option>Mother</option><option>Brother</option><option>Sister</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="nomineeDob">Nominee Date of Birth *</Label>
                    <Input id="nomineeDob" type="date" required className="mt-1 max-w-xs" />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Consent Capture — MANDATORY COMPLIANCE */}
            <Card className="border-gold/40 bg-gold/5">
              <CardHeader>
                <CardTitle className="text-navy text-lg flex items-center gap-2">
                  <Info className="w-5 h-5 text-gold-dark" />
                  Customer Consent (Mandatory)
                </CardTitle>
                <p className="text-xs text-muted-foreground">As per IRDAI guidelines, your explicit consent is required before proposal submission</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent-data"
                    checked={consents.data}
                    onCheckedChange={(v) => setConsents(c => ({ ...c, data: !!v }))}
                  />
                  <label htmlFor="consent-data" className="text-sm leading-relaxed cursor-pointer">
                    <span className="font-semibold text-destructive">* </span>
                    I consent to Sankalp Insurance Brokers Pvt. Ltd. collecting, using, and sharing my personal data (including KYC) with the selected insurance company for the purpose of processing my insurance application, as per IRDAI (Insurance Brokers) Regulations 2018 and the Personal Data Protection framework.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent-terms"
                    checked={consents.terms}
                    onCheckedChange={(v) => setConsents(c => ({ ...c, terms: !!v }))}
                  />
                  <label htmlFor="consent-terms" className="text-sm leading-relaxed cursor-pointer">
                    <span className="font-semibold text-destructive">* </span>
                    I have read and agree to the <a href="/terms" className="text-navy underline">Terms & Conditions</a> and <a href="/privacy-policy" className="text-navy underline">Privacy Policy</a> of Sankalp Insurance Brokers Pvt. Ltd. I understand that this is a proposal for insurance and not a binding contract until accepted by the insurer.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent-marketing"
                    checked={consents.marketing}
                    onCheckedChange={(v) => setConsents(c => ({ ...c, marketing: !!v }))}
                  />
                  <label htmlFor="consent-marketing" className="text-sm leading-relaxed cursor-pointer text-muted-foreground">
                    (Optional) I consent to receiving insurance-related updates, renewal reminders, and promotional offers via SMS, Email, or WhatsApp from Sankalp Insurance Brokers Pvt. Ltd.
                  </label>
                </div>

                {!canSubmit && (
                  <p className="text-xs text-destructive bg-destructive/10 rounded-lg p-3">
                    ⚠️ You must provide mandatory consents (marked with *) before proceeding. This is required by IRDAI regulations.
                  </p>
                )}
              </CardContent>
            </Card>

            <Button type="submit" disabled={!canSubmit} className="w-full gradient-gold text-navy font-bold border-0 py-3 disabled:opacity-50 disabled:cursor-not-allowed">
              View Matching Plans <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
