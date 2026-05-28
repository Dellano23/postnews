import database from "@/infra/database.js";

import { NextResponse } from "next/server";

export async function GET(request) {
  const updatedAt = new Date().toISOString();

  // -------------- Status - Postgres Version -------------- //

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  // -------------- Status - MaxConnections -------------- //

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );

  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  // -------------- Status - Open Connections -------------- //

  //aqui retorna todos os dados, mais facil pegar o retorno somente do número direto do banco
  //ao inves de puxar todos dados do banco e depois fazer a contagem

  // const databaseOpenedConnectionsResult = await database.query(
  //   "SELECT * FROM pg_stat_activity WHERE datname='local_db';",
  // );

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname= $1;",
    values: [databaseName],
  });

  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  return NextResponse.json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}
