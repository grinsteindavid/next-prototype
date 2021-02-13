import SearchRepositories from 'src/components/search_repositories'
import { useGlobalContext } from 'context/global'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'

export const getServerSideProps: GetServerSideProps<{}, { id: string }> = async (context) => {
    const { params } = context

    try {
        const [repositoriesResponse, userReponse] = await Promise.all([
            fetch(`https://api.github.com/users/${params?.id}/repos`),
            fetch(`https://api.github.com/users/${params?.id}`),
        ])
        const [repositories, user] = await Promise.all([
            repositoriesResponse.json(),
            userReponse.json(),
        ])

        return {
            props: {
                repositories,
                user,
            }
        }
    } catch (error) {
        console.error(error)
        context.res.statusCode = 302
        context.res.setHeader('Location', `/404`)
        return {
            props: {

            }
        }
    }
}

interface IProps {
    repositories: any[],
    user: any
}

export default function UserPage(props: IProps) {
    const { repositories, user } = props
    const { setIsLoading } = useGlobalContext()
    const router = useRouter()

    function onSelect(repositoryName: string) {
        setIsLoading(true)
        router.push(`/users/${user.login}/repositories/${repositoryName}`)
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <div>
            <Head>
                <title>Profile {user.login}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8} verticalAlign="middle">
                        <Card fluid>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='mini'
                                    src={user.avatar_url}
                                />
                                <Card.Header>{user.name}</Card.Header>
                                <Card.Meta>{user.location}</Card.Meta>
                                <Card.Description>{user.bio}</Card.Description>
                                <Card.Content extra>
                                    <SearchRepositories
                                        datasource={repositories}
                                        onSelect={onSelect}
                                    />
                                </Card.Content>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}