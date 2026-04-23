import styles from "./newAccount.module.css";
import { TypeAccount } from "../../configs/AccountsInfo";
import type { AccountType } from "../../models/AccountsModel";

interface NewAccountProps {
  selected: AccountType | "selecione";
  setSelected: (value: AccountType | "selecione") => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  name: string;
  setName: (value: string) => void;
  createAccount: () => void;
}

export default function NewAccountModal({
  selected,
  setSelected,
  open,
  setOpen,
  setOpenModal,
  name,
  setName,
  createAccount,
}: NewAccountProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <h1>Insira os dados da conta</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            createAccount();
            setOpenModal(false);
          }}
        >
          <div className={styles.modalNameAccount}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.modalLimitCreditAccount}>
            <label htmlFor="limit">Limite</label>
            <input
              id="limit"
              className={selected !== "CREDIT_CARD" ? styles.inactive : ""}
              type="number"
              defaultValue={0}
              min={0}
              disabled={selected === "CREDIT_CARD" ? false : true}
            />
          </div>
          <div className={styles.modalCloseDateAccount}>
            <label htmlFor="closeDay">Dia de feechamento</label>
            <input
              id="closeDay"
              className={selected !== "CREDIT_CARD" ? styles.inactive : ""}
              type="number"
              defaultValue={0}
              min={0}
              max={31}
              disabled={selected === "CREDIT_CARD" ? false : true}
            />
          </div>
          <div className={styles.modalDueeDateAccount}>
            <label htmlFor="dueDay">Dia de vencimento</label>
            <input
              id="dueDay"
              className={selected !== "CREDIT_CARD" ? styles.inactive : ""}
              type="number"
              defaultValue={0}
              min={0}
              max={31}
              disabled={selected === "CREDIT_CARD" ? false : true}
            />
          </div>
          <div className={styles.modalTypeAccount}>
            <p style={{ fontSize: 18, fontWeight: "bold" }}>Tipo</p>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
              >
                {selected === "selecione" ? selected : TypeAccount[selected]}
              </button>
              {open && (
                <div className={styles.dropbox}>
                  <p
                    onClick={() => {
                      setSelected("CHECKING");
                      setOpen(!open);
                    }}
                  >
                    Debito
                  </p>
                  <p
                    onClick={() => {
                      setSelected("CREDIT_CARD");
                      setOpen(!open);
                    }}
                  >
                    Credito
                  </p>
                  <p
                    onClick={() => {
                      setSelected("WALLET");
                      setOpen(!open);
                    }}
                  >
                    Carteira
                  </p>
                  <p
                    onClick={() => {
                      setSelected("INVESTMENT");
                      setOpen(!open);
                    }}
                  >
                    Investimento
                  </p>
                </div>
              )}
            </div>
          </div>
          <button className={styles.btnSubmit}>Submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(false);
            }}
            className={styles.btnCancel}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
