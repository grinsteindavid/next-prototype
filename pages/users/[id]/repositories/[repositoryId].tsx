import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Grid } from 'semantic-ui-react'

export const getServerSideProps: GetServerSideProps<{}, { id: string }> = async (context) => {
    const { params } = context

    try {


        return {
            props: {

            }
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}

interface IProps {

}

export default function UserRepositoryPage(props: IProps) {
    const { } = props
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>User Repository</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={16} verticalAlign="middle">


                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}