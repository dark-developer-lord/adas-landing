"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

const inputClasses = {
  inputWrapper: "bg-background/60 backdrop-blur-sm hover:bg-background/70 group-data-[focus=true]:bg-background/90",
  input: "text-foreground font-medium placeholder:text-muted-foreground",
  label: "!static !mb-1.5 text-foreground/90 font-medium"
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="w-full glass-card depth-card">
          <CardHeader className="space-y-1 text-center pb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-background/50 backdrop-blur-sm">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </motion.div>
            <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onValueChange={setEmail}
                isRequired
                variant="bordered"
                labelPlacement="outside"
                isDisabled={loading}
                classNames={inputClasses}
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onValueChange={setPassword}
                isRequired
                variant="bordered"
                labelPlacement="outside"
                isDisabled={loading}
                classNames={inputClasses}
              />
              {error && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-sm text-danger text-center bg-danger/10 p-2 rounded-md"
                >
                  {error}
                </motion.p>
              )}
              <Button 
                type="submit" 
                className="w-full font-semibold shadow-lg shadow-primary/20" 
                color="primary" 
                size="lg"
                isLoading={loading}
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
