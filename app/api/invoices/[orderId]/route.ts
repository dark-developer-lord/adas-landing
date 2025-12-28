import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (
	_request: NextRequest,
	context: { params: { orderId: string } | Promise<{ orderId: string }> }
) => {
	try {
		// Next 16 may provide params as a Promise — await to support both shapes
		const paramsObj = (await context.params) as { orderId: string } | undefined;
		const orderId = paramsObj?.orderId;

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
};
