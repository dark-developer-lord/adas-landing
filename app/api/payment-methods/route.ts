export async function GET() {
	return new Response(JSON.stringify({ ok: true, message: 'payment-methods endpoint' }), {
		headers: { 'Content-Type': 'application/json' },
	})
}

export async function POST(request: Request) {
	// Minimal placeholder: accept a body and echo status
	try {
		const body = await request.json().catch(() => null)
		return new Response(JSON.stringify({ ok: true, received: body }), {
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (err) {
		return new Response(JSON.stringify({ ok: false, error: 'Invalid request' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
