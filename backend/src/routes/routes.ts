import express, { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

router.get("/entries", async (req: Request, res: Response) => {
  console.log("ok");
});

export default router;
