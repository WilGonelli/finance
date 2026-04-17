import { Router } from "express";
import { getAccounts, createAccount } from "../controllers/accountController";

const router = Router();

router.get("/accounts", getAccounts);

router.post("/account", createAccount);

export default router;
