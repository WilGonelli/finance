import { Router } from "express";
import type { Request, Response } from "express";
import { db_connection } from "../config/db";

const router = Router();

router.get("/entries", async (req: Request, res: Response) => {
  const response = await db_connection.query("SELECT * FROM Entries;");
  console.log(response.rows);
  res.send("ok");
});

export default router;
