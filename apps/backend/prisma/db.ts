import { PrismaClient } from "../src/generated/prisma/client/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const libsql = createClient({
  url: "file:/Users/lubnaadibah/monorepo/apps/backend/prisma/dev.db"
});

const adapter = new PrismaLibSql(libsql);
export const prisma = new PrismaClient({ adapter });
