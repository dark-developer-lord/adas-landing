export async function POST(request: Request) {
	// Minimal placeholder for Stripe webhook endpoint
	try {
		// do not parse JSON blindly for stripe; echo receipt
		return new Response(JSON.stringify({ ok: true, received: true }), {
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (err) {
		return new Response(JSON.stringify({ ok: false }), { status: 400 })
	}
}
