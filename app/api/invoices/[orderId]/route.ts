import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
	_request: NextRequest,
	{ params }: { params: { orderId: string } }
) {
	try {
		const { orderId } = params;
		if (!orderId) {
			return NextResponse.json({ error: "orderId parameter is required" }, { status: 400 });
		}

		const order = await prisma.order.findUnique({ where: { id: orderId } });

		if (!order) {
			return NextResponse.json({ error: "Order not found" }, { status: 404 });
		}

		// Minimal invoice response — replace with PDF generation if needed
		return NextResponse.json({ invoice: order });
	} catch (err) {
		return NextResponse.json({ error: (err as Error)?.message || String(err) }, { status: 500 });
	}
}
