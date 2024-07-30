// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {},
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    HASHNODE_ENDPOINT: z.string().url(),
    HASHNODE_PUBLICATION_ID: z.string().min(1),
    GITHUB_ENDPOINT: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1),
    EMAIL_SERVICE_ID: z.string().min(1),
    EMAIL_TEMPLATE_ID: z.string().min(1),
    EMAIL_PUBLIC_KEY: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    HASHNODE_ENDPOINT: process.env.HASHNODE_ENDPOINT,
    HASHNODE_PUBLICATION_ID: process.env.HASHNODE_PUBLICATION_ID,
    GITHUB_ENDPOINT: process.env.GITHUB_ENDPOINT,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY
  },
});