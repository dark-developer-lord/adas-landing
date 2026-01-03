"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Check, Zap, Building2, Globe, Users, Activity, Database } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

const subscriptionPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 299,
    billing: "per month",
    description: "Perfect for small teams getting started with drone automation.",
    features: [
      "Up to 5 drones",
      "100 flight hours/month",
      "Basic AI analytics",
      "Cloud storage (100GB)",
      "Email support",
      "Mobile app access",
    ],
    icon: Zap,
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: 799,
    billing: "per month",
    description: "Advanced features for growing operations.",
    features: [
      "Up to 25 drones",
      "500 flight hours/month",
      "Advanced AI analytics",
      "Cloud storage (500GB)",
      "Priority support (24/7)",
      "API access",
      "Custom integrations",
      "Team collaboration tools",
    ],
    icon: Building2,
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 2499,
    billing: "per month",
    description: "Unlimited scale for enterprise operations.",
    features: [
      "Unlimited drones",
      "Unlimited flight hours",
      "Full AI suite + custom models",
      "Cloud storage (unlimited)",
      "Dedicated support manager",
      "White-label options",
      "On-premise deployment",
      "Advanced security & compliance",
      "SLA guarantee (99.9%)",
    ],
    icon: Globe,
    popular: false,
  },
];

const addOns = [
  { id: "extra-users", name: "Additional User Seats", price: 49, unit: "per user/month", icon: Users },
  { id: "advanced-analytics", name: "Advanced Analytics Module", price: 199, unit: "per month", icon: Activity },
  { id: "extra-storage", name: "Extra Cloud Storage", price: 99, unit: "per 500GB/month", icon: Database },
];

export default function OrderClient({ product }: { product: string }) {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, number>>({});

  const currentPlan = subscriptionPlans.find((p) => p.id === selectedPlan) || subscriptionPlans[1];
  
  const calculateTotal = () => {
    let total = currentPlan.price;
    if (billingCycle === "annual") {
      total = total * 12 * 0.85; // 15% annual discount
    }
    Object.entries(selectedAddOns).forEach(([id, quantity]) => {
      const addOn = addOns.find((a) => a.id === id);
      if (addOn && quantity > 0) {
        total += addOn.price * quantity * (billingCycle === "annual" ? 12 * 0.85 : 1);
      }
    });
    return total;
  };

  const handleCheckout = () => {
    const orderData = {
      type: 'subscription',
      plan: selectedPlan,
      billing: billingCycle,
      addOns: selectedAddOns,
      total: calculateTotal(),
      currency: 'USD',
    };
    sessionStorage.setItem('pendingOrder', JSON.stringify(orderData));
    router.push('/checkout');
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [id]: prev[id] ? 0 : 1,
    }));
  };

  const updateAddOnQuantity = (id: string, delta: number) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pt-24 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">SaaS Platform</Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Autonomous drone management platform. Scale your operations with AI-powered insights.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={billingCycle === "monthly" ? "font-semibold" : "text-muted-foreground"}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                billingCycle === "annual" ? "bg-primary" : "bg-muted"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  billingCycle === "annual" ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span className={billingCycle === "annual" ? "font-semibold" : "text-muted-foreground"}>
              Annual <Badge variant="secondary" className="ml-2">Save 15%</Badge>
            </span>
          </div>
        </motion.div>

        {/* Subscription Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {subscriptionPlans.map((plan, index) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            const displayPrice = billingCycle === "annual" ? Math.round(plan.price * 12 * 0.85) : plan.price;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full cursor-pointer backdrop-blur-sm transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-primary/10 ring-2 ring-primary/20 shadow-xl"
                      : "border-border bg-card/95 hover:border-primary/50"
                  } ${plan.popular ? "scale-105" : ""}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div
                        className={`p-3 rounded-xl transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      {isSelected && (
                        <Badge variant="secondary" className="text-xs">
                          SELECTED
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">${displayPrice.toLocaleString()}</span>
                        <span className="text-muted-foreground">
                          /{billingCycle === "annual" ? "year" : "month"}
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <p className="text-xs text-muted-foreground mt-1">
                          ${Math.round(displayPrice / 12)}/month billed annually
                        </p>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <Card className="backdrop-blur-sm bg-card/95 mb-8">
          <CardHeader>
            <CardTitle>Add-Ons & Extensions</CardTitle>
            <CardDescription>Enhance your plan with optional modules</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {addOns.map((addOn) => {
              const Icon = addOn.icon;
              const quantity = selectedAddOns[addOn.id] || 0;
              const isActive = quantity > 0;

              return (
                <div
                  key={addOn.id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    isActive ? "border-primary bg-primary/10" : "border-border hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-primary/20" : "bg-muted"}`}>
                      <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <div className="font-medium">{addOn.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ${addOn.price} {addOn.unit}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {quantity > 0 && (
                      <div className="flex items-center gap-2 mr-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateAddOnQuantity(addOn.id, -1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center font-semibold">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateAddOnQuantity(addOn.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                    )}
                    <Button
                      variant={isActive ? "secondary" : "outline"}
                      onClick={() => toggleAddOn(addOn.id)}
                    >
                      {isActive ? "Remove" : "Add"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="backdrop-blur-sm bg-card/95 border-2 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between pb-4 border-b">
              <div>
                <div className="font-medium">{currentPlan.name} Plan</div>
                <div className="text-sm text-muted-foreground">
                  {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">
                  ${(billingCycle === "annual" ? Math.round(currentPlan.price * 12 * 0.85) : currentPlan.price).toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">
                  /{billingCycle === "annual" ? "year" : "month"}
                </div>
              </div>
            </div>

            {Object.entries(selectedAddOns).map(([id, quantity]) => {
              if (quantity === 0) return null;
              const addOn = addOns.find((a) => a.id === id);
              if (!addOn) return null;
              const price = addOn.price * quantity * (billingCycle === "annual" ? 12 * 0.85 : 1);
              return (
                <div key={id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {addOn.name} {quantity > 1 && `(×${quantity})`}
                  </span>
                  <span className="font-medium">${Math.round(price)}</span>
                </div>
              );
            })}

            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-lg font-bold">Total</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">
                  ${Math.round(calculateTotal()).toLocaleString()}
                </span>
                <div className="text-xs text-muted-foreground">
                  /{billingCycle === "annual" ? "year" : "month"}
                </div>
              </div>
            </div>

            <Button onClick={handleCheckout} size="lg" className="w-full mt-6" variant="gradient">
              Start Subscription
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Cancel anytime. No long-term contracts. 14-day free trial included.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
