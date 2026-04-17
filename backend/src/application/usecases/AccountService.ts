import Account from "../../domain/entities/Account";
import { IAccounts } from "../../domain/models/AccountModel";
import accountRepository from "../../infra/repository/accountRepository";

class GetAccount {
  async execute() {
    return await accountRepository.findAll();
  }
}

class CreateAccount {
  async execute(data: IAccounts) {
    const account = new Account(data);
    return await accountRepository.save(account.data);
  }
}

const getAccount = new GetAccount();
const createAccount = new CreateAccount();

export default { getAccount, createAccount };
