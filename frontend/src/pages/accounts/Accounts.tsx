import styles from "./accounts.module.css";
import Navbar from "../../components/navbar/Navbar";
import NewAccountModal from "../../components/modals/NewAccount";

import { useAccounts } from "../../viewmodel/AccountViewModel";
import { TypeAccount } from "../../configs/AccountsInfo";

import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import type { AccountType } from "../../models/AccountsModel";

export default function Accounts() {
  const {
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
  } = useAccounts();

  useEffect(() => {
    fetchData();
  }, []);

  console.log(accounts);

  return (
    <div className={styles.container}>
      <Navbar pageActive="account" />
      <div className={styles.body}>
        <h1 className={styles.title}>Contas</h1>
        <div className={styles.btnContainer}>
          <button onClick={() => setModalOpen(true)}>
            <FaPlus className={styles.icon} /> Adicionar conta
          </button>
        </div>
        <div className={styles.content}>
          {accounts.length > 0 ? (
            <div className={styles.accountsContainers}>
              {accounts.map((a, i) => {
                const typeKey: AccountType[] = a.type;
                return (
                  <div key={i} className={styles.cardAccount}>
                    <div className={styles.accountTitleContainer}>
                      <h3>{a.name.toUpperCase()}</h3>
                      <p>
                        {typeKey.map((t, j) => (
                          <span key={j}>
                            {TypeAccount[t].toUpperCase()}
                            {typeKey.length > j + 1 && " / "}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: 12 }}>
                      <p>saldo</p>
                      <p>
                        R${" "}
                        {a.balance?.toFixed(2).toString().replaceAll(".", ",")}
                      </p>
                    </div>
                    {a.type.includes("CREDIT_CARD") && (
                      <div>{a.credit_limit}</div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p className={styles.info}>
                você ainda não possui conta cadastrada
              </p>
            </div>
          )}
        </div>
      </div>
      {modalOpen && (
        <NewAccountModal
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
          open={open}
          openModal={modalOpen}
          setOpen={setOpen}
          setOpenModal={setModalOpen}
          createAccount={createAccount}
        />
      )}
    </div>
  );
}
