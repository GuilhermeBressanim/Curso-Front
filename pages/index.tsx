import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import CardsSection from '../src/components/homeNoAuth/cardsSection'
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth'
import PresentationSection from '../src/components/homeNoAuth/presentationSection'
import SlideSection from '../src/components/homeNoAuth/slideSection'
import courseService, { CourseType } from '../src/service/courseService'
import styles from '../styles/HomeNoAuth.module.scss'


interface IndexPageProps {
  chrildren?: ReactNode
  course: CourseType[]
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
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
        <SlideSection newestCourses={course} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses()
  return {
    props: {
      course: res.data
    },
    revalidate: 3600 * 24
  }
}

export default HomeNoAuth