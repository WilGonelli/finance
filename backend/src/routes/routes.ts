import { Router } from "express";
import type { Request, Response } from "express";
import { db_connection } from "../config/db";
import { queries } from "../config/queries";
import type { EntryModel, RecordsModel } from "../models/EntryModel";

const router = Router();

router.get("/entries", async (req: Request, res: Response) => {
  const response: EntryModel[] = (await db_connection.query(queries.getEntries))
    .rows;
  res.send(response);
});

router.get("/records", async (req: Request, res: Response) => {
  const response: RecordsModel[] = (
    await db_connection.query(queries.getRecords)
  ).rows;
  res.send(response);
});

router.get("/account-enum", async (req: Request, res: Response) => {
  const response = await db_connection.query(queries.accountEnum);
  res.send(response.rows);
});

router.get("/type-enum", async (req: Request, res: Response) => {
  const response = await db_connection.query(queries.typeEnum);
  res.send(response.rows);
});

router.post("/entries", async (req: Request, res: Response) => {
  const body: EntryModel = req.body;
  const response = await db_connection.query(queries.insertEntry, [
    body.name,
    body.type,
  ]);
  res.send("ok");
});

router.post("/records", async (req: Request, res: Response) => {
  const body: RecordsModel = req.body;
  if (!body.entry_id || !body.value || !body.account) res.send("nok");
  const response = await db_connection.query(queries.insertRecords, [
    body.entry_id,
    body.value,
    body.description || "",
    body.installment_total || 1,
    body.installment_relative || 1,
    body.relative_date,
    body.account.toUpperCase(),
  ]);
  res.send("ok");
});

export default router;
