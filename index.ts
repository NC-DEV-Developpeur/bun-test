Bun.serve({
	fetch(req) {
		return new Response(`Bonjour ${process.env.NUMERICOACH}`)
	}
})
