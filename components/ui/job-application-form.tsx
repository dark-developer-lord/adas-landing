"use client";

import { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Upload, Linkedin, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const inputClasses = {
  inputWrapper: "bg-background/60 backdrop-blur-sm hover:bg-background/70 group-data-[focus=true]:bg-background/90",
  input: "text-foreground font-medium placeholder:text-muted-foreground",
  label: "!static !mb-1.5 text-foreground/90 font-medium"
};

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
}

export function JobApplicationForm({ jobTitle, jobId }: JobApplicationFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    linkedin: "",
    portfolio: "",
    resume: "", // For now, we'll treat this as a link or text
    coverLetter: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          jobId,
          jobTitle,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSent(true);
      setFormState({
        name: "",
        email: "",
        linkedin: "",
        portfolio: "",
        resume: "",
        coverLetter: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border/50 rounded-xl p-8 text-center"
      >
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for applying to the {jobTitle} position. We'll review your application and get back to you shortly.
        </p>
        <Button variant="bordered" onClick={() => setSent(false)}>
          Submit another application
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 glass-card depth-card border border-border/50 rounded-xl p-6 md:p-8">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Apply for this position</h3>
        <p className="text-sm text-muted-foreground">
          Please fill out the form below to apply for {jobTitle}.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input 
          label="Full Name"
          placeholder="Jane Doe"
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
          placeholder="jane@example.com"
          isRequired
          value={formState.email}
          onValueChange={(value) => setFormState({...formState, email: value})}
          isDisabled={loading}
          variant="bordered"
          labelPlacement="outside"
          classNames={inputClasses}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input 
          label="LinkedIn Profile"
          placeholder="linkedin.com/in/janedoe"
          startContent={<Linkedin className="text-default-400 pointer-events-none flex-shrink-0" />}
          value={formState.linkedin}
          onValueChange={(value) => setFormState({...formState, linkedin: value})}
          isDisabled={loading}
          variant="bordered"
          labelPlacement="outside"
          classNames={inputClasses}
        />
        <Input 
          label="Portfolio / Website"
          placeholder="janedoe.com"
          startContent={<LinkIcon className="text-default-400 pointer-events-none flex-shrink-0" />}
          value={formState.portfolio}
          onValueChange={(value) => setFormState({...formState, portfolio: value})}
          isDisabled={loading}
          variant="bordered"
          labelPlacement="outside"
          classNames={inputClasses}
        />
      </div>

      <Input 
        label="Resume / CV Link"
        placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
        description="Please provide a public link to your resume."
        isRequired
        value={formState.resume}
        onValueChange={(value) => setFormState({...formState, resume: value})}
        isDisabled={loading}
        variant="bordered"
        labelPlacement="outside"
        classNames={inputClasses}
      />

      <Textarea 
        label="Cover Letter"
        placeholder="Tell us why you're a great fit for this role..."
        minRows={5}
        value={formState.coverLetter}
        onValueChange={(value) => setFormState({...formState, coverLetter: value})}
        isDisabled={loading}
        variant="bordered"
        labelPlacement="outside"
        classNames={inputClasses}
      />

      {error && <p className="text-danger text-sm">{error}</p>}

      <Button type="submit" className="w-full" size="lg" isLoading={loading} color="primary">
        {loading ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
