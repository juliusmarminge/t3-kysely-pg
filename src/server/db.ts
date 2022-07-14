import { env } from "./env";

import { Pool } from "pg";
import { PostgresDialect, Generated } from "kysely";
import { AuthedKysely } from "../adapter/kysely-adapter";

interface UserTable {
  id: Generated<string>;
  email: string;
}

interface AccountTable {}

interface VerificationTokenTable {}

interface SessionTable {}

export interface Database {
  user: UserTable;
  account: AccountTable;
  verificationToken: VerificationTokenTable;
  session: SessionTable;
}
export const db = new AuthedKysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: env.DATABASE_URL,
    }),
  }),
});
