import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LifeInsurancePage from "./pages/LifeInsurancePage";
import HealthInsurancePage from "./pages/HealthInsurancePage";
import MotorInsurancePage from "./pages/MotorInsurancePage";
import ComparePlansPage from "./pages/ComparePlansPage";
import ClaimsPage from "./pages/ClaimsPage";
import GrievancePage from "./pages/GrievancePage";
import GetQuotePage from "./pages/GetQuotePage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import SelectPlanPage from "./pages/SelectPlanPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/life-insurance" element={<LifeInsurancePage />} />
          <Route path="/health-insurance" element={<HealthInsurancePage />} />
          <Route path="/motor-insurance" element={<MotorInsurancePage />} />
          <Route path="/compare-plans" element={<ComparePlansPage />} />
          <Route path="/claims" element={<ClaimsPage />} />
          <Route path="/grievance" element={<GrievancePage />} />

          {/* Booking journey */}
          <Route path="/get-quote" element={<GetQuotePage />} />
          <Route path="/customer-details" element={<CustomerDetailsPage />} />
          <Route path="/select-plan" element={<SelectPlanPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />

          {/* Dashboard & Auth */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
