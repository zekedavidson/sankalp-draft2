import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Shield, Car, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const lifePlans = [
  { id: "1", insurer: "HDFC Life", plan: "Click 2 Protect Super", type: "Term Life", premium: "₹7,800/yr", cover: "₹50 Lakhs", settlement: "99.10%", features: ["Death Benefit", "Critical Illness Add-on", "Return of Premium Option"] },
  { id: "2", insurer: "LIC of India", plan: "Jeevan Anand", type: "Endowment", premium: "₹14,400/yr", cover: "₹25 Lakhs", settlement: "98.35%", features: ["Death + Survival Benefit", "Bonus accrual", "Loan facility"] },
  { id: "3", insurer: "ICICI Prudential", plan: "iProtect Smart", type: "Term Life", premium: "₹9,480/yr", cover: "₹1 Crore", settlement: "98.50%", features: ["High Coverage", "Accidental Death Benefit", "Waiver of Premium"] },
];

const motorPlans = [
  { id: "4", insurer: "HDFC ERGO", plan: "Motor Optima Secure", type: "Comprehensive", premium: "₹5,200/yr", cover: "As per vehicle IDV", settlement: "97.70%", features: ["Own Damage", "Third Party", "24×7 Roadside Assistance"] },
  { id: "5", insurer: "New India Assurance", plan: "Private Car Comprehensive", type: "Comprehensive", premium: "₹4,500/yr", cover: "As per vehicle IDV", settlement: "96.20%", features: ["Own Damage", "Third Party Liability", "Personal Accident Cover"] },
  { id: "6", insurer: "Bajaj Allianz", plan: "Car Insurance Third Party", type: "Third Party", premium: "₹2,094/yr", cover: "Statutory", settlement: "97.30%", features: ["Mandatory Coverage", "Third Party Injury", "Property Damage"] },
];

export default function SelectPlanPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type") || "life";
  const plans = type === "life" ? lifePlans : motorPlans;

  const handleSelect = (plan: typeof plans[0]) => {
    navigate(`/payment?type=${type}&planId=${plan.id}&insurer=${encodeURIComponent(plan.insurer)}&planName=${encodeURIComponent(plan.plan)}&premium=${encodeURIComponent(plan.premium)}&cover=${encodeURIComponent(plan.cover)}`);
  };

  return (
    <Layout>
      <section className="gradient-hero py-10 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-1">Select Your Plan</h1>
          <p className="text-primary-foreground/60 text-sm">Plans displayed neutrally — no ranking by preference</p>
        </div>
      </section>

      <div className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <StepIndicator current={2} />

          {/* Commission disclosure reminder */}
          <div className="flex items-start gap-2 bg-gold/10 border border-gold/30 rounded-lg p-3 mb-6">
            <Info className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
            <p className="text-xs text-foreground/70">
              Plans below are shown without ranking. Sankalp Insurance Brokers may receive brokerage from insurers as per IRDAI norms. Your premium is unaffected.
            </p>
          </div>

          <div className="space-y-4">
            {plans.map((plan) => (
              <Card key={plan.id} className="border-navy/10 hover:border-gold/50 transition-all">
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs text-muted-foreground font-medium">{plan.insurer}</p>
                        <Badge variant="secondary" className="text-xs bg-muted text-navy">{plan.type}</Badge>
                      </div>
                      <h3 className="font-bold text-navy text-lg">{plan.plan}</h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Coverage</p>
                          <p className="text-sm font-semibold text-foreground">{plan.cover}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Claim Ratio</p>
                          <p className="text-sm font-semibold text-green-600">{plan.settlement}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {plan.features.map((f) => (
                          <span key={f} className="text-xs bg-muted text-foreground/70 px-2 py-1 rounded-full flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-gold" /> {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 sm:min-w-36">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Annual Premium</p>
                        <p className="text-2xl font-bold text-navy">{plan.premium}</p>
                      </div>
                      <Button
                        onClick={() => handleSelect(plan)}
                        className="gradient-gold text-navy font-bold border-0 w-full sm:w-auto"
                      >
                        Select Plan <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            * Premiums are indicative. Final premium confirmed by the insurer based on underwriting.
          </p>
        </div>
      </div>
    </Layout>
  );
}
