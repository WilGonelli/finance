import styles from './dashboard.module.css'
import Navbar from '../../components/navbar/Navbar'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Navbar pageActive='dashboard' />
        </div>
    )
}