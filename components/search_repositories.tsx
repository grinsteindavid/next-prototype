import { useMemo } from 'react'
import { Dropdown, DropdownItemProps, DropdownProps } from "semantic-ui-react"

function mapToDropdownItems(item: any): DropdownItemProps {
    return {
        key: item.id,
        value: item.name,
        text: item.name,
        icon: 'github',
        content: (
            <a href={item.html_url} target="_blank">
                <span>{item.name}</span>
                <span style={{ color: 'grey', marginLeft: 10 }}>{item.created_at}</span>
            </a>
        )
    }
}

export interface IProps {
    datasource: any[],
    onSelect: (username: string) => void
}

export default function SearchRepositories({
    datasource,
    onSelect
}: IProps) {
    const options = useMemo<any[]>(() => {
        return datasource.map(mapToDropdownItems)
    }, [datasource])

    function onChange(event: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) {
        onSelect(String(value))
    }

    return (
        <Dropdown
            fluid
            selectOnBlur={false}
            selection
            options={options}
            search
            onChange={onChange}
            value=""
        />
    )
}
