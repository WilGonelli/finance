type AccountType = "CHECKING" | "CREDIT_CARD" | "WALLET" | "INVESTMENT";

export interface IAccounts {
  name: string;
  type: AccountType;
  id?: number;
  credit_limit?: number;
  closing_day?: number;
  due_day?: number;
}
