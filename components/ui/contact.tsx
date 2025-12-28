"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Textarea, Select, SelectItem } from "@heroui/react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

const inputClasses = {
  inputWrapper: "bg-background/60 backdrop-blur-sm hover:bg-background/70 group-data-[focus=true]:bg-background/90",
  input: "text-foreground font-medium placeholder:text-muted-foreground",
  label: "!static !mb-1.5 text-foreground/90 font-medium"
};

const selectClasses = {
  trigger: "bg-background/60 backdrop-blur-sm hover:bg-background/70 data-[open=true]:bg-background/90",
  value: "text-foreground font-medium",
  label: "!static !mb-1.5 text-foreground/90 font-medium"
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "sales"
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSent(true);
      setFormState({ name: "", email: "", subject: "", message: "", department: "sales" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Get in <span className="text-primary ai-glitch" data-text="Touch">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          We're here to help — whether it's sales, partnerships or support. Reach out and we'll respond within 1 business day.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card depth-card p-8 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">sales@adas.tech</p>
                  <p className="text-muted-foreground">support@adas.tech</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-muted-foreground">123 Innovation Dr, Suite 100</p>
                  <p className="text-muted-foreground">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="glass-card depth-card p-8 rounded-2xl border border-border/50 space-y-6">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="Full Name"
                    placeholder="John Doe"
                    isRequired
                    value={formState.name}
                    onValueChange={(value) => setFormState({...formState, name: value})}
                    isDisabled={loading}
                    variant="bordered"
                    labelPlacement="outside"
                    classNames={inputClasses}
                  />
                  <Input 
                    label="Email Address"
                    type="email" 
                    placeholder="john@example.com"
                    isRequired
                    value={formState.email}
                    onValueChange={(value) => setFormState({...formState, email: value})}
                    isDisabled={loading}
                    variant="bordered"
                    labelPlacement="outside"
                    classNames={inputClasses}
                  />
                </div>

                <Select 
                  label="Department"
                  placeholder="Select department"
                  selectedKeys={[formState.department]}
                  onChange={(e) => setFormState({...formState, department: e.target.value})}
                  isDisabled={loading}
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={selectClasses}
                >
                  <SelectItem key="sales">Sales</SelectItem>
                  <SelectItem key="support">Support</SelectItem>
                  <SelectItem key="partnerships">Partnerships</SelectItem>
                  <SelectItem key="press">Press</SelectItem>
                </Select>

                <Input 
                  label="Inquiry Subject"
                  placeholder="How can we help?"
                  isRequired
                  value={formState.subject}
                  onValueChange={(value) => setFormState({...formState, subject: value})}
                  isDisabled={loading}
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={inputClasses}
                />

                <Textarea 
                  label="Your Message"
                  placeholder="Tell us more about your inquiry..."
                  isRequired
                  minRows={5}
                  value={formState.message}
                  onValueChange={(value) => setFormState({...formState, message: value})}
                  isDisabled={loading}
                  variant="bordered"
                  labelPlacement="outside"
                  classNames={inputClasses}
                />

                {error && <p className="text-danger text-sm">{error}</p>}

                <Button type="submit" className="w-full" size="lg" isLoading={loading} color="primary">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </>
            )}
          </form>

        </motion.div>
      </div>
    </section>
  );
}
