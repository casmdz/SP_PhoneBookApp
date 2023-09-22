import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'

// WHEN WRITING A HOOK, ITS STANDARD TO WRITE THE FUNCTION AS "use"
export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // use effect on mount 
    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch}
}