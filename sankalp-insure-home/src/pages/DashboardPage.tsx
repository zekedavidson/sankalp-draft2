import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Car, Download, RefreshCw, Bell, FileText, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const mockPolicies = [
  {
    id: "SIB-20241101",
    type: "Life",
    insurer: "HDFC Life",
    plan: "Click 2 Protect Super",
    premium: "₹7,800/yr",
    cover: "₹50 Lakhs",
    startDate: "01 Nov 2024",
    expiryDate: "31 Oct 2025",
    status: "Active",
    icon: Shield,
  },
  {
    id: "SIB-20240315",
    type: "Motor",
    insurer: "HDFC ERGO",
    plan: "Motor Optima Secure",
    premium: "₹5,200/yr",
    cover: "As per IDV",
    startDate: "15 Mar 2024",
    expiryDate: "14 Mar 2025",
    status: "Expired",
    icon: Car,
  },
  {
    id: "SIB-20241215",
    type: "Motor",
    insurer: "New India Assurance",
    plan: "Private Car Comprehensive",
    premium: "₹4,500/yr",
    cover: "As per IDV",
    startDate: "15 Dec 2024",
    expiryDate: "14 Dec 2025",
    status: "Active",
    icon: Car,
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"all" | "active" | "expired">("all");
  const filtered = mockPolicies.filter((p) =>
    activeTab === "all" ? true : activeTab === "active" ? p.status === "Active" : p.status === "Expired"
  );

  return (
    <Layout>
      <section className="gradient-hero py-10 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gold text-sm font-semibold mb-1">Welcome back,</p>
              <h1 className="text-2xl font-bold">Ramesh Sharma</h1>
              <p className="text-primary-foreground/60 text-sm mt-1">ramesh.sharma@example.com · Member since Jan 2024</p>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button variant="outline" size="sm" className="border-gold/40 text-gold hover:bg-gold hover:text-navy bg-transparent">
                <Bell className="w-4 h-4 mr-1" /> Notifications
              </Button>
              <Link to="/">
                <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground/70 hover:bg-primary/30 bg-transparent">
                  <LogOut className="w-4 h-4 mr-1" /> Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10 bg-background">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Policies", value: "3", sub: "All time" },
              { label: "Active Policies", value: "2", sub: "Currently active" },
              { label: "Claims Filed", value: "0", sub: "No claims" },
              { label: "Renewal Due", value: "1", sub: "Next 30 days" },
            ].map((stat) => (
              <Card key={stat.label} className="border-navy/10 text-center p-4">
                <p className="text-2xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </Card>
            ))}
          </div>

          {/* Renewal Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <Bell className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-amber-800">Renewal Reminder</p>
              <p className="text-sm text-amber-700 mt-0.5">Your Motor insurance policy <strong>SIB-20240315</strong> (HDFC ERGO) expired on 14 Mar 2025. Please renew to avoid driving without cover.</p>
            </div>
            <Link to="/get-quote?type=motor">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white border-0 flex-shrink-0">
                Renew Now
              </Button>
            </Link>
          </div>

          {/* Policies */}
          <Card className="border-navy/10">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <CardTitle className="text-navy">My Policies</CardTitle>
                <div className="flex gap-2">
                  {(["all", "active", "expired"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
                        activeTab === tab ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filtered.map((policy) => (
                  <div key={policy.id} className="border border-border rounded-xl p-4 hover:border-gold/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <policy.icon className="w-5 h-5 text-navy" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-bold text-navy">{policy.plan}</p>
                            <Badge className={policy.status === "Active" ? "bg-green-100 text-green-700 border-green-200" : "bg-red-100 text-red-700 border-red-200"} variant="outline">
                              {policy.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{policy.insurer} · {policy.type} Insurance</p>
                          <div className="flex flex-wrap gap-4 mt-2 text-xs text-foreground/60">
                            <span>Policy No: <strong className="text-foreground">{policy.id}</strong></span>
                            <span>Premium: <strong className="text-foreground">{policy.premium}</strong></span>
                            <span>Cover: <strong className="text-foreground">{policy.cover}</strong></span>
                            <span>Expiry: <strong className={policy.status === "Expired" ? "text-red-600" : "text-foreground"}>{policy.expiryDate}</strong></span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:flex-col sm:items-end">
                        <Button size="sm" variant="outline" className="border-navy/30 text-navy hover:bg-navy hover:text-primary-foreground text-xs">
                          <Download className="w-3.5 h-3.5 mr-1" /> Download
                        </Button>
                        {policy.status === "Expired" && (
                          <Link to={`/get-quote?type=${policy.type.toLowerCase()}`}>
                            <Button size="sm" className="gradient-gold text-navy font-bold border-0 text-xs">
                              <RefreshCw className="w-3.5 h-3.5 mr-1" /> Renew
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <Link to="/get-quote">
              <Card className="border-navy/10 hover:border-gold/40 transition-all cursor-pointer p-4 text-center">
                <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="font-semibold text-navy text-sm">Buy New Policy</p>
              </Card>
            </Link>
            <Link to="/claims">
              <Card className="border-navy/10 hover:border-gold/40 transition-all cursor-pointer p-4 text-center">
                <FileText className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="font-semibold text-navy text-sm">File a Claim</p>
              </Card>
            </Link>
            <Link to="/grievance">
              <Card className="border-navy/10 hover:border-gold/40 transition-all cursor-pointer p-4 text-center">
                <User className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="font-semibold text-navy text-sm">Raise Grievance</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
