import { useMemo } from 'react'
import { Button, Dropdown, DropdownItemProps, DropdownProps, Input, Label } from "semantic-ui-react"

function mapToDropdownItems(item: any): DropdownItemProps {
    return {
        key: item.id,
        value: item.name,
        text: item.name,
        icon: 'github',
        content: (
            <>
                <span>{item.name}</span>
                <span style={{ color: 'grey', marginLeft: 10 }}>{item.created_at}</span>
                {item.language && (
                    <Label
                        style={{ marginLeft: 10, fontSize: 7 }}
                        color="blue"
                        size="tiny"
                        content={item.language}
                    />
                )}
            </>
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
        <Input fluid action>
            <Dropdown
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                fluid
                selectOnBlur={false}
                selection
                options={options}
                search
                placeholder="Search repositories"
                onChange={onChange}
            />
            <Button icon="search" color="black" />
        </Input>
    )
}
