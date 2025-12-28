import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const {
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      customerCity,
      customerCountry,
      customerZip,
      product,
      plan,
      planPrice,
      batteries = 0,
      batteryPrice = 0,
      care = false,
      carePrice = 0,
      totalAmount,
      paymentMethod,
      paymentId,
    } = body;

    // Generate unique order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

    // Create order in database
    const order = await prisma.order.create({
      data: {
        orderNumber,
        customerName,
        customerEmail,
        customerPhone,
        customerAddress,
        customerCity,
        customerCountry,
        customerZip,
        product,
        plan,
        planPrice: parseFloat(planPrice),
        batteries: parseInt(batteries),
        batteryPrice: parseFloat(batteryPrice),
        care: Boolean(care),
        carePrice: parseFloat(carePrice),
        totalAmount: parseFloat(totalAmount),
        paymentMethod,
        paymentStatus: "completed",
        paymentId,
        status: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      order,
      message: "Order created successfully",
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const orderNumber = searchParams.get("orderNumber");

    if (!email && !orderNumber) {
      return NextResponse.json(
        { error: "Email or order number parameter is required" },
        { status: 400 }
      );
    }

    // Search by order number (single result)
    if (orderNumber) {
      const order = await prisma.order.findUnique({
        where: { orderNumber },
      });

      if (!order) {
        return NextResponse.json({ success: true, orders: [] });
      }

      return NextResponse.json({ success: true, order, orders: [order] });
    }

    // Search by email (multiple results)
    if (email) {
      const orders = await prisma.order.findMany({
        where: { customerEmail: email },
        orderBy: { createdAt: "desc" },
      });

      return NextResponse.json({ success: true, orders });
    }

    return NextResponse.json({ success: true, orders: [] });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
