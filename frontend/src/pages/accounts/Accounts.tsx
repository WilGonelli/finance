import styles from './accounts.module.css'
import Navbar from '../../components/navbar/Navbar'

import { FaPlus } from "react-icons/fa";

export default function Accounts() {
    return (
        <div className={styles.container}>
            <Navbar pageActive='account' />
            <div className={styles.body}>
                <h1 className={styles.title}>Contas</h1>
                <div className={styles.btnContainer}>
                    <button><FaPlus className={styles.icon} /> Adicionar conta</button>
                </div>
            </div>
        </div>
    )
}