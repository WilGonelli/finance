type EntryType =
  | "INCOME"
  | "PAYMENT"
  | "FIXED_EXPENSE"
  | "VARIABLE_EXPENSE"
  | "INSTALLMENT_EXPENSE"
  | "INVESTMENT"
  | "TRANSFER";

type RecordsType = "DEBIT" | "CREDIT" | "PIX";

export interface EntryModel {
  name: string;
  type: EntryType;
  id?: number;
}

export interface RecordsModel {
  entry_id: number;
  value: number;
  installment_total: number;
  installment_relative: number;
  relative_date: Date;
  account: RecordsType;
  description?: string;
  id?: number;
  created_at?: Date;
}
