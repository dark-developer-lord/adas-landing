export async function POST(request: Request) {
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
