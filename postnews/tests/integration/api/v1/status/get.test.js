test.only("GET to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

// test("SQL Injection tests", async () => {
//   //considerando que a busca no backend tá sendo feita assim:
//   // const databaseName = "request.nextUrl.searchParams.get("databaseName");""
//   //   console.log(`Nome do banco: ${databaseName}`);
//   //   const databaseOpenedConnectionsResult = await database.query(
//   //     `SELECT count(*)::int FROM pg_stat_activity WHERE datname ='${databaseName}';`,
//   //   );
//   //eu posso fazer o segunite:
//   // await fetch("http://localhost:3000/api/v1/status?databaseName=local_db");
//   // //`SELECT count(*)::int FROM pg_stat_activity WHERE datname ='${databaseName}';`
//   // await fetch("http://localhost:3000/api/v1/status?databaseName=");
//   // //`SELECT count(*)::int FROM pg_stat_activity WHERE datname ='';`
//   // await fetch("http://localhost:3000/api/v1/status?databaseName='';");
//   // //`SELECT count(*)::int FROM pg_stat_activity WHERE datname =''; ';`
//   // await fetch(
//   //   "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4);",
//   // );
//   // //`SELECT count(*)::int FROM pg_stat_activity WHERE datname =''; SELECT pg_sleep(4)SELECT pg_sleep(4);';`
//   // await fetch(
//   //   "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
//   // );
//   // //`SELECT count(*)::int FROM pg_stat_activity WHERE datname =''; SELECT pg_sleep(4)SELECT pg_sleep(4); --';`
// });
