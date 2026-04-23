import { useState } from "react";
import { Account } from "../models/AccountsModel";
import { AccountService } from "../services/AccountService";
import type { AccountType } from "../models/AccountsModel";

export function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selected, setSelected] = useState<AccountType | "selecione">(
    "selecione",
  );
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState<string>("");

  async function fetchData() {
    const data = await AccountService.getAll();
    setAccounts(data);
  }

  async function createAccount() {
    if (name.length < 1 || selected === "selecione") return;
    const data: Account = {
      name: name,
      type: selected,
    };

    const response = AccountService.create(data);
    console.log(response);
  }
  return {
    accounts,
    fetchData,
    selected,
    setSelected,
    open,
    setOpen,
    modalOpen,
    setModalOpen,
    name,
    setName,
    createAccount,
  };
}
