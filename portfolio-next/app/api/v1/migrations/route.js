import { NextResponse } from "next/server";
import migrationRunner from "node-pg-migrate";

export async function GET(request) {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
  });
  return NextResponse.json(migrations);
}
