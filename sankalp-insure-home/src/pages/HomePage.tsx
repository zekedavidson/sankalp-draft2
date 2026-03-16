import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Car, CheckCircle, Lock, CreditCard, Award, ArrowRight, Star, Users, FileText, Heart, TrendingUp, Baby, PiggyBank, GraduationCap, Umbrella, BarChart2, Bike, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const trustBadges = [
  { icon: Lock, label: "SSL Encrypted", sub: "256-bit Security" },
  { icon: CreditCard, label: "PCI-DSS Compliant", sub: "Secure Payments" },
  { icon: Award, label: "IRDAI Licensed", sub: "Broker Reg. No. XXX" },
  { icon: Users, label: "10,000+ Policies", sub: "Issued & Counting" },
];

const quickLinks = [
  { icon: Shield, label: "Term", sub: "Insurance", link: "/get-quote?type=life" },
  { icon: Heart, label: "Whole Life", sub: "Plans", link: "/get-quote?type=life" },
  { icon: TrendingUp, label: "ULIP", sub: "Plans", badge: "Growth", badgeColor: "bg-gold text-navy", link: "/get-quote?type=life" },
  { icon: Baby, label: "Child", sub: "Plans", link: "/get-quote?type=life" },
  { icon: PiggyBank, label: "Savings", sub: "Plans", link: "/get-quote?type=life" },
  { icon: Umbrella, label: "Endowment", sub: "Plans", link: "/get-quote?type=life" },
  { icon: Car, label: "Motor", sub: "Insurance", badge: "NEW", badgeColor: "bg-gold text-navy", link: "/get-quote?type=motor" },
  { icon: BarChart2, label: "Compare", sub: "Plans", link: "/compare-plans" },
];

const whyUs = [
  { icon: Shield, title: "Licensed Broker", desc: "IRDAI registered insurance broker acting in your best interest, not the insurer's." },
  { icon: FileText, title: "Neutral Comparison", desc: "Unbiased plan comparisons with full commission disclosure as per IRDAI norms." },
  { icon: CheckCircle, title: "End-to-End Support", desc: "From quotes to claims, we assist you at every step of your insurance journey." },
];

const reviews = [
  { rating: 5, name: "Rahul Sharma", role: "Business Owner", text: "Excellent service! The team helped me find the perfect health insurance for my family within minutes." },
  { rating: 5, name: "Priya Desai", role: "IT Professional", text: "Sankalp Insurance made claiming my car insurance incredibly smooth and hassle-free. Highly recommended!" },
  { rating: 5, name: "Amit Patel", role: "Frequent Traveler", text: "Great comparison tools. It was so easy to pick the right term life policy. Their transparent disclosure gives peace of mind." },
];

const faqCategories = ["General", "Car", "Bike", "Health", "Life"];

