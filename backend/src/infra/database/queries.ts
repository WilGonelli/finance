export const queries = {
  createAccount:
    "INSERT INTO public.accounts( name, type, credit_limit, closing_day, due_day) VALUES ( $1, $2, $3, $4, $5);",
  selectAccounts:
    "SELECT id, name, type, credit_limit, closing_day, due_day FROM public.accounts;",
};
