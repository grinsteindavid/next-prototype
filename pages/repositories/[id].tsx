import { GetServerSideProps } from 'next'
import Head from 'next/head'

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

    return (
        <div>
            <Head>
                <title>Repositories</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



        </div>
    )
}