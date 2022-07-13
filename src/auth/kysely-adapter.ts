import type {
  Adapter,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters";
import type { Account } from "next-auth";
import { Kysely } from "kysely";

// This is the minimal model required
export interface MinimalDB {
  User: AdapterUser;
  Account: Account;
  VerificationToken: VerificationToken;
  Session: AdapterSession;
}

export default function KyselyAdapter<DB extends MinimalDB>(
  client: Kysely<DB>,
  options = {}
): Adapter {
  return {
    async createUser(user) {
      //const { id } = await client.insertInto("User").values({})
      return {} as AdapterUser;
    },
    async getUser(id) {
      return null;
    },
    async getUserByEmail(email) {
      return null;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      return null;
    },
    async updateUser(user) {
      return {} as AdapterUser;
    },
    async deleteUser(userId) {
      return;
    },
    async linkAccount(account) {
      return;
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return;
    },
    async createSession({ sessionToken, userId, expires }) {
      return {} as AdapterSession;
    },
    async getSessionAndUser(sessionToken) {
      return { session: {} as AdapterSession, user: {} as AdapterUser };
    },
    async updateSession({ sessionToken }) {
      return {} as AdapterSession;
    },
    async deleteSession(sessionToken) {
      return;
    },
    async createVerificationToken({ identifier, expires, token }) {
      return null;
    },
    async useVerificationToken({ identifier, token }) {
      return null;
    },
  };
}
