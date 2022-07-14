import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KyselyAdapter from "../../../adapter/kysely-adapter";

import { db } from "../../../server/db";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: KyselyAdapter(db),
  providers: [],
};

export default NextAuth(authOptions);
