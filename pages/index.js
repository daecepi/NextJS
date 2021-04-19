import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getAllPostsWithSlug } from '../lib/api'

import NavigationDefault from '../components/Navigation/NavigationDefault'

export default function Home({res}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Copper CRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {res.map((item) => {
        return(
          <h1 key='{item.title}' >{item.title}</h1>
        )
      }
      )}
         
      <NavigationDefault/>
        

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
export async function getStaticProps(context) {
  const res = await getAllPostsWithSlug();
  return {
    props: {
      res
    }, // will be passed to the page component as props
  }
}