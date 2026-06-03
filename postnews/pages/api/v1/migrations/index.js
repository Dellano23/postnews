export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(501).json({
    message:
      "Migrations are not available through this API route. Use node-pg-migrate as a CLI script or in your deployment pipeline instead.",
  });
}
