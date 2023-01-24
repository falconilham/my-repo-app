import { useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { getListReposFromGitHub } from '@/request'
import { Card, CardHeader, CardContent } from '@mui/material'

function Home({ data }) {
  console.log({ data })
  return (
    <>
      <Head>
        <title>Mohamad Ilham Repository</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {data.map(({ name, id }) => {
          return (
            <Card key={id}>
              <CardHeader>{name}</CardHeader>
              <CardContent>{name}</CardContent>
            </Card>
          )
        })}
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await getListReposFromGitHub()
  const { data } = res
  return { props: { data } }
}

export default Home
