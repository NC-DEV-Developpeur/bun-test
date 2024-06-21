import env from "./env"

Bun.serve({
	fetch(req) {
		return new Response(`Bonjour ${env.NUMERICOACH}`)
	}
})
