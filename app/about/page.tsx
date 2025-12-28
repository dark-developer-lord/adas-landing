import Team from "@/components/ui/team";
import Partners from "@/components/ui/partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - ADAS",
  description: "Learn more about our mission and team.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Our Mission</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We are building the future of automated drone systems. Our goal is to make aerial autonomy accessible, safe, and reliable for every industry.
        </p>
      </section>
      <Team />
      <Partners />
    </div>
  );
}
