import { Router } from "express";
import type { Request, Response } from "express";
import { db_connection } from "../infra/database/connection";
import { queries } from "../infra/database/queries";
import type { IAccounts } from "../domain/models/AccountModel";

const router = Router();

router.get("/accounts", async (req: Request, res: Response) => {
  const response: IAccounts[] = (
    await db_connection.query(queries.selectAccounts)
  ).rows;
  res.status(200).send(response);
});

router.post("/account", async (req: Request, res: Response) => {
  const body: IAccounts = req.body;
  const response = await db_connection.query(queries.createAccount, [
    body.name,
    body.type.toUpperCase(),
    body.credit_limit || null,
    body.closing_day || null,
    body.due_day || null,
  ]);
  res.status(201).send("conta criada com sucesso");
});

export default router;
