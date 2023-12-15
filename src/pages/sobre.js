import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from '../styles/Pages.module.css';

export default function Home() {

    return (

        <div>
            <Head>

                <title> titulo </title>

            </Head>

            <Navbar />

            <div className={styles.caixa_sobre}>

                <h1> Site de Descrições</h1>

                <h2>Site de descrições de objetos voltados para futebol</h2>
                <h2>Feito por Luis Cerutti do Instituto Federal de Mato Grosso do Suls</h2>
            </div>

            <Footer />
            
        </div>
    )
}
