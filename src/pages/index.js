import Head from 'next/head'
import styles from '@/styles/Home.module.sass'
import { useSelector } from 'react-redux'
import { getListReposFromGitHub } from '@/request'
import { wrapper } from '../redux/store'
import { setRepo } from '../redux/slices/repos'
import { Card, CardContent } from '@mui/material'

function Home({ data }) {
  const { repos } = useSelector((state) => state)
  return (
    <main className={styles.main}>
      {repos.map(({ name, id }) => {
        return (
          <Card key={id}>
            <CardContent>{name}</CardContent>
          </Card>
        )
      })}
    </main>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await getListReposFromGitHub()
    const { data } = res
    store.dispatch(setRepo(data));
  })

export default Home
