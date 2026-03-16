import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, Download, Mail, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

function generatePolicyNo() {
  return `SIB-${Date.now().toString().slice(-8)}`;
}

export default function ConfirmationPage() {
  const [searchParams] = useSearchParams();
  const insurer = searchParams.get("insurer") || "HDFC Life";
  const planName = searchParams.get("planName") || "Click 2 Protect Super";
  const premium = searchParams.get("premium") || "₹7,800/yr";
  const cover = searchParams.get("cover") || "₹50 Lakhs";
  const policyNo = generatePolicyNo();
  const today = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-navy mb-2">🎉 Policy Issued Successfully!</h1>
          <p className="text-muted-foreground mb-8">
            Congratulations! Your insurance policy has been issued by <strong>{insurer}</strong>.
          </p>

          {/* Policy Summary */}
          <Card className="border-2 border-green-200 bg-green-50/50 mb-6 text-left">
            <CardContent className="p-6 space-y-3">
              <h2 className="font-bold text-navy text-lg mb-4 text-center">Policy Summary</h2>
              {[
                { label: "Policy Number", value: policyNo, bold: true },
                { label: "Insurer", value: insurer, bold: false },
                { label: "Plan Name", value: planName, bold: false },
                { label: "Coverage / Sum Insured", value: cover, bold: false },
                { label: "Annual Premium Paid", value: premium, bold: true },
                { label: "Policy Start Date", value: today, bold: false },
                { label: "Status", value: "✅ Active", bold: true },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm text-foreground/60">{item.label}</span>
                  <span className={`text-sm ${item.bold ? "font-bold text-navy" : "text-foreground"}`}>{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Email delivery note */}
          <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6 text-left">
            <Mail className="w-5 h-5 text-gold-dark mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-navy text-sm">Policy Documents via Email</p>
              <p className="text-sm text-muted-foreground mt-1">
                Your policy documents, including the policy bond, schedule, and terms booklet, will be delivered to your registered email address within <strong>24–48 hours</strong>. Please check your inbox (and spam folder).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="gradient-gold text-navy font-bold border-0">
              <Download className="w-4 h-4 mr-2" />
              Download Policy (Mock)
            </Button>
            <Link to="/dashboard">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground w-full sm:w-auto">
                Go to My Dashboard
              </Button>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Policy No: <strong>{policyNo}</strong> · Issued via Sankalp Insurance Brokers Pvt. Ltd. (IRDAI Broker Reg. No.: XXX) on behalf of {insurer}.
            For any queries, contact us at support@sankalpinsurance.in or call 1800-000-0000.
          </p>
        </div>
      </div>
    </Layout>
  );
}
