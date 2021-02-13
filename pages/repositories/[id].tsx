import SearchRepositories from 'components/search_repositories'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Grid } from 'semantic-ui-react'

export const getServerSideProps: GetServerSideProps<{}, { id: string }> = async (context) => {
    const { params } = context

    try {
        const response = await fetch(`https://api.github.com/users/${params?.id}/repos`)
        const data = await response.json()

        return {
            props: {
                repositories: data
            }
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}

interface IProps {
    repositories: any[]
}

export default function UserReposPage(props: IProps) {
    const { repositories } = props
    const router = useRouter()

    function onSelect(username: string) {
        router.push(`/repositories/${username}`)
    }

    return (
        <div>
            <Head>
                <title>Repositories</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={16} verticalAlign="middle">
                        <SearchRepositories
                            datasource={repositories}
                            onSelect={onSelect}
                        />

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}