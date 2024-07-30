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
    NEXT_PUBLIC_HASHNODE_ENDPOINT: z.string().url(),
    NEXT_PUBLIC_HASHNODE_PUBLICATION_ID: z.string().min(1),
    NEXT_PUBLIC_GITHUB_ENDPOINT: z.string().min(1),
    NEXT_PUBLIC_GITHUB_TOKEN: z.string().min(1),
    NEXT_PUBLIC_EMAIL_SERVICE_ID: z.string().min(1),
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: z.string().min(1),
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NEXT_PUBLIC_HASHNODE_ENDPOINT: process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT,
    NEXT_PUBLIC_HASHNODE_PUBLICATION_ID: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID,
    NEXT_PUBLIC_GITHUB_ENDPOINT: process.env.NEXT_PUBLIC_GITHUB_ENDPOINT,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
  },
});