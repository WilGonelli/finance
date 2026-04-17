import type { Request, Response } from "express";
import AccountService from "../../application/usecases/AccountService";

export async function getAccounts(req: Request, res: Response) {
  try {
    const accounts = await AccountService.getAccount.execute();
    res.status(200).json(accounts);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function createAccount(req: Request, res: Response) {
  try {
    const account = await AccountService.createAccount.execute(req.body);
    res.status(201).json(account);
  } catch (err: any) {
    res.status(400).json({ erro: err.message });
  }
}
