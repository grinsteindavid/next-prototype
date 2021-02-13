import { useMemo } from 'react'
import { List } from 'semantic-ui-react'

interface IProps {
    datasource: any[]
}

export default function RepositoryList(props: IProps) {
    const { datasource } = props

    return useMemo<JSX.Element>(() => {
        return (
            <List divided relaxed>
                {datasource.map(repository => {

                    return (
                        <List.Item key={repository.id}>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>{repository.name}</List.Header>
                                <List.Description as='a'>{repository.created_at}</List.Description>
                            </List.Content>
                        </List.Item>
                    )
                })}
            </List>
        )
    }, [datasource])
}