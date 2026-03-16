import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Car, CheckCircle, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";

const carPlans = [
  {
    insurer: "New India Assurance",
    plan: "Private Car Comprehensive",
    type: "Comprehensive",
    idv: "As per vehicle value",
    premium: "From ₹4,500/yr",
    settlement: "96.20%",
    features: ["Own damage cover", "Third party liability", "Personal accident cover", "Zero depreciation add-on available"],
  },
  {
    insurer: "HDFC ERGO",
    plan: "Motor Optima Secure",
    type: "Comprehensive",
    idv: "As per vehicle value",
    premium: "From ₹5,200/yr",
    settlement: "97.70%",
    features: ["Bumper-to-bumper cover", "24×7 roadside assistance", "NCB protection", "Engine protect add-on"],
  },
  {
    insurer: "Bajaj Allianz",
    plan: "Car Insurance (Third Party)",
    type: "Third Party",
    idv: "Not applicable",
    premium: "₹2,094/yr (Fixed)",
    settlement: "97.30%",
    features: ["Mandatory by law", "Third party injury/death", "Third party property damage"],
  },
  {
    insurer: "ICICI Lombard",
    plan: "Complete Cover",
    type: "Comprehensive",
    idv: "As per vehicle value",
    premium: "From ₹4,800/yr",
    settlement: "96.10%",
    features: ["Comprehensive cover", "Instant policy issuance", "Cashless network garages", "Key and lock replacement"],
  },
];

const twoPlan = [
  {
    insurer: "New India Assurance",
    plan: "Two Wheeler Comprehensive",
    type: "Comprehensive",
    idv: "As per vehicle value",
    premium: "From ₹1,200/yr",
    settlement: "96.20%",
    features: ["Own damage", "Third party cover", "Personal accident – Owner/Driver"],
  },
  {
    insurer: "Bajaj Allianz",
    plan: "Two Wheeler Third Party",
    type: "Third Party",
    idv: "Not applicable",
    premium: "₹714/yr (Fixed)",
    settlement: "97.30%",
    features: ["Mandatory coverage", "Third party bodily injury", "Third party property damage"],
  },
  {
    insurer: "HDFC ERGO",
    plan: "Two Wheeler Package",
    type: "Comprehensive",
    idv: "As per vehicle value",
    premium: "From ₹1,500/yr",
    settlement: "97.70%",
    features: ["Comprehensive cover", "Zero dep option", "Pillion rider cover add-on"],
  },
];

const reasonsToBuy = [
  {
    title: "Legal Compliance",
    desc: "As mandated by the Motor Vehicles Act, 1988, having a valid motor insurance policy is a legal requirement in India. Driving a vehicle on roads without motor insurance can result in fines, legal penalties, and even vehicle confiscation.",
  },
  {
    title: "Financial Protection",
    desc: "Motor insurance can also provide essential financial protection against various risks, including accidents, theft, vandalism, etc. In the event of an unfortunate incident, the insurance cover helps mitigate financial losses, ensuring that you don't have to bear the entire burden of repair costs or compensation payments out of pocket.",
  },
  {
    title: "Third-Party Liability Coverage",
    desc: "Third-party liability coverage in motor insurance policies protects you from legal liabilities arising from bodily injury or death caused to third parties by your vehicle. Without this type of auto insurance, you could be held personally liable for substantial compensation amounts, potentially leading to financial ruin.",
  },
  {
    title: "Protection for Your Vehicle",
    desc: "An Own Damage (OD) motor insurance policy can cover your vehicle against damages resulting from accidents, theft, natural disasters, and similar unforeseen events. Whether it's repairing dents and scratches or replacing stolen parts, having comprehensive insurance coverage ensures your vehicle remains roadworthy.",
  },
  {
    title: "Personal Accident Cover",
    desc: "You can also buy motor insurance policies that include personal accident cover for the owner-driver. These plans provide financial compensation in the event of accidental death or disability resulting from a road accident. Knowing that you and your loved ones are financially protected against unforeseen accidents can offer peace of mind.",
  },
  {
    title: "Optional Add-On Covers",
    desc: "Insurers offer a range of optional add-on covers you can purchase to enhance insurance protection. These add-ons may include zero depreciation cover, engine protection, roadside assistance, and more, providing additional benefits tailored to your specific needs and preferences.",
  },
];

