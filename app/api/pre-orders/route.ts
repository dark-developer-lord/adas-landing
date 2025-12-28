import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const {
      customerName,
      customerEmail,
      customerPhone,
      product,
      plan,
      estimatedPrice,
      quantity = 1,
      notes,
    } = body;

    // Validate required fields
    if (!customerName || !customerEmail || !product || !plan) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create pre-order in database
    const preOrder = await prisma.preOrder.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        product,
        plan,
        estimatedPrice: parseFloat(estimatedPrice) || 0,
        quantity: parseInt(quantity) || 1,
        notes,
        status: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      preOrder,
      message: "Pre-order created successfully",
    });
  } catch (error) {
    console.error("Error creating pre-order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create pre-order" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    const preOrders = await prisma.preOrder.findMany({
      where: { customerEmail: email },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, preOrders });
  } catch (error) {
    console.error("Error fetching pre-orders:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch pre-orders" },
      { status: 500 }
    );
  }
}
