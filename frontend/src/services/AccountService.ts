/* eslint-disable no-useless-catch */
import { api } from "../configs/api";
import { Account, type IAccount } from "../models/AccountsModel";

export class AccountService {
  static async getAll(): Promise<Account[]> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = (await api.get<any[]>("/accounts")).data;
      const grouped: Account[] = data.reduce(
        (acc, item) => {
          console.log(acc, item);
          if (!acc[item.name]) {
            acc[item.name] = {
              ...item,
              type: [item.type],
            };
          } else {
            acc[item.name].type.push(item.type);
            if (acc[item.type] === "CREDIT_CARD") {
              acc[item.name].credit_limit.push(item.credit_limit);
              acc[item.name].closing_day.push(item.closing_day);
              acc[item.name].due_day.push(item.due_day);
              acc[item.name].invoice.push(item.invoice);
            }
          }

          return acc;
        },
        {} as Record<string, IAccount>,
      );

      return Object.values(grouped).map((acc) => new Account(acc));
    } catch (err: unknown) {
      throw err;
    }
  }

  static async create(props: IAccount): Promise<Account> {
    try {
      const account = new Account(props);
      await api.post("/account", account);
      return account;
    } catch (err: unknown) {
      throw err;
    }
  }
}
