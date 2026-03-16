import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate("/dashboard"), 1200);
  };

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center py-12 bg-background">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-navy" />
            </div>
            <h1 className="text-2xl font-bold text-navy">Customer Login</h1>
            <p className="text-muted-foreground text-sm mt-1">Access your policy dashboard</p>
          </div>

          <Card className="border-navy/10 shadow-navy">
            <CardContent className="p-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Registered Email / Mobile *</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="you@example.com" required className="pl-9" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" required className="pl-9" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-muted-foreground">
                    <input type="checkbox" className="accent-navy" /> Remember me
                  </label>
                  <a href="#" className="text-navy hover:underline">Forgot password?</a>
                </div>
                <Button type="submit" disabled={loading} className="w-full gradient-gold text-navy font-bold border-0 py-3">
                  {loading ? "Signing in…" : "Sign In"}
                </Button>
              </form>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                New customer?{" "}
                <Link to="/get-quote" className="text-navy font-semibold hover:underline">
                  Get a Quote →
                </Link>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-muted-foreground text-center mt-6">
            For assistance: 1800-000-0000 | support@sankalpinsurance.in
          </p>
        </div>
      </div>
    </Layout>
  );
}
