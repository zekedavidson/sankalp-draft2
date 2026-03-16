import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Shield, CheckCircle, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const lifePlans = [
  {
    insurer: "LIC of India",
    plan: "Jeevan Anand",
    type: "Endowment",
    sumAssured: "₹25 Lakhs+",
    term: "15–35 Years",
    premium: "₹1,200/mo",
    settlement: "98.35%",
    features: ["Death + Survival Benefit", "Bonus accrual", "Loan facility"],
    tag: "Most Popular",
  },
  {
    insurer: "HDFC Life",
    plan: "Click 2 Protect Super",
    type: "Term Life",
    sumAssured: "₹50 Lakhs+",
    term: "10–40 Years",
    premium: "₹650/mo",
    settlement: "99.10%",
    features: ["Pure protection", "Return of Premium option", "Critical illness add-on"],
    tag: "High Coverage",
  },
  {
    insurer: "SBI Life",
    plan: "Smart Wealth Builder",
    type: "ULIP",
    sumAssured: "₹10 Lakhs+",
    term: "10–30 Years",
    premium: "₹2,500/mo",
    settlement: "97.60%",
    features: ["Market-linked returns", "Partial withdrawals after 5 yrs", "Fund switching"],
    tag: "Investment + Protection",
  },
  {
    insurer: "ICICI Prudential",
    plan: "iProtect Smart",
    type: "Term Life",
    sumAssured: "₹1 Crore+",
    term: "18–40 Years",
    premium: "₹790/mo",
    settlement: "98.50%",
    features: ["Comprehensive coverage", "Accidental death benefit", "Waiver of premium"],
    tag: null,
  },
];

const typesOfInsurance = [
  {
    title: "Term Insurance",
    desc: "Term insurance is the most simple and basic type of life insurance plan. It is also known as a pure protection plan. A term insurance plan provides a death benefit to the policy's nominee/beneficiary if the life assured dies suddenly during the policy term. This type of plan provides financial security to the family and loved ones in case of the absence of the policyholder.",
  },
  {
    title: "ULIP Plan",
    desc: "The unit-linked investment plan is a combination of an investment and life insurance plan. This plan is specially designed for wealth creation and life protection. This plan invests your money in market-linked funds (stocks, bonds, mutual funds, etc). Generally, ULIP plans are flexible and transparent allowing you to customize your plan as per your needs and requirements.",
  },
  {
    title: "Endowment Life Insurance",
    desc: "Endowment plans are also known as traditional life insurance plans. It is a combination of savings and a life insurance plan. An endowment plan helps the policyholder to save his fund regularly to get the lump sum amount on the maturity of the policy. This maturity benefit is paid to the insured if they survive the entire policy tenure. In case of demise of the life assured during the policy term, the life insurance company provides the sum assured to the beneficiary as the death benefit of the policy.",
  },
  {
    title: "Whole Life Insurance",
    desc: "Whole life insurance remains active till the policyholder is alive (up to 100 years of age). If the policyholder dies during the policy term, the insurer pays the sum assured under whole life insurance to the nominee of the policy. If the policyholder survives till the age of 100 years, the insurer pays the matured endowment coverage to the policyholder in the form of maturity benefit.",
  },
];

export default function LifeInsurancePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("verified") !== "true") {
      navigate("/get-quote?type=life");
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
            <Shield className="w-4 h-4" />
            <span>Life Insurance</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Life Insurance Plans — <span className="text-gold">Protect Your Family's Future</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mb-6">
            Compare Term Life, Endowment, ULIP, and Whole Life plans from IRDAI-approved insurers. All plans displayed neutrally for your informed decision.
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
          <h2 className="text-2xl font-bold text-navy mb-2">Available Life Insurance Plans</h2>
          <p className="text-muted-foreground text-sm mb-8">Plans listed in no particular order of preference. Claim settlement ratios sourced from IRDAI Annual Reports.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {lifePlans.map((plan) => (
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
                      <p className="text-xs text-muted-foreground">Sum Assured</p>
                      <p className="text-sm font-bold text-navy">{plan.sumAssured}</p>
                    </div>
                    <div className="text-center border-x border-border">
                      <p className="text-xs text-muted-foreground">Premium</p>
                      <p className="text-sm font-bold text-navy">{plan.premium}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Claim Ratio</p>
                      <p className="text-sm font-bold text-green-600">{plan.settlement}</p>
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
                  <Link to={`/payment?type=life&planId=${encodeURIComponent(plan.plan)}&insurer=${encodeURIComponent(plan.insurer)}&planName=${encodeURIComponent(plan.plan)}&premium=${encodeURIComponent(plan.premium)}&cover=${encodeURIComponent(plan.sumAssured)}`}>
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
            <h2 className="text-2xl font-bold text-navy text-center">Life Insurance Plans & Policies in India</h2>
            <p className="text-muted-foreground text-md pt-3 text-center">Life is unpredictable, there might be cheerful celebrations or multiple unforeseen circumstances that you can never think of. So better be prepared for the days. In such cases, life insurance can work as a strong financial shield for you and your loved ones with you or in your absence.</p>
            <p className="text-muted-foreground text-md pt-3 text-center">A life insurance plan is a contract between the life insurance company and the policyholder in which the company promises to pay a pre-determined sum amount to the nominee in case of the death of the policyholder or after the maturity of the policy. In return, the assured need to pay a premium amount for a certain time. A life insurance policy ensures the financial security of the family of the assured in case of an unforeseen event. Some life insurance companies in India also offer optional rider coverage, such as accidental riders, critical illness riders, etc.</p>
            <p className="text-muted-foreground text-md pt-3 text-center">The benefits of buying a life insurance policy are more than just providing financial security to the insured's family. A life insurance policy can help individuals to get tax benefits on the life insurance premiums paid and also avails multiple benefits received under the life insurance policy. A life insurance plan can be used as collateral for a loan. Hence, we cannot ignore the importance of life insurance in ensuring the financial security of loved ones.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Types of Life Insurance Plans</h2>
            <p className="text-muted-foreground text-sm max-w-4xl mx-auto">
              There are various types of life insurance available in India. The following are the different types of life insurance plans available in India:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 gap-x-12">
            {typesOfInsurance.map((types, idx) => (
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
