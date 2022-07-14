// Example of a restricted endpoint that only authenticated users can access from https://next-auth.js.org/getting-started/example
import { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../server/db";

const restricted = async (req: NextApiRequest, res: NextApiResponse) => {
  /*const created = await db
    .insertInto("user")
    .values({ email: "test@test.com" })
    .returning("id")
    .executeTakeFirstOrThrow();
*/
  const user = await db
    .selectFrom("user")
    .select(["id", "email"])
    .where("id", "=", "1")
    .executeTakeFirst();

  res.status(200).json({ user });
};

export default restricted;
