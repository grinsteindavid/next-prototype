import SearchUsers from 'components/search_users'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Grid, Header, Segment } from 'semantic-ui-react'

export default function UsersPage(props: any) {
    const router = useRouter()

    function onSelect(username: string) {
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
                    <Grid.Column width={16} verticalAlign="middle">
                        <Segment.Group>
                            <Segment>
                                <Header
                                    icon="list"
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
                </Grid.Row>
            </Grid>
        </div>
    )
}
