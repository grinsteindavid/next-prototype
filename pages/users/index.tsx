import SearchUsers from 'src/components/search_users'
import { useGlobalContext } from 'context/global'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Grid, Header, Segment } from 'semantic-ui-react'

export default function UsersPage() {
    const router = useRouter()
    const { setIsLoading } = useGlobalContext()

    function onSelect(username: string) {
        setIsLoading(true)
        router.push(`/users/${username}`)
    }

    return (
        <div>
            <Head>
                <title>Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={5}></Grid.Column>
                    <Grid.Column width={6} verticalAlign="middle">
                        <Segment.Group>
                            <Segment>
                                <Header
                                    style={{ fontWeight: 200 }}
                                    color="grey"
                                    icon="github"
                                    content="Github Users"
                                />
                            </Segment>
                            <Segment>
                                <SearchUsers
                                    onSelect={onSelect}
                                />
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={5}></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
