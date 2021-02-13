import SearchUsers from 'components/search_users'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Grid, Segment } from 'semantic-ui-react'

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
                        <Segment>
                            <SearchUsers
                                onSelect={onSelect}
                            />
                        </Segment>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
