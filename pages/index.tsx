import Head from 'next/head'
import CardsSection from '../src/components/homeNoAuth/cardsSection'
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth'
import PresentationSection from '../src/components/homeNoAuth/presentationSection'
import styles from '../styles/HomeNoAuth.module.scss'

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property='ob:title' content='OneBitFlix' key="title" />
        <meta name='description' content='Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!' />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
      </main>
    </>
  )
}

export default HomeNoAuth