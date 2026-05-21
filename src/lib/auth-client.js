import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({

  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
//   secret: process.env.BETTER_AUTH_SECRET
});

// export const { signIn, signUp, useSession } = createAuthClient()