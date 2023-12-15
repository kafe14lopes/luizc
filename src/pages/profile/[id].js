import styles from '../../styles/Pages.module.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Profile({ futebol }) {
    return (
        <div>

            <Head>

                <title> titulo </title>

            </Head>

            <Navbar />

            <div className={styles.caixa_desc}>

                <h1> Objetos com Descrição</h1>

                    <div className={styles.caixa_text_desc}>

                        <p>Nome: {futebol.nome}</p>
                        <p>Descrição:</p>
                        <p>{futebol.descricao}</p>

                    </div>

                <div className={styles.botao_voltar}><button><a href='/futebol'>Voltar</a></button></div>

            </div>

            <Footer />

        </div>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol');
    const repo = await res.json();
    const futebol = repo[context.params.id]; // Ajuste para acessar corretamente os dados
    return {
        props: { futebol }
    };
};


export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb');
    const repo = await res.json();
    const Futebol = repo;
    const paths = Futebol.map((futebol, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}


export default Profile;
