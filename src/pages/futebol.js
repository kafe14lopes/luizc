
import React from 'react';
import styles from '../styles/Pages.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function Futebol({ futebol }) {
    return (
        <div>

            <Head>

                <title> tituloo </title>

            </Head>

            <Navbar />

            <div className={styles.caixa_fut}>

            <h1> Objetos descritos de Futebol </h1>

            {futebol.map((futebol, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`} class="blau">
                    <div className={styles.caixa_link} key={futebol.id}> <p> {futebol.nome} </p> </div>
                </Link>
            ))}

            </div>

            <Footer />
            
        </div>
    )
}


export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const futebol = await repo;
    return {
        props: { futebol }
    }
})


export default Futebol;