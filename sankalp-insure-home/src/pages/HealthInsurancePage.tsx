import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heart, CheckCircle, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const healthPlans = [
  {
    insurer: "Star Health",
    plan: "Comprehensive Health Insurance",
    type: "Individual / Family",
    sumInsured: "₹5 Lakhs – ₹1 Crore",
    premium: "₹600/mo",
    claimRatio: "67.44%",
    features: ["Cashless treatment at 14,000+ hospitals", "No room rent capping", "Day care procedures covered"],
    tag: "Most Popular",
  },
  {
    insurer: "HDFC ERGO",
    plan: "Optima Secure",
    type: "Individual / Family Floater",
    sumInsured: "₹3 Lakhs – ₹50 Lakhs",
    premium: "₹750/mo",
    claimRatio: "72.30%",
    features: ["Restore benefit – 100% sum insured", "Wellness rewards program", "Global coverage option"],
    tag: "High Claim Ratio",
  },
  {
    insurer: "Care Health",
    plan: "Care Advantage",
    type: "Individual / Family Floater",
    sumInsured: "₹3 Lakhs – ₹6 Crore",
    premium: "₹550/mo",
    claimRatio: "75.10%",
    features: ["Unlimited restoration of sum insured", "No co-payment clause", "Air ambulance cover"],
    tag: "Best Value",
  },
  {
    insurer: "Niva Bupa",
    plan: "Health Companion",
    type: "Individual / Family Floater",
    sumInsured: "₹3 Lakhs – ₹1 Crore",
    premium: "₹820/mo",
    claimRatio: "59.80%",
    features: ["OPD expenses covered", "Maternity & newborn cover", "Annual health check-ups"],
    tag: null,
  },
];

const typesOfHealthInsurance = [
  {
    title: "Individual Health Insurance",
    desc: "An individual health insurance policy covers a single person against medical expenses arising from illnesses, surgeries, and hospitalization. It provides a fixed sum insured that can be used for treatments during the policy period. This is ideal for young professionals and single individuals looking for personal medical coverage.",
  },
  {
    title: "Family Floater Plan",
    desc: "A family floater health insurance plan provides coverage for the entire family under a single policy with a shared sum insured. Any family member can use the sum insured as needed, making it a cost-effective option for families. It typically covers the policyholder, spouse, and dependent children.",
  },
  {
    title: "Critical Illness Cover",
    desc: "Critical illness insurance provides a lump sum payout upon diagnosis of specified serious illnesses like cancer, heart attack, kidney failure, and stroke. Unlike regular health insurance that reimburses hospital bills, this plan pays the full sum insured upfront, helping cover treatment costs, lifestyle adjustments, and income loss.",
  },
  {
    title: "Top-Up / Super Top-Up Plans",
    desc: "Top-up and super top-up health insurance plans provide additional coverage over and above your existing base health insurance policy. They come with a deductible (threshold limit) and are activated once the claim amount exceeds this limit. These plans are an affordable way to significantly enhance your health coverage.",
  },
];

export default function HealthInsurancePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("verified") !== "true") {
      navigate("/get-quote?type=health");
    }
  }, [navigate, searchParams]);

  if (searchParams.get("verified") !== "true") {
    return null;
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-gold text-sm mb-4">
            <Heart className="w-4 h-4" />
            <span>Health Insurance</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Health Insurance Plans — <span className="text-gold">Complete Medical Protection</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mb-6">
            Compare Individual, Family Floater, Critical Illness, and Top-Up plans from IRDAI-approved insurers. All plans displayed neutrally for your informed decision.
          </p>
        </div>
      </section>

      {/* Commission Disclosure */}
      <div className="bg-gold/10 border-b border-gold/30 py-3">
        <div className="container mx-auto px-4 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
          <p className="text-xs text-foreground/70">
            <strong>Commission Disclosure (IRDAI Compliance):</strong> Sankalp Insurance Brokers Pvt. Ltd. may receive brokerage/commission from insurers on policy purchase.
            This does not influence the plans shown. All plans are presented neutrally. Full commission details available on request as per IRDAI Circular No. IRDA/BRK/CIR/CMN/2013.
          </p>
        </div>
      </div>

      {/* Plans */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2">Available Health Insurance Plans</h2>
          <p className="text-muted-foreground text-sm mb-8">Plans listed in no particular order of preference. Claim settlement ratios sourced from IRDAI Annual Reports.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {healthPlans.map((plan) => (
              <Card key={plan.plan} className="border-navy/10 hover:border-gold/40 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 font-medium">{plan.insurer}</p>
                      <CardTitle className="text-lg text-navy">{plan.plan}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs bg-muted text-navy">
                        {plan.type}
                      </Badge>
                    </div>
                    {plan.tag && (
                      <Badge className="bg-gold/20 text-gold-dark border border-gold/40 text-xs">
                        {plan.tag}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3 mb-4 bg-muted rounded-lg p-3">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Sum Insured</p>
                      <p className="text-sm font-bold text-navy">{plan.sumInsured}</p>
                    </div>
                    <div className="text-center border-x border-border">
                      <p className="text-xs text-muted-foreground">Premium</p>
                      <p className="text-sm font-bold text-navy">{plan.premium}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Claim Ratio</p>
                      <p className="text-sm font-bold text-green-600">{plan.claimRatio}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground/70">
                        <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/payment?type=health&planId=${encodeURIComponent(plan.plan)}&insurer=${encodeURIComponent(plan.insurer)}&planName=${encodeURIComponent(plan.plan)}&premium=${encodeURIComponent(plan.premium)}&cover=${encodeURIComponent(plan.sumInsured)}`}>
                    <Button size="sm" className="w-full bg-navy text-primary-foreground hover:bg-navy-light">
                      Get Quote for This Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6 text-center">
            * Premiums are indicative and subject to underwriting. Plans displayed without ranking. Sankalp does not endorse any specific insurer.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto flex items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy text-center">Health Insurance Plans & Policies in India</h2>
            <p className="text-muted-foreground text-md pt-3 text-center">Health insurance is a type of insurance cover that pays for medical and surgical expenses incurred by the insured. It reimburses the expenses incurred due to illness or injury, or directly pays the healthcare provider. Health insurance covers hospitalisation costs, day care procedures, domiciliary expenses, and ambulance charges depending on the policy you choose.</p>
            <p className="text-muted-foreground text-md pt-3 text-center">In India, medical costs have been rising significantly, making health insurance a necessity rather than a luxury. A comprehensive health insurance policy protects you and your family from financial strain during medical emergencies. It ensures access to quality healthcare without worrying about the costs. Moreover, health insurance premiums qualify for tax deductions under Section 80D of the Income Tax Act.</p>
            <p className="text-muted-foreground text-md pt-3 text-center">With cashless treatment facility available at a network of hospitals across the country, health insurance has become more convenient than ever. Whether it is a planned surgery or an emergency hospitalisation, your health insurance takes care of the bills while you focus on recovery.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Types of Health Insurance Plans</h2>
            <p className="text-muted-foreground text-sm max-w-4xl mx-auto">
              There are various types of health insurance plans available in India to suit different needs and budgets:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 gap-x-12">
            {typesOfHealthInsurance.map((types, idx) => (
              <div key={idx} className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy mb-2">{types.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{types.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
