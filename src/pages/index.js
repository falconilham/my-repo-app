import styles from '@/styles/Home.module.sass'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'
import { getListReposFromGitHub } from '@/request'
import { wrapper } from '../redux/store'
import { setRepo } from '../redux/slices/repos'
import { Card, CardContent, Typography, Box } from '@mui/material'

function Home() {
  const { repos } = useSelector((state) => state)
  console.log({ repos })
  return (
    <main className={styles.main}>
      {repos.map(({ name, id, language, created_at }) => {
        const createdDate = moment(created_at).format('MMMM Do YYYY')
        return (
          <Card key={id}>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }} variant="subtitle1">{name}</Typography>
              <Box justifyContent="space-between" display="flex">
                <Typography variant="caption">{language}</Typography>
                <Typography variant="caption">{createdDate}</Typography>
              </Box>
            </CardContent>
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
