import styles from './navbar.module.css'

import { useNavigate } from 'react-router';

import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";

interface INavbarProps {
    pageActive: string
}

export default function Navbar(props: INavbarProps) {
    const navigate = useNavigate()
    const page = props.pageActive
    return (
        <div className={styles.navbar}>
            <p onClick={() => navigate('/dashboard')} className={`${page === 'dashboard' && styles.activate}`}><RiDashboardHorizontalFill className={styles.icon} /> Dashboard</p>
            <p onClick={() => navigate('/accounts')} className={`${page === 'account' && styles.activate}`}><MdAccountBalance className={styles.icon} /> Contas</p>
            <p onClick={() => navigate('/card')} className={`${page === 'card' && styles.activate}`}><FaCreditCard className={styles.icon} /> Cartões</p>
            <p onClick={() => navigate('/inveest')} className={`${page === 'inveest' && styles.activate}`}><AiOutlineBarChart className={styles.icon} /> Investimentos</p>
        </div>
    )
}