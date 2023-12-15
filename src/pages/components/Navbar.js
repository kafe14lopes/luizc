import styles from '../../styles/Components.module.css';

export default function Navbar() {
    return (
        <div className={styles.cab}>
            <ul>
                <li><a href='/sobre'>Sobre nós</a></li>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/futebol'>Futebol</a></li>
            </ul>
        </div>
    )
}