function PlanCard({ plan }: { plan: typeof carPlans[0] }) {
  return (
    <Card className="border-navy/10 hover:border-gold/40 transition-all">
      <CardHeader className="pb-3">
        <p className="text-xs text-muted-foreground font-medium">{plan.insurer}</p>
        <CardTitle className="text-lg text-navy">{plan.plan}</CardTitle>
        <Badge variant="secondary" className="w-fit text-xs bg-muted text-navy">{plan.type}</Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3 mb-4 bg-muted rounded-lg p-3">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">IDV</p>
            <p className="text-xs font-bold text-navy">{plan.idv}</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="text-xs text-muted-foreground">Premium</p>
            <p className="text-xs font-bold text-navy">{plan.premium}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Claim Ratio</p>
            <p className="text-xs font-bold text-green-600">{plan.settlement}</p>
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
        <Link to={`/payment?type=motor&planId=${encodeURIComponent(plan.plan)}&insurer=${encodeURIComponent(plan.insurer)}&planName=${encodeURIComponent(plan.plan)}&premium=${encodeURIComponent(plan.premium)}&cover=${encodeURIComponent(plan.idv)}`}>
          <Button size="sm" className="w-full bg-navy text-primary-foreground hover:bg-navy-light">
            Get Quote for This Plan
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function MotorInsurancePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("verified") !== "true") {
      navigate("/get-quote?type=motor");
    }
  }, [navigate, searchParams]);

  if (searchParams.get("verified") !== "true") {
    return null;
  }

  return (
    <Layout>
      <section className="gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-gold text-sm mb-4">
            <Car className="w-4 h-4" />
            <span>Motor Insurance</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Motor Insurance Plans — <span className="text-gold">Drive with Confidence</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mb-6">
            Compare Private Car and Two Wheeler insurance plans from IRDAI-approved insurers. Third party insurance is mandatory by law.
          </p>
        </div>
      </section>

      <div className="bg-gold/10 border-b border-gold/30 py-3">
        <div className="container mx-auto px-4 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
          <p className="text-xs text-foreground/70">
            <strong>Commission Disclosure:</strong> Sankalp Insurance Brokers may receive brokerage from insurers. Plans are displayed in no particular order of preference or ranking.
            Full commission details available on request as per IRDAI norms.
          </p>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="car">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-navy">Available Motor Plans</h2>
                <p className="text-muted-foreground text-sm">Plans listed without ranking. Claim ratios from IRDAI Annual Report.</p>
              </div>
              <TabsList className="bg-muted">
                <TabsTrigger value="car">🚗 Private Car</TabsTrigger>
                <TabsTrigger value="bike">🏍️ Two Wheeler</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="car">
              <div className="grid md:grid-cols-2 gap-6">
                {carPlans.map((p) => <PlanCard key={p.plan} plan={p} />)}
              </div>
            </TabsContent>
            <TabsContent value="bike">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {twoPlan.map((p) => <PlanCard key={p.plan} plan={p} />)}
              </div>
            </TabsContent>
          </Tabs>
          <p className="text-xs text-muted-foreground mt-6 text-center">
            * Third Party premiums are fixed by IRDAI. Comprehensive premiums are indicative and subject to vehicle details and underwriting.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto flex items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy text-center">What is a Motor Insurance Policy?</h2>
            <p className="text-muted-foreground text-md pt-3 text-center">A motor insurance policy, also known as vehicle insurance, is a contractual agreement between an insurance provider and a vehicle owner (you) wherein the insurer agrees to provide financial protection against specified risks in exchange for a premium. In India, it is mandatory for all vehicles to have at least a basic level of motor insurance coverage (third-party) under the Motor Vehicles Act, 1988.</p>
            <p className="text-muted-foreground text-md pt-3 text-center">Knowing the finer details of motor insurance policies can help you select the right coverage tailored to your needs and circumstances. You can ensure adequate protection for your vehicle and financial security in the face of unforeseen events on the road.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Why Should You Buy a Motor Vehicle Insurance Policy?</h2>
            <p className="text-muted-foreground text-sm max-w-4xl mx-auto">
              While buying a motor insurance policy is a legal obligation, it is also a practical necessity and a wise financial decision. Here are several compelling reasons why you should consider purchasing a motor insurance policy:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 gap-x-12">
            {reasonsToBuy.map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
