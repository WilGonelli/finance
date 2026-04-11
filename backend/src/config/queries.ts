export const queries = {
  insertEntry: "INSERT INTO Entries(name, type) VALUES ($1, $2);",
  getEntries: "SELECT * FROM Entries;",
  insertRecords:
    "INSERT INTO Records(entry_id, value, description, installment_total, installment_relative, relative_date, account) VALUES ($1, $2, $3, $4, $5, $6, $7);",
  getRecords: "SELECT * FROM Records;",
  typeEnum:
    "SELECT enumlabel FROM pg_enum WHERE enumtypid = 'entry_type'::regtype ORDER BY enumsortorder;",
  accountEnum:
    "SELECT enumlabel FROM pg_enum WHERE enumtypid = 'account_type'::regtype ORDER BY enumsortorder;",
};
