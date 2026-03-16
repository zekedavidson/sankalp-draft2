import { useState } from "react";
import { Info, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const lifeComparison = [
  { feature: "Insurer", a: "LIC of India", b: "HDFC Life", c: "SBI Life" },
  { feature: "Plan Name", a: "Jeevan Anand", b: "Click 2 Protect Super", c: "Smart Wealth Builder" },
  { feature: "Plan Type", a: "Endowment", b: "Term Life", c: "ULIP" },
  { feature: "Min Sum Assured", a: "₹1,00,000", b: "₹50,00,000", c: "₹10,00,000" },
  { feature: "Policy Term", a: "15–35 years", b: "10–40 years", c: "10–30 years" },
  { feature: "Indicative Premium", a: "₹1,200/mo", b: "₹650/mo", c: "₹2,500/mo" },
  { feature: "Claim Settlement Ratio*", a: "98.35%", b: "99.10%", c: "97.60%" },
  { feature: "Death Benefit", a: "✅", b: "✅", c: "✅" },
  { feature: "Survival / Maturity Benefit", a: "✅", b: "❌ (without ROP)", c: "✅" },
  { feature: "Investment / Market-Linked", a: "❌", b: "❌", c: "✅" },
  { feature: "Loan Against Policy", a: "✅", b: "❌", c: "After 3 years" },
];

const motorComparison = [
  { feature: "Insurer", a: "New India Assurance", b: "HDFC ERGO", c: "Bajaj Allianz" },
  { feature: "Plan Name", a: "Private Car Comprehensive", b: "Motor Optima", c: "Car Insurance" },
  { feature: "Plan Type", a: "Comprehensive", b: "Comprehensive", c: "Third Party" },
  { feature: "Own Damage Cover", a: "✅", b: "✅", c: "❌" },
  { feature: "Third Party Liability", a: "✅", b: "✅", c: "✅" },
  { feature: "Personal Accident Cover", a: "✅", b: "✅", c: "✅" },
  { feature: "Zero Depreciation Add-on", a: "Available", b: "Available", c: "N/A" },
  { feature: "24×7 Roadside Assistance", a: "Available", b: "✅ (Included)", c: "❌" },
  { feature: "NCB Protection", a: "Available", b: "Available", c: "N/A" },
  { feature: "Indicative Premium", a: "From ₹4,500/yr", b: "From ₹5,200/yr", c: "₹2,094/yr (Fixed)" },
  { feature: "Claim Settlement Ratio*", a: "96.20%", b: "97.70%", c: "97.30%" },
];

const healthComparison = [
  { feature: "Insurer", a: "Star Health", b: "HDFC ERGO", c: "Care Health" },
  { feature: "Plan Name", a: "Comprehensive Health", b: "Optima Secure", c: "Care Advantage" },
  { feature: "Plan Type", a: "Individual / Family", b: "Family Floater", c: "Family Floater" },
  { feature: "Sum Insured", a: "₹5L – ₹1Cr", b: "₹3L – ₹50L", c: "₹3L – ₹6Cr" },
  { feature: "Room Rent Capping", a: "None", b: "None", c: "None" },
  { feature: "Restoration Benefit", a: "100%", b: "100%", c: "Unlimited" },
  { feature: "Day Care Procedures", a: "All Covered", b: "All Covered", c: "All Covered" },
  { feature: "Pre/Post Hospitalization", a: "60/90 Days", b: "60/180 Days", c: "30/60 Days" },
  { feature: "Indicative Premium", a: "₹600/mo", b: "₹750/mo", c: "₹550/mo" },
  { feature: "Claim Settlement Ratio*", a: "67.44%", b: "72.30%", c: "75.10%" },
];

function ComparisonTable({ data }: { data: typeof lifeComparison }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[31.25rem]">
        <thead>
          <tr className="bg-navy text-primary-foreground">
            <th className="text-left p-3 text-sm font-semibold rounded-tl-lg">Feature</th>
            {["Plan A", "Plan B", "Plan C"].map((col) => (
              <th key={col} className="text-center p-3 text-sm font-semibold">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/50" : "bg-background"}>
              <td className="p-3 text-sm font-medium text-foreground/80">{row.feature}</td>
              <td className="p-3 text-sm text-center text-foreground/70">{row.a}</td>
              <td className="p-3 text-sm text-center text-foreground/70">{row.b}</td>
              <td className="p-3 text-sm text-center text-foreground/70">{row.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComparePlansPage() {
  return (
    <Layout>
      <section className="gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Compare Insurance Plans — <span className="text-gold">Side by Side</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            All plans are displayed neutrally, without ranking or preference. Make an informed choice based on your needs.
          </p>
        </div>
      </section>

      {/* Compliance & Commission Disclosure */}
      <div className="bg-gold/10 border-b border-gold/30 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-start gap-4">
          <div className="flex items-start gap-2 flex-1">
            <AlertCircle className="w-5 h-5 text-gold-dark mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground/80">Neutrality & Commission Disclosure</p>
              <p className="text-xs text-foreground/60 mt-0.5">
                Plans shown are not ranked by preference, popularity, or profitability to Sankalp Insurance Brokers. Sankalp may receive brokerage from insurers as per IRDAI Circular IRDA/BRK/CIR/CMN/2013. 
                Commission details are available on written request. This does not influence plan recommendations.
              </p>
            </div>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="flex-shrink-0 border-gold/40 text-gold-dark hover:bg-gold/10">
                <Info className="w-4 h-4 mr-1" /> Commission Info
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-xs p-3">
              <p className="font-semibold mb-1">IRDAI Commission Disclosure</p>
              <p>As per IRDAI (Insurance Brokers) Regulations 2018, Sankalp receives brokerage from insurers on policies issued. Rates vary by product type (typically 5–40% of first year premium for Life; 5–15% for Motor). Full rate card available on request. Customer premium is unaffected.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="life">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-navy">Comparison Matrix</h2>
              <TabsList>
                <TabsTrigger value="life">Life Insurance</TabsTrigger>
                <TabsTrigger value="motor">Motor Insurance</TabsTrigger>
                <TabsTrigger value="health">Health Insurance</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="life">
              <Card className="border-navy/10 overflow-hidden">
                <CardHeader className="bg-muted pb-3">
                  <CardTitle className="text-base text-navy">Life Insurance — Plan Comparison</CardTitle>
                  <p className="text-xs text-muted-foreground">3 representative plans shown. Not ranked by any preference.</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ComparisonTable data={lifeComparison} />
                </CardContent>
              </Card>
              <p className="text-xs text-muted-foreground mt-3">
                * Claim settlement ratios sourced from IRDAI Annual Report FY 2022-23. Premiums are indicative.
              </p>
              <div className="mt-6 flex gap-3">
                <Link to="/get-quote?type=life">
                  <Button className="bg-navy text-primary-foreground hover:bg-navy-light">Get Life Insurance Quote</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="motor">
              <Card className="border-navy/10 overflow-hidden">
                <CardHeader className="bg-muted pb-3">
                  <CardTitle className="text-base text-navy">Motor Insurance — Plan Comparison</CardTitle>
                  <p className="text-xs text-muted-foreground">3 representative plans shown. Third party premiums are IRDAI-mandated fixed rates.</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ComparisonTable data={motorComparison} />
                </CardContent>
              </Card>
              <p className="text-xs text-muted-foreground mt-3">
                * Claim settlement ratios from IRDAI Annual Report FY 2022-23. Comprehensive premiums are indicative.
              </p>
              <div className="mt-6 flex gap-3">
                <Link to="/get-quote?type=motor">
                  <Button className="bg-navy text-primary-foreground hover:bg-navy-light">Get Motor Insurance Quote</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="health">
              <Card className="border-navy/10 overflow-hidden">
                <CardHeader className="bg-muted pb-3">
                  <CardTitle className="text-base text-navy">Health Insurance — Plan Comparison</CardTitle>
                  <p className="text-xs text-muted-foreground">3 representative plans shown. Not ranked by any preference.</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ComparisonTable data={healthComparison} />
                </CardContent>
              </Card>
              <p className="text-xs text-muted-foreground mt-3">
                * Claim settlement ratios sourced from IRDAI Annual Report FY 2022-23. Premiums are indicative.
              </p>
              <div className="mt-6 flex gap-3">
                <Link to="/get-quote?type=health">
                  <Button className="bg-navy text-primary-foreground hover:bg-navy-light">Get Health Insurance Quote</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
