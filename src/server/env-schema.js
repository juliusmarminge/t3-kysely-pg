const { z } = require("zod");

const envSchema = z.object({
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
});

module.exports.envSchema = envSchema;
