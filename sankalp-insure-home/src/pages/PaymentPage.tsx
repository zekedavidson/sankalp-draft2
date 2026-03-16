import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Lock, CreditCard, Shield, CheckCircle, AlertCircle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);

  const insurer = searchParams.get("insurer") || "HDFC Life";
  const planName = searchParams.get("planName") || "Click 2 Protect Super";
  const premium = searchParams.get("premium") || "₹7,800/yr";
  const cover = searchParams.get("cover") || "₹50 Lakhs";

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      navigate(`/confirmation?insurer=${encodeURIComponent(insurer)}&planName=${encodeURIComponent(planName)}&premium=${encodeURIComponent(premium)}&cover=${encodeURIComponent(cover)}`);
    }, 2000);
  };

  return (
    <Layout>
      <section className="gradient-hero py-10 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-1">Secure Payment</h1>
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
            <Lock className="w-4 h-4" /> 256-bit SSL Encrypted · PCI-DSS Compliant
          </p>
        </div>
      </section>

      <div className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <StepIndicator current={3} />

          {/* MANDATORY: Final Insurer + Premium display before payment */}
          <Card className="border-2 border-gold/50 bg-gold/5 mb-6">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-gold-dark" />
                <CardTitle className="text-navy text-base">Review Before Payment</CardTitle>
              </div>
              <p className="text-xs text-muted-foreground">IRDAI requires clear display of insurer and premium before purchase</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground/70">Insurer Name</span>
                  </div>
                  <span className="font-bold text-navy">{insurer}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-foreground/70">Plan Name</span>
                  <span className="font-semibold text-foreground">{planName}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-foreground/70">Sum Insured / Coverage</span>
                  <span className="font-semibold text-foreground">{cover}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-bold text-foreground">Total Premium Payable</span>
                  <span className="text-xl font-bold text-navy">{premium}</span>
                </div>
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-3 mt-3">
                <p className="text-xs text-foreground/60">
                  ⚠️ You are purchasing a policy from <strong>{insurer}</strong>. Sankalp Insurance Brokers is the intermediary. 
                  The policy contract is between you and {insurer}. Premium is inclusive of GST at 18%.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="border-navy/10 shadow-navy">
            <CardHeader>
              <CardTitle className="text-navy flex items-center gap-2">
                <Lock className="w-5 h-5 text-gold-dark" /> Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePay} className="space-y-5">
                {/* Method selector */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "upi", icon: "📱", label: "UPI" },
                    { val: "card", icon: "💳", label: "Debit/Credit Card" },
                    { val: "netbanking", icon: "🏦", label: "Net Banking" },
                  ].map((m) => (
                    <button
                      key={m.val}
                      type="button"
                      onClick={() => setMethod(m.val)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all text-center ${
                        method === m.val ? "border-navy bg-navy text-primary-foreground" : "border-border hover:border-navy/40"
                      }`}
                    >
                      <span className="text-lg block mb-1">{m.icon}</span>
                      {m.label}
                    </button>
                  ))}
                </div>

                {method === "upi" && (
                  <div>
                    <Label htmlFor="upiId">UPI ID *</Label>
                    <Input id="upiId" placeholder="yourname@upi" required className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">e.g. 9876543210@paytm, name@okaxis</p>
                  </div>
                )}

                {method === "card" && (
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="cardNum">Card Number *</Label>
                      <Input id="cardNum" placeholder="XXXX XXXX XXXX XXXX" maxLength={19} required className="mt-1" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <Label htmlFor="expiry">Expiry (MM/YY) *</Label>
                        <Input id="expiry" placeholder="MM/YY" maxLength={5} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input id="cvv" type="password" placeholder="***" maxLength={3} required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input id="cardName" placeholder="As on card" required className="mt-1" />
                    </div>
                  </div>
                )}

                {method === "netbanking" && (
                  <div>
                    <Label htmlFor="bank">Select Bank *</Label>
                    <select id="bank" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select your bank</option>
                      <option>SBI</option><option>HDFC Bank</option><option>ICICI Bank</option>
                      <option>Axis Bank</option><option>Kotak Mahindra Bank</option><option>PNB</option>
                    </select>
                  </div>
                )}

                {/* Security badges */}
                <div className="flex flex-wrap items-center gap-3 bg-muted rounded-lg p-3">
                  {[
                    { icon: Lock, label: "256-bit SSL" },
                    { icon: Shield, label: "PCI-DSS Compliant" },
                    { icon: CheckCircle, label: "RBI Approved" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <badge.icon className="w-3.5 h-3.5 text-gold" />
                      {badge.label}
                    </div>
                  ))}
                </div>

                <Button
                  type="submit"
                  disabled={processing}
                  className="w-full gradient-gold text-navy font-bold border-0 py-4 text-base"
                >
                  {processing ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                      Processing Payment…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Pay {premium} & Buy Policy
                    </span>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By clicking Pay, you confirm that you have reviewed the policy details and agree to the T&C.
                  Policy issuance is subject to insurer underwriting.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
