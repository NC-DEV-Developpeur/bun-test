import z from "zod"

export const envSchema = z.object({
	PORT: z.string().default("3000"),
	NODE_ENV: z.string().default("development"),
	NUMERICOACH: z.string().min(3)
})

const env = envSchema.parse(process.env)

export default env
