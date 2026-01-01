export async function POST(request: Request) {
	try {
		const url = new URL(request.url)
		const parts = url.pathname.split('/').filter(Boolean)
		const id = parts[parts.length - 2] || parts[parts.length - 1]
		return new Response(JSON.stringify({ ok: true, subscriptionId: id, action: 'cancel' }), {
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (err) {
		return new Response(JSON.stringify({ ok: false, error: 'Failed to parse request' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
