const PORT = process.env.PORT || 3000

Bun.serve({
	port: PORT,
	fetch(req) {
		return new Response(`Bonjour ${process.env.NUMERICOACH}`)
	}
})
