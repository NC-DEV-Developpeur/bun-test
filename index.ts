import env from "./env"

Bun.serve({
	port: env.PORT,
	fetch(req) {
		return new Response(`Bonjour ${env.NUMERICOACH}`)
	}
})
