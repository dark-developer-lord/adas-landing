import Pricing from "@/components/ui/pricing";
import FAQ from "@/components/ui/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - ADAS",
  description: "Simple, transparent pricing for teams of all sizes.",
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <Pricing />
      <FAQ />
    </div>
  );
}
