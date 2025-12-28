"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@heroui/react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle2, CreditCard, Truck, Wallet, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";

const inputClasses = {
  inputWrapper: "bg-background/60 backdrop-blur-sm hover:bg-background/70 group-data-[focus=true]:bg-background/90",
  input: "text-foreground font-medium placeholder:text-muted-foreground",
  label: "!static !mb-1.5 text-foreground/90 font-medium"
};

// Stripe Imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

// PayPal Imports
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

function StripePaymentForm({ onSuccess, onError }: { onSuccess: () => void, onError: (msg: string) => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/checkout", // We'll handle success state manually if not redirecting
      },
      redirect: "if_required",
    });

    if (error) {
      onError(error.message || "An unexpected error occurred.");
      setIsLoading(false);
    } else {
      onSuccess();
      // No need to set loading false as we are transitioning
    }
  };

  return (
    <form id="stripe-payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
    </form>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "adas-x1";
  const plan = searchParams.get("plan") || "base";
  const batteries = parseInt(searchParams.get("batteries") || "0");
  const care = searchParams.get("care") === "true";

  const productName = product === "adas-x1" ? "ADAS X1" : "Product";

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  // Form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "United States",
  });

  const prices = {
    base: 2499,
    pro: 3499,
    enterprise: 5999,
    battery: 199,
    care: 299
  };

  const planName = {
    base: "Explorer Edition",
    pro: "Professional Kit",
    enterprise: "Enterprise Bundle"
  }[plan] || "Unknown Package";

  const planPrice = prices[plan as keyof typeof prices] || 0;
  const total = planPrice + (batteries * prices.battery) + (care ? prices.care : 0);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, plan, batteries, care }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      })
      .catch((err) => console.error("Error fetching payment intent:", err));
  }, [plan, batteries, care]);

  const handleSuccess = async () => {
    setLoading(true);
    
    try {
      // Save order to database
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          customerAddress: formData.address,
          customerCity: formData.city,
          customerCountry: formData.country,
          customerZip: formData.zip,
          product: productName,
          plan,
          planPrice,
          batteries,
          batteryPrice: batteries * prices.battery,
          care,
          carePrice: care ? prices.care : 0,
          totalAmount: total,
          paymentMethod,
          paymentId: clientSecret,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setOrderNumber(data.order.orderNumber);
        setStep(3);
      } else {
        throw new Error(data.error || "Failed to save order");
      }
    } catch (error) {
      console.error("Error saving order:", error);
      handleError("Order completed but failed to save. Please contact support.");
    } finally {
      setLoading(false);
    }
  };

  const handleError = (msg: string) => {
    setErrorMessage(msg);
    setLoading(false);
  };

  // Wrapper for the external button to trigger form submission
  const handleExternalSubmit = () => {
    setLoading(true);
    setErrorMessage(null);
    // The actual submission is handled by the form's onSubmit event
    // which is triggered by the button's form attribute
  };

  if (step === 3) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card depth-card p-12 rounded-3xl max-w-lg w-full"
        >
          <div className="h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your {productName} pre-order. We have sent a confirmation email with your order details and estimated shipping date.
          </p>
          <div className="bg-muted/30 p-4 rounded-xl mb-8 text-left">
            <div className="text-sm text-muted-foreground mb-1">Order Reference</div>
            <div className="font-mono font-bold">{orderNumber || `#ADAS-${Math.floor(Math.random() * 100000)}`}</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="flex-1" asChild>
              <Link href="/track">Track Order</Link>
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const stripeOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#0f172a',
      },
    },
  };

  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test", currency: "USD" }}>
      <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {/* Steps Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>1</div>
              <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                <div className={`h-full bg-primary transition-all duration-500 ${step >= 2 ? 'w-full' : 'w-0'}`} />
              </div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>2</div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="glass-card depth-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <Input 
                    label="First Name" 
                    placeholder="John" 
                    variant="bordered" 
                    labelPlacement="outside"
                    classNames={inputClasses}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  <Input 
                    label="Last Name" 
                    placeholder="Doe" 
                    variant="bordered" 
                    labelPlacement="outside"
                    classNames={inputClasses}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  <Input 
                    label="Email Address" 
                    placeholder="john@example.com" 
                    type="email" 
                    className="md:col-span-2" 
                    variant="bordered" 
                    labelPlacement="outside"
                    classNames={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Input 
                    label="Phone Number" 
                    placeholder="+1 (555) 000-0000" 
                    className="md:col-span-2" 
                    variant="bordered" 
                    labelPlacement="outside"
                    classNames={inputClasses}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Input 
                    label="Street Address" 
                    placeholder="123 Drone Way" 
                    className="md:col-span-2" 
                    variant="bordered" 
                    labelPlacement="outside"
                    classNames={inputClasses}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                  <Input 
                    label="City" 
                    placeholder="San Francisco" 
                    variant="bordered" 
                    labelPlacement="outside"
                    classNames={inputClasses}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  <Input 
                    label="Zip / Postal Code" 
                    placeholder="94105" 
                    variant="bordered" 
                    labelPlacement="outside"
                    classNames={inputClasses}
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card depth-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className={`cursor-pointer rounded-xl border p-4 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'stripe' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border hover:bg-muted/50'}`}
                        onClick={() => setPaymentMethod('stripe')}
                      >
                        <CreditCard className={`h-6 w-6 ${paymentMethod === 'stripe' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className={`font-medium ${paymentMethod === 'stripe' ? 'text-primary' : 'text-muted-foreground'}`}>Card</span>
                      </div>
                      <div 
                        className={`cursor-pointer rounded-xl border p-4 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-500/5 ring-1 ring-blue-500' : 'border-border hover:bg-muted/50'}`}
                        onClick={() => setPaymentMethod('paypal')}
                      >
                        <Wallet className={`h-6 w-6 ${paymentMethod === 'paypal' ? 'text-blue-500' : 'text-muted-foreground'}`} />
                        <span className={`font-medium ${paymentMethod === 'paypal' ? 'text-blue-500' : 'text-muted-foreground'}`}>PayPal</span>
                      </div>
                    </div>

                    {paymentMethod === 'stripe' && clientSecret && (
                      <Elements stripe={stripePromise} options={stripeOptions}>
                        <StripePaymentForm onSuccess={handleSuccess} onError={handleError} />
                      </Elements>
                    )}

                    {paymentMethod === 'paypal' && (
                      <div className="text-center py-6 space-y-4 bg-muted/20 rounded-xl border border-dashed border-border">
                        <p className="text-muted-foreground">Complete your purchase securely with PayPal.</p>
                      </div>
                    )}

                    {errorMessage && (
                      <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errorMessage}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      Payments are secure and encrypted.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24"
            >
              <Card className="glass-card depth-card">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Product</span>
                    <span className="font-medium">{productName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{planName}</span>
                    <span>${planPrice.toLocaleString()}</span>
                  </div>
                  {batteries > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Extra Batteries (x{batteries})</span>
                      <span>${(batteries * prices.battery).toLocaleString()}</span>
                    </div>
                  )}
                  {care && (
                    <div className="flex justify-between text-sm">
                      <span>ADAS Care Refresh</span>
                      <span>${prices.care.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="h-px bg-border my-2" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  {paymentMethod === 'stripe' ? (
                    <Button 
                      size="lg" 
                      className="w-full" 
                      type="submit" 
                      form="stripe-payment-form"
                      disabled={loading || !clientSecret}
                      onClick={handleExternalSubmit}
                    >
                      {loading ? "Processing..." : `Pay $${total.toLocaleString()}`}
                    </Button>
                  ) : (
                    <div className="w-full">
                      <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                              {
                                amount: {
                                  currency_code: "USD",
                                  value: (total).toString(),
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order!.capture().then((details) => {
                            handleSuccess();
                          });
                        }}
                      />
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
