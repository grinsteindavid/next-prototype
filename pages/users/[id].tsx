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
                repositories: data,
                username: params?.id
            }
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}

interface IProps {
    repositories: any[],
    username?: string
}

export default function UserPage(props: IProps) {
    const { repositories, username } = props
    const router = useRouter()

    function onSelect(repositoryName: string) {
        router.push(`/repositories/${repositoryName}`)
    }

    return (
        <div>
            <Head>
                <title>{username} Profile</title>
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