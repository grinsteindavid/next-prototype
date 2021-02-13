import SearchRepositories from 'components/search_repositories'
import { useGlobalContext } from 'context/global'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

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
    const { setIsLoading } = useGlobalContext()
    const router = useRouter()

    function onSelect(repositoryName: string) {
        router.push(`/repositories/${repositoryName}`)
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <div>
            <Head>
                <title>{username} Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8} verticalAlign="middle">
                        <Segment.Group>
                            <Segment>
                                <Header
                                    icon="list"
                                    content={`${username} repositories`}
                                />
                            </Segment>
                            <Segment>
                                <SearchRepositories
                                    datasource={repositories}
                                    onSelect={onSelect}
                                />
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}