import { useGlobalContext } from 'context/global'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Card, Grid, Header, Image, Label, Message } from 'semantic-ui-react'

export const getServerSideProps: GetServerSideProps<{}, { id: string, repositoryId: string }> = async (context) => {
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
        const repository = repositories.find((repository: any) => repository.name === params?.repositoryId)

        return {
            props: {
                repository,
                user,
            }
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}

interface IProps {
    repository: any,
    user: any,
}

export default function UserRepositoryPage(props: IProps) {
    const { repository, user } = props
    const { setIsLoading } = useGlobalContext()
    const router = useRouter()

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <div>
            <Head>
                <title>{user.login} {repository.name}</title>
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
                                <Card.Description>
                                    {user.bio}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Header
                                    icon="github"
                                    content={<a href={repository.html_url} target="_blank">{repository.name}</a>}
                                    subheader={repository.created_at}
                                />

                                <Message
                                    color="grey"
                                    content={repository.description}
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}