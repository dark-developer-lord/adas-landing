import Contact from "@/components/ui/contact";
import FAQ from "@/components/ui/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - ADAS",
  description: "Get in touch with our sales or support team.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
      <FAQ />
    </div>
  );
}