const faqs: Record<string, { q: string; a: string }[]> = {
  "General": [
    { q: "What do you mean by Insurance?", a: "Insurance is a contract which is presented as a policy to be used as a risk management tool to ensure financial protection at the time of crisis. Insurance helps an individual to ensure financial protection against losses that may arise during an unforeseen event. An insurance policy is a contract between an individual (policyholder) and an insurance company (Insurance provider), under which, the individual makes regular payments known as premiums to the insurance company which in return pays the sum assured in case an unforeseen event such as demise of the policyholder, accident, damage to the vehicles or other possessions." },
    { q: "Why is insurance important?", a: "Unfortunate events like accidents, illnesses, and natural disasters come without any warning and thus it is necessary for you to keep yourself and your loved ones shielded against such unforeseen happenings. One of the best and simplest ways of keeping yourself secured against these contingent events which may cause a financial loss is buying an insurance policy." },
    { q: "How Does Insurance Work?", a: "As mentioned earlier, insurance is a legal contract between the policyholder and the insurance provider. The insurance policy carries all the details about the aspects and conditions under which the insurance provider will pay out the insurance amount to the policyholder or their nominee in case an unforeseen event occurs. Insurance is a financial tool which helps in ensuring financial protection of yourself and your family. Generally the person who has purchased the policy also known as policyholder has to pay premiums for the coverage available under the insurance policy. Any person can seek insurance from an insurance company." },
    { q: "What are the types of insurance available?", a: "The main types include Life, Health, Motor, Travel, and Property insurance." },
    { q: "How to make a claim in insurance?", a: "To make a claim, inform your insurer immediately, fill out the claim form, and submit the required documents." },
  ],
  "Car": [
    { q: "What is a car insurance policy?", a: "It is an agreement between an insurance company and a car owner under which the former provides an insurance cover to the policyholder for financial damages incurred by his/her car in unforeseen events. Depending on the coverage, there are three types of car insurance plans - third party , standalone own-damage and comprehensive insurance. It's renewal online process provides instant e-Policy." },
    { q: "Why should I buy car insurance?", a: "There are a number of benefits of owning four wheeler insurance. Firstly, it helps you meet the legal requirement of owning at least a third party cover. Moreover, an insurance policy helps you meet financial liabilities that may arise towards a third party or own damages to your car due to a road accident or any other unfortunate event." },
    { q: "Is car insurance mandatory in India?", a: "As per the Indian Motor Tariff, every car owner in the country is compulsorily required to own at least a third party cover. Absence of a valid plan is a punishable offence which attracts a fine of Rs. 2,000 and/or imprisonment of up to 3 months for the first offence." },
    { q: "How is car insurance premium calculated?", a: "The premium price of third-party car insurance plans is determined by the IRDAI, whereas the premium for standalone own-damage and comprehensive plans vary from insurance company to insurance company." },
    { q: "Can car insurance be transferred to the new owner at the purchase of a second hand four wheeler?", a: "Yes, the four wheeler insurance can be transferred from the old owner to the new owner in case the sale of a second-hand car. As per the Indian Motor Tariff, the policy transfer should be completed within 14 days from the car’s purchase date." },
  ],
  "Bike": [
    { q: "What is a two wheeler insurance policy?", a: "A two wheeler insurance policy is an agreement between an insurance company and a bike owner wherein the insurance provider promises to cover any damage or loss sustained by the insured bike due to an accident, theft, fire, etc., based on the opted policy. Generally, the contract between insured and insurer is of a year which should be renewed every year." },
    { q: "Why should I purchase a two wheeler insurance policy?", a: "No matter which bike you own, you need to comply with some laws to ride it. To carry a bike insurance policy is the most important rule to drive a motorcycle / scooter as you need to adhere to the legal requirement of carrying at least a third party cover. Besides this, a policy also covers your financial liabilities which you may incur towards a third party or own damages sustained by your bike due to an accident or any unfortunate incident." },
    { q: "What are the different types of bike insurance plan?", a: "There are three types of two wheeler insurance plans such as third party two wheeler plan, standalone own damage, and comprehensive insurance plan." },
    { q: "What if my bike insurance policy gets expired?", a: "Every two-wheeler insurance policy has a date of expiry before which you should renew it to continue to avail it. However, if you fail to renew the policy on time, you still can renew it within the 90 days grace period from the expiry date. However, bike insurance renewal process is not possible after this period. As a result, you will have to buy a new insurance policy in that case." },
    { q: "Which company provides the best insurance for bike in India?", a: "There are numerous parameters to select an insurance company to insure your bike. The Claim Settlement Ratio (CSR) is one of the most important parameters to gauge the efficiency of an insurance provider. The CSR is a ratio of claims settled by the insurance company out of the total claims received by the insurer during the financial year. In the financial year 2019-20, the companies with the highest claim settlement ratio are IFFCO Tokio General Insurance (95.30%), Royal Sundaram General Insurance (92.66%), and Oriental Insurance Company (91.76%) with which the IFFCO Tokio can be considered the best two wheeler insurance company in India for the year 2023." },
  ],
  "Life": [
    { q: "What is Life Insurance ?", a: "Life insurance is an insurance cover which provides a sum assured to the family of the assured in the event of sudden death. The plan also offers a survival benefit to the assured if he/she survives the policy term." },
    { q: "What are the factors that affect the calculation of a life insurance plan premium?", a: "Life insurance premium depends on numerous factors including policyholder's age, sum assured, gender, lifestyle, job, medical history, type of policy, tenure, and riders (if any). " },
    { q: "Why should I purchase life insurance?", a: "Life insurance helps you attain financial security that ensures your family’s life goals are not affected. Life insurance also offers tax benefits on the premiums that a policyholder pays for their life insurance. Moreover, life insurance plans are affordable and the policyholder can purchase additional benefits by purchasing a rider to enhance their life cover." },
    { q: "Which is the best life insurance plan?", a: "Different life insurance plans have different features and advantages. Thus, the definition of the best plan varies from individual to individual. The best life insurance plan is the one which best meets your requirements and budget. However, among all the different types of life insurance plans, the most preferred type of life insurance plan is Term Insurance Plan because it provides high coverage at nominal premium." },
    { q: "What are the factors which I should consider before buying a life insurance policy?", a: "There are many factors that you should consider while purchasing a life insurance plan. These includes your financial goals, income, existing liabilities, and daily expenses. After analysing all these factors, you can compare different types of life insurance plans like term plans, whole life insurance, child plans, retirement plans, and others to buy the one that suits your needs. " },

  ],
  "Health": [
    { q: "What is Health Insurance?", a: "Health insurance is a type of insurance that covers medical expenses incurred due to illnesses, injuries, or hospitalization. It reimburses the policyholder for medical costs or provides cashless treatment at network hospitals. Health insurance policies cover hospitalization charges, day care procedures, pre and post-hospitalization expenses, and ambulance charges depending on the plan." },
    { q: "Why is Health Insurance important?", a: "Medical costs in India have been rising significantly year on year. A single hospitalization can cost lakhs of rupees and wipe out your savings. Health insurance safeguards you against such financial shocks and ensures you and your family get access to quality healthcare without worrying about the costs. Additionally, health insurance premiums qualify for tax deductions under Section 80D of the Income Tax Act." },
    { q: "What are the types of Health Insurance plans?", a: "The main types of health insurance plans include Individual Health Insurance, Family Floater Plans, Critical Illness Cover, Top-Up and Super Top-Up Plans, Senior Citizen Health Insurance, and Group Health Insurance. Each type caters to different needs and budgets." },
    { q: "What is cashless vs reimbursement claim?", a: "In a cashless claim, you get treated at a network hospital and the insurer settles the bill directly with the hospital. You don't need to pay upfront (except for non-covered items). In a reimbursement claim, you pay the hospital bills first and then submit the claim documents to the insurer to get reimbursed. Cashless claims are more convenient and faster." },
    { q: "What is a waiting period in Health Insurance?", a: "A waiting period is the time duration after purchasing a policy during which certain illnesses or treatments are not covered. Most health insurance plans have a 30-day initial waiting period for non-accident claims, a 2-year waiting period for specific diseases, and a 4-year waiting period for pre-existing diseases. Accident-related hospitalizations are typically covered from day one." },
  ]
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("General");
  const currentFaqs = faqs[activeTab] || faqs["General"];

  return (
    <Layout>
      {/* Hero Bento Grid */}
      <section className="bg-background pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-[87.5rem]">

          {/* Main Headline */}
          <div className="mb-6 lg:mb-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy mb-3">
              Protect What Matters Most
            </h1>
            <p className="text-xl lg:text-2xl font-semibold text-gold-dark">
              Insurance Made Simple
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">

            {/* Left Card: Life Insurance (Spans 4 columns) */}
            <Link to="/get-quote?type=life" className="col-span-1 lg:col-span-4 bg-primary/10 rounded-[2rem] p-6 lg:p-10 flex flex-col justify-between relative group shadow-md shadow-navy/5 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-1 transition-all duration-300 border border-white/60 hover:border-primary/20 overflow-hidden min-h-[40vh] lg:min-h-[60vh]">
              <div className="z-10 relative">
                <h2 className="text-2xl lg:text-[2.2rem] font-bold text-navy mb-3 leading-tight">Protect your family with our<br />100% pure life insurance</h2>
                <p className="text-sm lg:text-base text-navy/70 mb-6">Not mixed with any returns or jargons</p>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                  <span className="bg-background rounded-full p-0.5 flex items-center justify-center"><CheckCircle className="w-3.5 h-3.5" /></span>
                  Coverage from ₹25 L to ₹100 Cr
                </div>
              </div>
              <Shield className="absolute -bottom-[2.5rem] -right-[2rem] w-[40vw] h-[40vw] sm:w-[15rem] sm:h-[15rem] lg:w-[16rem] lg:h-[16rem] text-primary/5 group-hover:scale-105 transition-transform duration-700 pointer-events-none" strokeWidth={0.5} />
              <div className="mt-20 z-10 pt-8">
                <div className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            </Link>

            {/* Right Side Cards (Spans 8 columns) */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-4 lg:gap-6">

              {/* Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 flex-1">
                {/* Car Insurance */}
                <Link to="/get-quote?type=motor" className="bg-card rounded-[2rem] p-6 lg:p-7 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 border border-white/60 hover:border-primary/15 overflow-hidden">
                  <div className="z-10 relative">
                    <h3 className="text-xl lg:text-2xl font-bold text-navy mb-2">Car insurance</h3>
                    <p className="text-sm text-muted-foreground mb-4"><span className="text-gold-dark font-semibold">Renew your car insurance</span> with<br />zero commission</p>
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-semibold">
                      <span className="bg-background rounded-full p-0.5 w-4 h-4 flex items-center justify-center"><CheckCircle className="w-3 h-3" /></span>
                      Starting at just ₹2094*
                    </div>
                  </div>
                  <Car className="absolute -bottom-[1rem] -right-[1rem] w-[25vw] h-[25vw] md:w-[8rem] md:h-[8rem] text-navy/5 group-hover:text-navy/10 group-hover:-translate-x-2 transition-all duration-700 pointer-events-none" strokeWidth={1} />
                  <div className="mt-16 z-10">
                    <div className="w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>

                {/* Brand New Car */}
                <Link to="/get-quote?type=motor" className="bg-card rounded-[2rem] p-6 lg:p-7 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 border border-white/60 hover:border-primary/15 overflow-hidden">
                  <div className="z-10 relative">
                    <h3 className="text-xl lg:text-2xl font-bold text-navy mb-2 leading-tight">Insuring a brand<br />new car?</h3>
                    <p className="text-sm text-muted-foreground mb-4"><span className="text-gold-dark font-semibold">Save up to ₹36,000</span> by insuring your<br />brand new car with us</p>
                  </div>
                  <Car className="absolute -bottom-[1rem] -right-[1rem] w-[25vw] h-[25vw] md:w-[8rem] md:h-[8rem] text-gold/10 group-hover:text-gold/20 group-hover:-translate-x-2 transition-all duration-700 pointer-events-none" strokeWidth={1} />
                  <div className="mt-16 z-10">
                    <div className="w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>

                {/* Bike Insurance */}
                <Link to="/get-quote?type=motor" className="bg-card rounded-[2rem] p-6 lg:p-7 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 border border-white/60 hover:border-primary/15 overflow-hidden">
                  <div className="z-10 relative">
                    <h3 className="text-xl lg:text-2xl font-bold text-navy mb-2">Bike insurance</h3>
                    <p className="text-sm text-muted-foreground mb-4">Insure your bike or scooter in<br />just 1 minute</p>
                  </div>
                  <Bike className="absolute -bottom-[1rem] -right-[1rem] w-[22vw] h-[22vw] md:w-[7rem] md:h-[7rem] text-navy/5 group-hover:text-navy/10 group-hover:-translate-x-2 transition-all duration-700 pointer-events-none" strokeWidth={1} />
                  <div className="mt-16 z-10">
                    <div className="w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 flex-1">
                {/* Health Insurance (Spans 2 columns) */}
                <Link to="/get-quote?type=health" className="md:col-span-2 bg-card rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 border border-white/60 hover:border-primary/15 overflow-hidden">
                  <div className="z-10 relative max-w-sm">
                    <h3 className="text-2xl lg:text-[1.75rem] font-bold text-navy mb-3">Health insurance</h3>
                    <p className="text-sm lg:text-base text-muted-foreground mb-4"><span className="text-gold-dark font-semibold">100% hospital bill payments</span> from syringes to surgeries.<br />No surprises.</p>
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                      <span className="bg-background rounded-full p-0.5 flex items-center justify-center"><CheckCircle className="w-4 h-4" /></span>
                      From ₹600/month
                    </div>
                  </div>
                  <Heart className="absolute -bottom-[2rem] right-0 w-[35vw] h-[35vw] md:w-[11rem] md:h-[11rem] text-destructive/5 group-hover:text-destructive/10 group-hover:scale-105 transition-all duration-700 pointer-events-none" strokeWidth={1} />
                  <div className="mt-16 z-10">
                    <div className="w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>

                {/* Travel Insurance */}
                <Link to="/" className="bg-card rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 border border-white/60 hover:border-primary/15 overflow-hidden">
                  <div className="z-10 relative">
                    <h3 className="text-xl lg:text-[1.75rem] font-bold text-navy mb-3">Traveling soon?</h3>
                    <p className="text-sm text-muted-foreground mb-4"><span className="text-gold-dark font-semibold">Travel insurance</span> with emergency<br />medical coverage in 150+ countries</p>
                  </div>
                  <Plane className="absolute -bottom-[1rem] -right-[1rem] w-[25vw] h-[25vw] md:w-[8rem] md:h-[8rem] text-navy/5 group-hover:text-navy/10 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-700 pointer-events-none" strokeWidth={1} />
                  <div className="mt-16 z-10">
                    <div className="w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>

          <div className="text-center mt-6 text-xs text-muted-foreground font-medium">
            UID: 6484 | ARN: L0110 | T&C apply
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Insurance Products We Offer</h2>
            <p className="text-muted-foreground">Explore Life, Health, and Motor Insurance plans from leading insurers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Life Insurance Card */}
            <Card className="border-2 border-navy/10 hover:border-gold/50 transition-all group shadow-navy overflow-hidden">
              <div className="gradient-hero p-6">
                <Shield className="w-10 h-10 text-gold mb-3" />
                <h3 className="text-2xl font-bold text-primary-foreground">Life Insurance</h3>
                <p className="text-primary-foreground/70 text-sm mt-2">Secure your family's future</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  {["Term Life Insurance", "Whole Life Plans", "ULIP Policies", "Endowment Plans"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/get-quote?type=life">
                  <Button className="w-full bg-navy text-primary-foreground hover:bg-navy-light">
                    Explore Life Plans <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Health Insurance Card */}
            <Card className="border-2 border-navy/10 hover:border-gold/50 transition-all group shadow-navy overflow-hidden">
              <div className="gradient-hero p-6">
                <Heart className="w-10 h-10 text-gold mb-3" />
                <h3 className="text-2xl font-bold text-primary-foreground">Health Insurance</h3>
                <p className="text-primary-foreground/70 text-sm mt-2">Complete medical protection</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  {["Individual Health Plans", "Family Floater Plans", "Critical Illness Cover", "Top-Up Plans"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/get-quote?type=health">
                  <Button className="w-full bg-navy text-primary-foreground hover:bg-navy-light">
                    Explore Health Plans <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Motor Insurance Card */}
            <Card className="border-2 border-navy/10 hover:border-gold/50 transition-all group shadow-navy overflow-hidden">
              <div className="gradient-hero p-6">
                <Car className="w-10 h-10 text-gold mb-3" />
                <h3 className="text-2xl font-bold text-primary-foreground">Motor Insurance</h3>
                <p className="text-primary-foreground/70 text-sm mt-2">Drive with confidence</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  {["Private Car – Comprehensive", "Private Car – Third Party", "Two Wheeler – Comprehensive", "Two Wheeler – Third Party"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/get-quote?type=motor">
                  <Button className="w-full bg-navy text-primary-foreground hover:bg-navy-light">
                    Explore Motor Plans <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Why Choose Sankalp?</h2>
            <p className="text-muted-foreground">We work for you, not the insurance company</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyUs.map((item) => (
              <Card key={item.title} className="text-center p-6 border-navy/10 hover:border-gold/40 transition-all">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold-dark" />
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Speaks */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Customer Speaks</h2>
            <p className="text-muted-foreground">Hear what our satisfied policyholders have to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 border-navy/10 hover:border-gold/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-gold fill-gold" : "text-muted"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic mb-6">"{review.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Frequently Asked Questions About Insurance</h2>
            <p className="text-muted-foreground">Know why did they choose Sankalp</p>
          </div>

          <div className="flex overflow-x-auto border-b border-border/50 mb-8 sm:justify-center">
            <div className="flex gap-x-6 px-1">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`whitespace-nowrap pb-3 text-sm sm:text-base font-medium transition-all relative -mb-[1px] ${activeTab === cat
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {currentFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-2xl px-2 sm:px-6 bg-card data-[state=open]:shadow-md transition-all border-b"
              >
                <AccordionTrigger className="hover:no-underline py-4 sm:py-5 text-left text-sm sm:text-base font-bold text-foreground">
                  <div className="flex flex-1 items-center gap-4 pr-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground text-sm font-semibold border">
                      {index + 1}
                    </span>
                    <span className="text-left leading-tight">{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-[3.25rem] pr-4 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-3">Ready to Secure Your Future?</h2>
          <p className="text-primary-foreground/70 mb-6">Get personalised insurance quotes in minutes. No spam. No obligation.</p>
          <Link to="/get-quote">
            <Button size="lg" className="gradient-gold text-navy font-bold border-0 px-10">
              Start Your Free Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
