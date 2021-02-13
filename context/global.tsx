import React, { useState, createContext, useContext } from 'react';

interface IProvider {
    children: React.ReactNode
}

export interface IContextState {
    isLoading: boolean,
}

export const GlobalContext = createContext<{
    state: IContextState,
    setState: React.Dispatch<React.SetStateAction<IContextState>>
} | undefined>(undefined)

export function GlobalProvider(props: IProvider) {
    const { children } = props
    const [state, setState] = useState<IContextState>({
        isLoading: false,
    })

    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    const context = useContext(GlobalContext)

    if (context === undefined) {
        throw new Error('GlobalContext should be implemented within GlobalProvider')
    }

    const { state, setState } = context

    function setIsLoading(value: boolean) {
        setState(prevState => {
            return {
                ...prevState,
                isLoading: value
            }
        })
    }

    return {
        state,
        setIsLoading,
    }
}