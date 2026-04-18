import styles from './accounts.module.css'
import Navbar from '../../components/navbar/Navbar'

export default function Accounts() {
    return (
        <div className={styles.container}>
            <Navbar pageActive='account' />
        </div>
    )
}