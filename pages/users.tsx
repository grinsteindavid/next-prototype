import SearchUsers from 'components/search_users'
import Head from 'next/head'
import { Grid, Segment } from 'semantic-ui-react'

//https://api.github.com/search/users?q=david

export default function UsersPage(props: any) {
    return (
        <div>
            <Head>
                <title>Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={16} verticalAlign="middle">
                        <SearchUsers />

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
