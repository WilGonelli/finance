export type AccountType = "CHECKING" | "CREDIT_CARD" | "WALLET" | "INVESTMENT";

export interface IAccount {
  name: string;
  type: AccountType[];
  id?: number;
  credit_limit?: number;
  closing_day?: number;
  due_day?: number;
  balance?: number;
  invoice?: number;
}

export class Account implements IAccount {
  name: string;
  type: IAccount["type"];
  id?: number;
  credit_limit?: number;
  closing_day?: number;
  due_day?: number;
  balance?: number;
  invoice?: number;

  constructor(props: IAccount) {
    this.name = props.name;
    this.type = props.type;
    this.balance = props.balance ?? 0;
    Object.assign(this, props);
  }
}
