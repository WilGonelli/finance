import { IAccounts } from "../models/AccountModel";

export default class Account {
  constructor(private props: IAccounts) {
    if (!props.name) throw new Error("nome é obrigatorio");
    if (
      !["CHECKING", "CREDIT_CARD", "WALLET", "INVESTMENT"].includes(props.type)
    )
      throw new Error("tipo invalido");
  }

  get data() {
    return this.props;
  }
}
