import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover", // Use latest or compatible version
});

const prices = {
  base: 2499,
  pro: 3499,
  enterprise: 5999,
  battery: 199,
  care: 299,
};

export async function POST(request: Request) {
  try {
    const { plan, batteries, care } = await request.json();

    const planPrice = prices[plan as keyof typeof prices] || prices.base;
    const batteryCount = Math.max(0, parseInt(batteries) || 0);
    const batteryPrice = batteryCount * prices.battery;
    const carePrice = care ? prices.care : 0;
    
    // Calculate total in cents (Stripe expects cents)
    const amount = (planPrice + batteryPrice + carePrice) * 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
