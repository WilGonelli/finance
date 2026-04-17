import { IAccounts } from "../../domain/models/AccountModel";
import { db_connection } from "../database/connection";
import { queries } from "../database/queries";

async function findAll() {
  const result = await db_connection.query(queries.selectAccounts);
  return result.rows;
}

async function save(account: IAccounts) {
  await db_connection.query(queries.createAccount, [
    account.name,
    account.type,
    account.credit_limit,
    account.closing_day,
    account.due_day,
  ]);
  return account;
}

export default { findAll, save };
