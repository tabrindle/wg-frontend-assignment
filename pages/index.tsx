import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weavegrid Frontend Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://weavegrid.com">Weavegrid</a> Frontend Assessment
        </h1>

        <ul className={styles.list}>
          <li>
            Read through the requirements in
            <code className={styles.code}>README.md</code>
          </li>

          <li>
            Check out the API at
            <code className={styles.code}>pages/api/programs.ts</code>
          </li>

          <li>
            Find at the mockup in
            <code className={styles.code}>public/mockup.png</code>
          </li>

          <li>
            When you are ready, get started here: <Link href="/select-programs">Select Programs</Link> 
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home
