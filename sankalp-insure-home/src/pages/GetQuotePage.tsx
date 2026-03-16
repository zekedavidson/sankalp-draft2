import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Shield, Car, Heart, ArrowRight, ChevronDown } from "lucide-react";
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

export default function GetQuotePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type") || "life";
  const [insType, setInsType] = useState(type);
  const [vehicleType, setVehicleType] = useState("car");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/customer-details?type=${insType}`);
  };

  return (
    <Layout>
      <section className="gradient-hero py-10 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-1">Get Your Insurance Quote</h1>
          <p className="text-primary-foreground/60 text-sm">Takes less than 2 minutes</p>
        </div>
      </section>

      <div className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <StepIndicator current={0} />

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setInsType("life")}
              className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                insType === "life" ? "border-navy bg-navy text-primary-foreground" : "border-border text-foreground/70 hover:border-navy/40"
              }`}
            >
              <Shield className="w-5 h-5" /> Life Insurance
            </button>
            <button
              onClick={() => setInsType("health")}
              className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                insType === "health" ? "border-navy bg-navy text-primary-foreground" : "border-border text-foreground/70 hover:border-navy/40"
              }`}
            >
              <Heart className="w-5 h-5" /> Health Insurance
            </button>
            <button
              onClick={() => setInsType("motor")}
              className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                insType === "motor" ? "border-navy bg-navy text-primary-foreground" : "border-border text-foreground/70 hover:border-navy/40"
              }`}
            >
              <Car className="w-5 h-5" /> Motor Insurance
            </button>
          </div>

          <Card className="border-navy/10 shadow-navy">
            <CardHeader>
              <CardTitle className="text-navy">
                {insType === "life" ? "Life Insurance — Premium Illustration" : insType === "health" ? "Health Insurance — Quote Details" : "Motor Insurance — Quote Details"}
              </CardTitle>
              <p className="text-sm text-muted-foreground">Fill in the details below to get an indicative premium</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {insType === "life" ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input id="dob" type="date" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <select id="gender" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sumAssured">Sum Assured *</Label>
                        <select id="sumAssured" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Amount</option>
                          <option>₹25 Lakhs</option>
                          <option>₹50 Lakhs</option>
                          <option>₹1 Crore</option>
                          <option>₹2 Crore</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="term">Policy Term *</Label>
                        <select id="term" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Term</option>
                          <option>10 Years</option>
                          <option>15 Years</option>
                          <option>20 Years</option>
                          <option>25 Years</option>
                          <option>30 Years</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label>Do you use tobacco/smoke? *</Label>
                      <div className="flex gap-4 mt-2">
                        {["Yes", "No"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                            <input type="radio" name="tobacco" value={opt} required className="accent-navy" /> {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="planType">Plan Type *</Label>
                      <select id="planType" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select Plan Type</option>
                        <option>Term Life</option>
                        <option>Endowment</option>
                        <option>ULIP</option>
                        <option>Whole Life</option>
                      </select>
                    </div>
                  </>
                ) : insType === "health" ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="healthDob">Date of Birth (Eldest Member) *</Label>
                        <Input id="healthDob" type="date" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="healthGender">Gender *</Label>
                        <select id="healthGender" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="members">Number of Members *</Label>
                        <select id="members" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Members</option>
                          <option>Self</option>
                          <option>Self + Spouse</option>
                          <option>Self + Spouse + 1 Child</option>
                          <option>Self + Spouse + 2 Children</option>
                          <option>Family (Parents)</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="healthSum">Sum Insured *</Label>
                        <select id="healthSum" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Amount</option>
                          <option>₹3 Lakhs</option>
                          <option>₹5 Lakhs</option>
                          <option>₹10 Lakhs</option>
                          <option>₹25 Lakhs</option>
                          <option>₹50 Lakhs</option>
                          <option>₹1 Crore</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="healthCity">City *</Label>
                        <Input id="healthCity" placeholder="e.g. Mumbai" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="healthPincode">Pincode *</Label>
                        <Input id="healthPincode" placeholder="e.g. 400001" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label>Any pre-existing diseases? *</Label>
                      <div className="flex gap-4 mt-2">
                        {["Yes", "No"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                            <input type="radio" name="preExisting" value={opt} required className="accent-navy" /> {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="healthPlanType">Plan Type *</Label>
                      <select id="healthPlanType" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select Plan Type</option>
                        <option>Individual Health</option>
                        <option>Family Floater</option>
                        <option>Critical Illness</option>
                        <option>Top-Up / Super Top-Up</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label>Vehicle Type *</Label>
                      <div className="flex gap-3 mt-2">
                        {[{ val: "car", label: "🚗 Private Car" }, { val: "bike", label: "🏍️ Two Wheeler" }].map((v) => (
                          <button
                            key={v.val}
                            type="button"
                            onClick={() => setVehicleType(v.val)}
                            className={`flex-1 p-3 rounded-lg border-2 text-sm font-medium transition-all ${vehicleType === v.val ? "border-navy bg-navy text-primary-foreground" : "border-border hover:border-navy/40"}`}
                          >
                            {v.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="make">Vehicle Make *</Label>
                        <select id="make" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Make</option>
                          {vehicleType === "car" ? (
                            <><option>Maruti Suzuki</option><option>Hyundai</option><option>Tata Motors</option><option>Honda</option><option>Toyota</option></>
                          ) : (
                            <><option>Hero MotoCorp</option><option>Honda</option><option>TVS</option><option>Bajaj</option><option>Royal Enfield</option></>
                          )}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="year">Year of Manufacture *</Label>
                        <select id="year" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">Select Year</option>
                          {[2024,2023,2022,2021,2020,2019,2018].map(y => <option key={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="rto">RTO / Registration City *</Label>
                        <Input id="rto" placeholder="e.g. MH-01 Mumbai" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="prevPolicy">Previous Policy Status</Label>
                        <select id="prevPolicy" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option>Not expired</option>
                          <option>Expired within 90 days</option>
                          <option>Expired more than 90 days</option>
                          <option>New Vehicle</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="coverType">Cover Type *</Label>
                      <select id="coverType" required className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select Cover</option>
                        <option>Comprehensive</option>
                        <option>Third Party Only (Mandatory)</option>
                      </select>
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full gradient-gold text-navy font-bold border-0 py-3">
                  View Matching Plans <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
