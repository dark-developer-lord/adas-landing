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
  CardFooter,
} from "@/components/ui/card";
import { Check, Plus, Minus, Shield, Zap, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

const packages = [
  {
    id: "base",
    name: "Explorer Edition",
    price: 2499,
    description: "Perfect for hobbyists and light commercial use.",
    features: [
      "ADAS X1 Drone",
      "1x Intelligent Battery",
      "Standard Controller",
      "Basic Carry Case",
    ],
    icon: Zap,
  },
  {
    id: "pro",
    name: "Professional Kit",
    price: 3499,
    description: "For serious aerial photographers and surveyors.",
    features: [
      "ADAS X1 Drone",
      "3x Intelligent Batteries",
      "Pro Controller with Screen",
      "Hard Shell Case",
      "ND Filters Set",
    ],
    icon: Briefcase,
  },
  {
    id: "enterprise",
    name: "Enterprise Bundle",
    price: 5999,
    description: "Complete solution for industrial inspections.",
    features: [
      "ADAS X1 Drone",
      "5x Intelligent Batteries",
      "Enterprise Ground Station",
      "RTK Module",
      "Thermal Camera Payload",
      "Priority Support",
    ],
    icon: Shield,
  },
];

export default function OrderClient({ product }: { product: string }) {
  const router = useRouter();
  const productName = product === "adas-x1" ? "ADAS X1" : "Product";

  const [selectedPackage, setSelectedPackage] = useState("pro");
  const [extraBatteries, setExtraBatteries] = useState(0);
  const [careRefresh, setCareRefresh] = useState(false);

  const batteryPrice = 199;
  const carePrice = 299;

  const currentPackage = packages.find((p) => p.id === selectedPackage) || packages[0];
  const totalPrice =
    currentPackage.price + extraBatteries * batteryPrice + (careRefresh ? carePrice : 0);

  const handleCheckout = () => {
    const params = new URLSearchParams({
      product,
      plan: selectedPackage,
      batteries: extraBatteries.toString(),
      care: careRefresh.toString(),
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Configure Your {productName}</h1>
          <p className="text-muted-foreground text-lg">
            Select the perfect package for your mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const isSelected = selectedPackage === pkg.id;

            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -5 }}
                className="relative cursor-pointer"
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <Card
                  className={`h-full glass-card depth-card transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border/50 hover:border-primary/30"
                  }`}
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
                        <div className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                          SELECTED
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">${pkg.price.toLocaleString()}</div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card depth-card">
            <CardHeader>
              <CardTitle>Add-ons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <div className="font-medium">Extra Intelligent Battery</div>
                  <div className="text-sm text-muted-foreground">Up to 55 mins flight time</div>
                  <div className="text-sm font-bold mt-1">${batteryPrice}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setExtraBatteries(Math.max(0, extraBatteries - 1))}
                    disabled={extraBatteries === 0}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-4 text-center font-medium">{extraBatteries}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setExtraBatteries(extraBatteries + 1)}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  careRefresh
                    ? "border-primary bg-primary/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
                onClick={() => setCareRefresh(!careRefresh)}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                      careRefresh
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted-foreground"
                    }`}
                  >
                    {careRefresh && <Check className="h-3 w-3" />}
                  </div>
                  <div>
                    <div className="font-medium">ADAS Care Refresh</div>
                    <div className="text-sm text-muted-foreground">
                      1-year comprehensive coverage for accidental damage.
                    </div>
                    <div className="text-sm font-bold mt-1">${carePrice}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card depth-card h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>{currentPackage.name}</span>
                <span>${currentPackage.price.toLocaleString()}</span>
              </div>
              {extraBatteries > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Extra Batteries (x{extraBatteries})</span>
                  <span>${(extraBatteries * batteryPrice).toLocaleString()}</span>
                </div>
              )}
              {careRefresh && (
                <div className="flex justify-between text-sm">
                  <span>ADAS Care Refresh</span>
                  <span>${carePrice.toLocaleString()}</span>
                </div>
              )}
              <div className="h-px bg-border my-2" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                *Estimated shipping: 2-3 weeks. Pre-order deposit is fully refundable.
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
