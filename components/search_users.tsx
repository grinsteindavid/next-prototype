import useDebounce from "hooks/debounce"
import { useState, useEffect } from "react"
import { Dropdown, DropdownItemProps, DropdownOnSearchChangeData } from "semantic-ui-react"
import Axios from 'axios'

export interface IProps {

}

export default function SearchUsers({

}: IProps) {
    const [options, setOptions] = useState<DropdownItemProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('')
    const queryDebounced = useDebounce(query, 300)

    function onSearchChange(event: React.SyntheticEvent<HTMLElement>, { searchQuery }: DropdownOnSearchChangeData) {
        setQuery(searchQuery)
    }

    async function searchUser() {
        try {

        } catch (error) {

        }
    }

    useEffect(() => {
        searchUser()
    }, [queryDebounced])

    return (
        <Dropdown
            fluid
            selectOnBlur={false}
            selection
            loading={isLoading}
            options={options}
            onSearchChange={onSearchChange}
        />
    )
}
