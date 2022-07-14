import { env } from "./env";

import { Pool } from "pg";
import { Kysely, PostgresDialect, Generated } from "kysely";

interface UserTable {
  id: Generated<string>;
  email: string;
}

interface AccountTable {}

interface VerificationTokenTable {}

interface SessionTable {}

interface Database {
  user: UserTable;
  account: AccountTable;
  verificationToken: VerificationTokenTable;
  //session: SessionTable;
}
export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: env.DATABASE_URL,
    }),
  }),
});
