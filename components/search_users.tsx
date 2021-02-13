import useDebounce from "hooks/debounce"
import { useState, useEffect } from "react"
import { Dropdown, DropdownItemProps, DropdownOnSearchChangeData, DropdownProps } from "semantic-ui-react"
import Axios from 'axios'

function mapToDropdownItems(item: any): DropdownItemProps {
    return {
        key: item.id,
        value: item.login,
        text: item.login,
        image: { avatar: true, src: item.avatar_url },
    }
}
export interface IProps {
    onSelect: (username: string) => void
}

export default function SearchUsers({
    onSelect
}: IProps) {
    const [options, setOptions] = useState<DropdownItemProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('')
    const queryDebounced = useDebounce(query, 350)

    function onChange(event: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) {
        onSelect(String(value))
    }

    function onSearchChange(event: React.SyntheticEvent<HTMLElement>, { searchQuery }: DropdownOnSearchChangeData) {
        setQuery(searchQuery)
    }

    async function searchUser() {
        setIsLoading(true)
        try {
            const response = await Axios.get<any, any>(`https://api.github.com/search/users?q=${queryDebounced}`)
            setOptions(response.data.items.map(mapToDropdownItems))
        } catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if (queryDebounced.length > 0) {
            searchUser()
        }
    }, [queryDebounced])

    return (
        <Dropdown
            fluid
            selectOnBlur={false}
            selection
            loading={isLoading}
            disabled={isLoading}
            options={options}
            search
            onSearchChange={onSearchChange}
            onChange={onChange}
        />
    )
}
