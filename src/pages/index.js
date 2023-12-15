import Head from 'next/head';
import Navbar from '../pages/components/Navbar';
import Footer from '../pages/components/Footer';
import styles from '../styles/Pages.module.css';

export default function Home() {
  return (
      <div>

          <Head>

           <title> Titulo do Site </title>

          </Head>

          <Navbar />

              <div className={styles.caixa_inicio}>

                    <h1>Site de Descrições😉</h1>

              </div>

          <Footer />

      </div>
  )
}